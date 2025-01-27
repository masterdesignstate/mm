<?php

use App\Http\Controllers\OAuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebPagesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;


Route::get('/', [WebPagesController::class,'index'])->name('home');
Route::get('terms-of-service', [WebPagesController::class,'tos'])->name('tos');
Route::get('about', [WebPagesController::class,'about'])->name('about');
Route::get('blog', [WebPagesController::class,'blog'])->name('blog');
Route::get('questions', [WebPagesController::class,'questions'])->name('questions');




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified','mandatory'])->name('dashboard');

Route::middleware(['auth','mandatory'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('mandatory-questions', [WebPagesController::class,'MandatoryQuestions'])->name('mandatory-questions');


    Route::get('all-questions',[WebPagesController::class,'AllQuestions'])->name('all-questions');

    Route::get('my-questions', [WebPagesController::class,'MyQuestions'])->name('my-questions');
    Route::post('my-questions', [WebPagesController::class,'MyQuestionsCreate'])->name('my-questions-create');





    Route::get('chat',function (){
        return Inertia::render('Chat');
    })->name('chat');

    Route::get('potential-matches',function (){
        return Inertia::render('PotentialMatches');
    })->name('potential-matches');


    Route::get('my-profile', [WebPagesController::class,'MyProfile'])->name('my-profile');
});


Route::middleware(['auth'])->group(function () {

    Route::get('on-boarding', [WebPagesController::class,'OnBoarding'])->name('on-boarding');
    Route::post('on-boarding', [WebPagesController::class,'OnBoardingPost'])->name('on-boarding-post');

    Route::get('questions/single-answer/{question}', [WebPagesController::class, 'SingleAnswer'])->name('question-single-answer');
    Route::post('questions/single-answer/{question}', [WebPagesController::class, 'SingleAnswerPost'])->name('question-single-answer-post');

});

require __DIR__.'/auth.php';





// OAuth Logins

Route::get('/facebook/auth/redirect', function () {
    return Socialite::driver('facebook')->redirect();
})->name('facebook.auth');

Route::get('/facebook/auth/callback', [OAuthController::class,'fb_create_user']);

Route::get('/google/auth/redirect', function () {
    return Socialite::driver('google')->redirect();
})->name('google.auth');

Route::get('/google/auth/callback', [OAuthController::class,'google_create_user']);
