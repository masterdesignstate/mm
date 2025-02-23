<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Inertia\Inertia;

class AnswerController extends Controller
{
    public function index()
    {
        $answers = Answer::with('question')->where('profile_id', auth()->user()->profile->id)->get();
        $questionIds = $answers->pluck('question_id');
        $questions = Question::with('answer')
            ->whereIn('id', $questionIds)
            ->where('is_approved', '!=', null)->get();
        $tags = array_values(Question::$tags);

        return Inertia::render('AnsweredQuestions', [
            'questions' => $questions,
            'tags' => $tags,
            'total_answers' => $answers
        ]);
    }

    public function destroy(Answer $answer)
    {
        $answer->delete();
        return redirect()->route('questions.index');
    }
}
