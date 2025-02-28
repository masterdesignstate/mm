<?php

namespace App\Http\Controllers;

use App\Helpers\DistanceHelper;
use App\Helpers\MatchAlgorithm;
use App\Models\Answer;
use App\Models\Profile;
use App\Models\ProfileResponse;
use App\Models\Question;
use App\Models\User;
use Carbon\Carbon;
use DB;
use Filament\Notifications\Notification;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use function PHPUnit\Framework\isEmpty;

class WebPagesController extends Controller
{

    public function home()
    {
        $questions = Question::limit(4)->get();
        return Inertia::render('HomeNew', ['questions' => $questions]);
    }

    public function index()
    {
        if (auth()->check() && !auth()->user()->is_admin) {
            return redirect()->route('my-profile');
        } else if (auth()->check() && auth()->user()->is_admin) {
            return redirect()->route('filament.admin.pages.dashboard');
        }
        $questions = Question::limit(4)->get();
        return Inertia::render('HomeNew', ['questions' => $questions]);
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

        $existingDp = [];

        if ($user_profile->hasMedia('dp')) {
            foreach ($user_profile?->getMedia('dp') as $media) {
                $existingDp[] = [
                    'source' => $media->getTemporaryUrl(now()->addMinutes(60)),  // Get file URL
                    'options' => [
                        'type' => 'local',
                        'metadata' => [
                            'media_id' => $media->id,
                            'poster' => $media?->getUrl(), // Thumbnail for images
                        ]
                    ]
                ];
            }
        }


        $existingGallery = [];

        foreach ($user_profile->getMedia('gallery') as $media) {
            $existingGallery[] = [
                'source' => $media->getTemporaryUrl(now()->addMinutes(60)),  // Get file URL
                'options' => [
                    'type' => 'local',
                    'metadata' => [
                        'media_id' => $media->id,
                        'poster' => $media->getUrl(), // Thumbnail for images
                    ]
                ]
            ];
        }

        $canNotEdit = false;
        if (isset($user_profile->zip) && isset($user_profile->uname)) {
            $canNotEdit = true;
        }

        return Inertia::render('OnBoarding', [
            'profile' => $user_profile,
            'existingDp' => $existingDp,
            'existingGallery' => $existingGallery,
            'canNotEdit' => $canNotEdit
        ]);
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
            'date_of_birth' => [
                'required',
                'date',
                'before_or_equal:' . Carbon::now()->subYears(18)->format('Y-m-d'), // At least 18 years old
                'after_or_equal:' . Carbon::now()->subYears(80)->format('Y-m-d'),  // Max 80 years old
            ],
            'zip' => 'required|postal_code:US',
            'bio' => 'required',
            'dp' => 'url|required',
//            'gallery' => 'null',
        ], [
            'dp' => "Display Picture not provided or uploaded properly."
        ]);


        $user_profile = Profile::where('user_id', auth()->user()->id)->first();
        if ($user_profile) {
            $user_profile->uname = $request->uname;
            $user_profile->tag_line = $request->tag_line;
            $user_profile->date_of_birth = $request->date_of_birth;
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
                'date_of_birth' => $request->date_of_birth,
                'zip' => $request->zip,
                'bio' => $request->bio,
            ];
            $profile = Profile::create($profile);
        }
//        if ($request->hasFile('dp') && $request->file('dp')->isFile()) {
//            $profile->addMediaFromRequest('dp')->toMediaCollection('dp', 's3');
//        }
//
//        if ($request->hasFile('gallery')) {
//            foreach ($request->file('gallery') as $image) {
//                if ($image->isFile()) $profile->addMedia($image)->toMediaCollection('gallery', 's3');
//            }
//        }
        return redirect()->route('questions.index');
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
        $multiArray = [];
        foreach ($tags as $tag) {
            $multiArray[] = [
                'value' => $tag,
                'label' => $tag,
            ];
        }
        $tags = $multiArray;
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

        ray($tags, $questions);

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
            'answers.*' => 'required|array|max:3|min:2',
            'q_tags' => 'required|array|max:3|min:1',
        ], [
                'q_tags.*' => 'Question tags are required. And cannot be more than 3',
                'answers.*' => 'Atleast 2 answers are required'
            ]
        );

