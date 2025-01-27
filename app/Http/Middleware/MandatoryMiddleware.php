<?php

namespace App\Http\Middleware;

use App\Models\Profile;
use App\Models\Question;
use Closure;
use Illuminate\Http\Request;

class MandatoryMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $profile_id = auth()->user()->profile->id;
        $profile = Profile::where('id', $profile_id)->first();
        $mandatory_questions = Question::where('is_mandatory',1)
            ->doesntHave('answer')
            ->get();

//        dd($profile->getAttributes());

        if(empty($profile->age) || empty($profile->zip) || empty($profile->bio) || empty($profile->tag_line) || empty($profile->uname)){
            return redirect()->route('on-boarding');
        }

        if(count($mandatory_questions) > 0){
            return redirect()->route('question-single-answer',$mandatory_questions[0]->id);
        }


        return $next($request);
    }
}
