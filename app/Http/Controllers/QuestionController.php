<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $q_tags = Question::$tags;
        $questions = Question::with('answers')->where('is_approved', '!=', null)->get();

//        dd($questions);

        return Inertia::render('Questions/Index',[
            'questions' => $questions,
            'q_tags' => array_values($q_tags)
        ]);
    }


    public function answered_questions()
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        $question->load('answer');
        $question->setAttribute('times_answered',$question->times_answered);
        return Inertia::render('Questions/Show', [
            'question' => $question,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        $question->delete();
        return redirect()->route('questions.index');
    }
}