//        dd($request->all());


        $question = Question::create([
            'question' => $request->question,
            'profile_id' => auth()->user()->profile->id,
            'tags' => $request->q_tags,
            'answers' => $request->answers,
        ]);

        $admin = User::where('is_admin',1)->first();
        Notification::make()
            ->title("Question Created by a Profile")
            ->body(auth()->user()->profile->name." created a question.")
            ->sendToDatabase($admin);

        ray($question);
        return redirect()->route('my-questions');
    }

    public function SingleAnswer(Question $question)
    {
        $question->load('answer');

        $percentage = null;
        if ($question->is_mandatory) {
            $mandatory_questions = Question::where('is_mandatory', 1)
                ->doesntHave('answer')
                ->get();

            $total_mandatory_questions = Question::where('is_mandatory', 1)->count();
            $percentage = 100 - ($mandatory_questions->count() / $total_mandatory_questions) * 100;
        }


        return Inertia::render('SingleAnswer', [
            'question' => $question,
            'percentage' => round($percentage)
        ]);
    }

    public function SingleAnswerPost(Question $question, Request $request)
    {

        $request->validate([
            'answer' => 'required|array',
        ]);


        $answer = Answer::updateOrCreate([
            'question_id' => $question->id,
            'profile_id' => auth()->user()->profile->id,
        ],[
            'question_id' => $question->id,
            'answer' => $request->answer,
            'profile_id' => auth()->user()->profile->id,
        ]);

        if($question->meta['skip_self']) {
            $answer->answer = [...$answer->answer,"selfAnswer"=>$answer->answer["seekAnswer"]];
            $answer->save();
        }
//        if($question->meta['skip_seeking'] &&  $answer->answer["seekAnswer"]['value'] ?? null) {
//            $answer->answer = [...$answer->answer,"seekAnswer"=>$answer->answer["selfAnswer"]];
//        }

        if ($question->id === 1) {
            auth()->user()->profile->update(['commitment' => $answer->seeking_answer]);

        } else if ($question->id === 2) {
            auth()->user()->profile->update(['gender' => $answer->self_answer]);
        }

        return redirect()->route('questions.index');
    }

    public function MyProfile()
    {
        $profile = Profile::where('user_id', auth()->user()->id)
            ->first();
        $questions = Question::with('answer')
            ->whereIn('id', [1, 2])
            ->get();

        $profile->setAttribute('gallery', $profile->gallery);
        ray($questions, $profile);
        return Inertia::render('MyProfile', [
            'profile' => $profile,
            'dp' => $profile->getFirstMediaUrl('dp'),
            'questions' => $questions
        ]);
    }


    public function matches()
    {
        $profiles = Profile::whereNot('user_id', auth()->user()->id)
            ->with('user')
            ->with('like_from_current_user')
            ->where('zip', '!=', null)
            ->get();


//        $distances = $profiles->map(fn($profile) => $profile->zip);
//        $distanceString = $distances->join('|');

//        $distanceData = DistanceHelper::getDistanceDataBulk(auth()->user()->profile->zip, $distanceString);


        $profiles->map(function ($profile, $index)  {
//            $profile->distance = $distanceData[$index];
            $profile->is_online = $profile->user->isOnline();
            $profile->overAllMatch = MatchAlgorithm::v2MatchOverall(auth()->user()->profile, $profile);
            $profile->match = [
                "overAllMatch" => MatchAlgorithm::v2MatchOverall(auth()->user()->profile, $profile),
                "youSeek" => MatchAlgorithm::v2IndividualMatch(auth()->user()->profile, $profile),
                "theySeek" => MatchAlgorithm::v2IndividualMatch($profile, auth()->user()->profile),
            ];
            $profile->common_question_count = MatchAlgorithm::commonQuestionCount(auth()->user()->profile, $profile);
        });
        $tags = array_values(Profile::$tags);

        ray($profiles->toArray());

        $profiles->sortBy(function (Profile $profile, int $key) {
            return $profile['match']['overAllMatch'];
        });

//            dd($profiles);
        return Inertia::render('PotentialMatches', [
            'profiles' => $profiles,
            'tags' => $tags,
            'ky' => config('services.distance_matrix_google.api_key')
        ]);
    }

    public function profile(Profile $profile)
    {
        $answers = Answer::where('profile_id', $profile->id)
            ->whereIn('question_id', [1, 2])
            ->get();


        $profile->load('like_from_current_user');
        $userLastActivity = DB::table('sessions')
            ->where('user_id', $profile?->user?->id)
            ->orderByDesc('last_activity')
            ->value('last_activity');

        $profile->common_question_count = MatchAlgorithm::commonQuestionCount(auth()->user()->profile, $profile);

        $profile->questions_answered = Answer::where('profile_id', $profile->id)
            ->count();

        $lastLogin = $userLastActivity
            ? Carbon::createFromTimestamp($userLastActivity)->diffForHumans()
            : 'Never logged in';

        $tags = array_values(Profile::$tags);
        $multiArray = [];
        foreach ($tags as $tag) {
            $multiArray[] = [
                'value' => $tag,
                'label' => $tag,
            ];
        }
        $tags = $multiArray;


        $ctags = $profile->like_from_current_user?->tags;
        if ($ctags === null) {
            $ctags = [];
        }

//        $profile->setAttribute('swiper', $profile->swiper);


        $match = [
            'overall' => MatchAlgorithm::v2MatchOverall(auth()->user()->profile, $profile),
            'you_seek' => MatchAlgorithm::v2IndividualMatch(auth()->user()->profile, $profile),
            'they_seek' => MatchAlgorithm::v2IndividualMatch($profile, auth()->user()->profile),
        ];

        $profile->load('user');
        $profile->is_online = $profile->user->isOnline();

        return Inertia::render('Profile', [
            'profile' => $profile,
            'answers' => $answers,
            'lastActivity' => $lastLogin,
            'tags' => $tags,
            'match' => $match,
            'ctags' => $ctags,
            'canMessage' => Profile::canMessage($profile)
        ]);
    }


    public function compare(Profile $partner)
    {
        $profile = Profile::where('user_id', auth()->user()->id)
            ->withCount('answers')
            ->first();
        $profile->load('answers');
        $partner->load('answers');

        $match = [
            'overall' => MatchAlgorithm::v2MatchOverall(auth()->user()->profile, $partner),
            'you_seek' => MatchAlgorithm::v2IndividualMatch(auth()->user()->profile, $partner),
            'they_seek' => MatchAlgorithm::v2IndividualMatch($partner, auth()->user()->profile),
        ];

//        dd($partner->zip,$profile->zip);

        return Inertia::render('Compare', [
            'partner' => $partner,
            'profile' => $profile,
            'answers' => $profile->answers,
            'partner_answers' => $partner->answers,
            'canMessage' => Profile::canMessage($partner),
            'common_question_count' => MatchAlgorithm::commonQuestionCount($profile, $partner),
            'match' => $match,
            'distance' => fn() => collect(DistanceHelper::getDistanceData($profile->zip, $partner->zip))->toArray(),
        ]);
    }


    public function clearAllNotifications()
    {
        $profile = auth()->user()->profile;
        $profile->unreadNotifications->markAsRead();
        return;
    }

}
