<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ChatMessageController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\OAuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileResponseController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\WebPagesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;


Route::get('/', [WebPagesController::class, 'index'])->name('home');
Route::get('terms-of-service', [WebPagesController::class, 'tos'])->name('tos');
Route::get('about', [WebPagesController::class, 'about'])->name('about');
Route::get('blog', [WebPagesController::class, 'blog'])->name('blog');


//Route::get('home-new',[WebPagesController::class,'home'])->name('home-new');

Route::get('/dashboard', function () {
    return redirect()->route('my-profile');
})->middleware(['auth', 'verified', 'mandatory', 'prevent_admin'])->name('dashboard');


Route::middleware(['auth', 'mandatory'])->group(function () {


    Route::get('/settings', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/settings', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/settings', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::middleware(['prevent_admin'])->group(function () {


        Route::get('/online-users', [AuthenticatedSessionController::class, 'onlineUsers']);
        Route::get('mandatory-questions', [WebPagesController::class, 'MandatoryQuestions'])->name('mandatory-questions');

        Route::get('all-questions', [WebPagesController::class, 'AllQuestions'])->name('all-questions');

        Route::get('my-questions', [WebPagesController::class, 'MyQuestions'])->name('my-questions');
        Route::post('my-questions', [WebPagesController::class, 'MyQuestionsCreate'])->name('my-questions-create');


        Route::resource('questions', QuestionController::class)->only('show', 'destroy', 'index');

        Route::resource('answers', AnswerController::class)->only('index', 'destroy');


        Route::resource('profile-responses', ProfileResponseController::class)->only('store', 'destroy');
//    Route::post('profile-responses', [ProfileResponseController::class,'dislike'])->name('profile-response.dislike');


        Route::post('profile-responses/tags-store', [ProfileResponseController::class, 'tagsStore'])->name('tags-store');


        Route::get('compare/{partner}', [WebPagesController::class, 'compare'])->name('compare');


        Route::get('chat/{partner?}', [ChatMessageController::class, 'chat'])->name('chat');


        Route::get('my-profile', [WebPagesController::class, 'MyProfile'])->name('my-profile');

        Route::get('profile/{profile?}', [WebPagesController::class, 'profile'])->name('profile');


        Route::prefix('chat_files')->group(function () {
            Route::post('/file-upload', [FileUploadController::class, 'upload'])->name('file-upload.upload');
        });

        Route::get('results', [WebPagesController::class, 'Matches'])->name('matches');


        Route::post('clear-all-notifications', [WebPagesController::class, 'clearAllNotifications'])->name('clear-all-notifications');

    });

});


Route::middleware(['auth', 'prevent_admin'])->group(function () {

    Route::post('on-boarding', [WebPagesController::class, 'OnBoardingPost'])->name('on-boarding-post');

    Route::get('questions/single-answer/{question}', [WebPagesController::class, 'SingleAnswer'])->name('question-single-answer');
    Route::post('questions/single-answer/{question}', [WebPagesController::class, 'SingleAnswerPost'])->name('question-single-answer-post');


});

require __DIR__ . '/auth.php';

Route::post('chat-upload', [FileUploadController::class, 'chatUpload'])->name('chat-upload');
Route::post('dp-upload', [FileUploadController::class, 'dpUpload'])->name('dp-upload');
Route::post('gallery-item-upload', [FileUploadController::class, 'galleryUpload'])->name('gallery-item-upload');
Route::delete('/file-remove', [FileUploadController::class, 'remove'])->name('file.remove');


// OAuth Logins

Route::get('/facebook/auth/redirect', function () {
    return Socialite::driver('facebook')->redirect();
})->name('facebook.auth');

Route::get('/facebook/auth/callback', [OAuthController::class, 'fb_create_user']);

Route::get('/google/auth/redirect', function () {
    return Socialite::driver('google')->redirect();
})->name('google.auth');

Route::get('/google/auth/callback', [OAuthController::class, 'google_create_user']);


Route::post('send-message', [ChatMessageController::class, 'sendMessage'])->name('send-message');


Route::get('resend', function () {
    return to_route('filament.admin.pages.dashboard');
})->name('resend');


Route::get('ar_test', function () {
    $person1 = \App\Models\Profile::find(1);
    $person2 = \App\Models\Profile::find(9);

    dd(
        \App\Helpers\MatchAlgorithm::v2IndividualMatch($person1, $person2)
    );
});

Route::middleware(['auth', 'prevent_admin'])->group(function () {
    Route::get('on-boarding', [WebPagesController::class, 'OnBoarding'])->name('on-boarding');
    Route::get('all-questions', [WebPagesController::class, 'questions'])->name('public-questions');
});
