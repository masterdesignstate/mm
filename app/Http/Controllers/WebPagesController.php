<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Profile;
use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class WebPagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function blog()
    {
        return Inertia::render('Blog');
    }

    public function tos()
    {
        return Inertia::render('Tos');
    }

    public function questions()
    {
        $q_tags = Question::$tags;
        $questions = Question::with('answers')->get();

        ray($questions);
        return Inertia::render('Questions', [
            'questions' => $questions,
            'q_tags' => array_values($q_tags)
        ]);
    }

    public function OnBoarding()
    {
        $user_profile = Profile::where('user_id', auth()->user()->id)->first();
        return Inertia::render('OnBoarding', ['profile' => $user_profile]);
    }

    public function OnBoardingPost(Request $request)
    {
        $request->validate([
            'uname' => [
                'required',
                'string',
                'max:255',
                'alpha_dash',
                Rule::unique('profiles', 'uname')->ignore(auth()->user()->id, 'user_id'),
            ],
            'tag_line' => 'required|string',
            'age' => 'required|numeric|max:100|min:10',
            'zip' => 'required',
            'bio' => 'required',
        ]);
//        return Inertia::render('OnBoarding');

        $user_profile = Profile::where('user_id', auth()->user()->id)->first();
        if ($user_profile) {
            $user_profile->uname = $request->uname;
            $user_profile->tag_line = $request->tag_line;
            $user_profile->age = $request->age;
            $user_profile->zip = $request->zip;
            $user_profile->bio = $request->bio;
            $user_profile->save();
            $profile = $user_profile;
        } else {
            $profile = [
                'user_id' => auth()->user()->id,
                'name' => auth()->user()->name,
                'uname' => $request->uname,
                'tag_line' => $request->tag_line,
                'age' => $request->age,
                'zip' => $request->zip,
                'bio' => $request->bio,
            ];
            Profile::create($profile);
        }
        return redirect()->route('all-questions');
    }

    public function MandatoryQuestions()
    {
        $questions = Question::all();
        return Inertia::render('MandatoryQuestions', [
            'questions' => $questions
        ]);
    }

    public function MyQuestions()
    {
        $profile_id = auth()->user()->profile->id;
        $questions = Question::where('profile_id', $profile_id)->get();
        $tags = array_values(Question::$tags);
        ray($tags, $questions);
        return Inertia::render('MyQuestions', [
            'questions' => $questions,
            'tags' => $tags
        ]);
    }

    public function AllQuestions()
    {
        $questions = Question::with('answer')->where('is_approved', '!=', null)->get();
        $tags = array_values(Question::$tags);
        $answers = Answer::where('profile_id', auth()->user()->profile->id)->get();


        return Inertia::render('AllQuestions', [
            'questions' => $questions,
            'tags' => $tags,
            'total_answers' => $answers
        ]);
    }

    public function MyQuestionsCreate(Request $request)
    {
        $request->validate([
            'question' => 'required|string',
            'descriptor1' => 'required|string',
            'descriptor3' => 'required|string'
        ]);

        $tags = array_values(Question::$tags);

        $question = Question::create([
            'question' => $request->question,
            'descriptor1' => $request->descriptor1,
            'descriptor2' => $request->descriptor2,
            'descriptor3' => $request->descriptor3,
            'profile_id' => auth()->user()->profile->id,
            'tags' => $tags,
        ]);

        ray($question);
        return redirect()->route('my-questions');
    }

    public function SingleAnswer(Question $question)
    {
        $question->load('answer');
        return Inertia::render('SingleAnswer', [
            'question' => $question,
        ]);
    }

    public function SingleAnswerPost(Question $question, Request $request)
    {

        $request->validate([
            'answer' => 'required|string',
        ]);
        $answer = Answer::create([
            'question_id' => $question->id,
            'answer' => $request->answer,
            'profile_id' => auth()->user()->profile->id,
        ]);

        return redirect()->route('all-questions');
    }

    public function MyProfile()
    {
        $profile = Profile::where('user_id', auth()->user()->id)->first();
        $questions = Question::with('answer')
            ->whereIn('id', [1, 2])
            ->get();
        return Inertia::render('MyProfile', [
            'profile' => $profile,
            'questions' => $questions
        ]);
    }

}
