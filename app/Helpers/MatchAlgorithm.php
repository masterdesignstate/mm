<?php

namespace App\Helpers;


use App\Models\Answer;
use App\Settings\SystemSettings;
use Log;
use phpDocumentor\Reflection\Types\This;

class MatchAlgorithm
{
    public static $set;
    public $settings;

    public function __construct()
    {
        $this->settings = app(SystemSettings::class);
        self::$set = app(SystemSettings::class);
    }

    public static function v2Query($person1, $person2)
    {
        return $answers = Answer::query()
            ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
            ->where("answers.profile_id", $person1->id)
            ->where("seek.profile_id", $person2->id)
//            ->whereNot('answers.question_id', 1)
            ->leftJoin("questions as q", "answers.question_id", "=", "q.id")
            ->select(
                "answers.id",
                "answers.question_id as sf_question_id",
                "answers.profile_id as sf_profile_id",
                "answers.answer as sf_answer",
                "seek.id as sk_id",
                "seek.question_id as sk_question_id",
                "seek.profile_id as sk_profile_id",
                "seek.answer as sk_answer",
                "q.*"
            )->get();
    }


    public static function v2IndividualMatch($person1, $person2)
    {
        if (count($person1->answers) == 0 || count($person2->answers) == 0) {
            return 0;
        } else {
            $totalAdj = MatchAlgorithm::v2TotalAdj($person1, $person2);
            $totalMax = MatchAlgorithm::v2TotalMax($person1, $person2);
            $individualMatch = ($totalAdj / $totalMax) * 100;
            return round($individualMatch);
        }
    }

    public static function v2MatchOverall($person1, $person2)
    {
        $compPerson1wrtPerson2 = MatchAlgorithm::v2IndividualMatch($person1, $person2);
        $compPerson2wrtPerson1 = MatchAlgorithm::v2IndividualMatch($person2, $person1);

        return round(pow(($compPerson1wrtPerson2 * $compPerson2wrtPerson1), 0.5));
    }


    public static function v2SingleAdj($answer): int
    {
        $self_seek_answer = json_decode($answer->sf_answer)->seekAnswer;
        $self_self_answer = json_decode($answer->sf_answer)->selfAnswer;

        $seek_self_answer = json_decode($answer->sk_answer)->selfAnswer;
        $seek_seek_answer = json_decode($answer->sk_answer)->seekAnswer;

        $set = app(SystemSettings::class);

        if ($self_seek_answer->value === 6 || $seek_self_answer->value === 6) {

//            Upper * All
            $value = $set->upper_value * $set->all_value;
        } else {
//            $value = ($set->upper_value - abs($person1 - $person2)) * $person1Multiplier
            $value = ($set->upper_value -
                    abs($self_seek_answer->value - $seek_self_answer->value))
                * $self_seek_answer->multiplier;
        }
        return $value;
    }

    public static function v2TotalAdj($person1, $person2)
    {

        $answers = self::v2Query($person1, $person2);
        return $answers->reduce(function ($total, $answer) {
            $value = self::v2SingleAdj($answer);
            return $total += $value;
        }, 0);

    }

    public static function v2SingleMax($answer): int
    {
        $set = app(SystemSettings::class);

        $self_seek_answer = json_decode($answer->sf_answer)->seekAnswer;
        $self_self_answer = json_decode($answer->sf_answer)->selfAnswer;
        $seek_self_answer = json_decode($answer->sk_answer)->selfAnswer;
        $seek_seek_answer = json_decode($answer->sk_answer)->seekAnswer;


        if ($self_seek_answer->value === 6 || $seek_self_answer->value === 6) {
//            Upper * All
            $value = $set->upper_value * $self_seek_answer->multiplier * $set->all_value;
        } else {
//            $value = ($set->upper_value - abs($person1 - $person2)) * $person1Multiplier
            $value = $set->upper_value * $self_seek_answer->multiplier;
        }

        return $value;
    }

    public static function v2TotalMax($person1, $person2)
    {
        $answers = self::v2Query($person1, $person2);
        return $answers->reduce(function ($total, $answer) {
            $value = self::v2SingleMax($answer);
            if ($value == 0) {
                dd($value);
            }
            return $total += $value;
        }, 0);
    }

    public static function commonQuestionCount($person1, $person2)
    {
        return Answer::query()
            ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
            ->where("answers.profile_id", $person1->id)
            ->where("seek.profile_id", $person2->id)
            ->leftJoin("questions as q", "answers.question_id", "=", "q.id")
            ->select(
                "answers.id",
                "answers.question_id as sf_question_id",
                "answers.profile_id as sf_profile_id",
                "answers.answer as sf_answer",
                "seek.id as sk_id",
                "seek.question_id as sk_question_id",
                "seek.profile_id as sk_profile_id",
                "seek.answer as sk_answer",
                "q.*"
            )->count();
    }

    public static function matchOverall($person1, $person2)
    {

        try {

            $compPerson1wrtPerson2 = MatchAlgorithm::individualPercentage($person1, $person2);
            $compPerson2wrtPerson1 = MatchAlgorithm::individualPercentage($person2, $person1);

            return round(pow(($compPerson1wrtPerson2 * $compPerson2wrtPerson1), 0.5));

        } catch (\Exception $error) {
            \Illuminate\Log\log($error);
        }
    }


    public static function individualPercentage($person1, $person2)
    {
        $totalAdj = MatchAlgorithm::totalAdj($person1, $person2);
        $totalMax = MatchAlgorithm::totalMax($person1, $person2);
        try {
            if ($totalMax === 0) {
                $result = 0;
//                dump($person1, $person2);
            } else {
                $result = round(($totalAdj / $totalMax) * 100);
            }
        } catch (\Exception $error) {
            \Illuminate\Log\log($error);
        }
        return max($result, 0);
    }

    public static function totalAdj($person1, $person2)
    {
        $settings = app(SystemSettings::class);

        $answers = Answer::query()
            ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
            ->where("answers.profile_id", $person1->id)
            ->where("seek.profile_id", $person2->id)
            ->whereNot('answers.question_id', 1)
            ->leftJoin("questions as q", "answers.question_id", "=", "q.id")
            ->select(
                "answers.id",
                "answers.question_id as sf_question_id",
                "answers.profile_id as sf_profile_id",
                "answers.answer as sf_answer",
                "seek.id as sk_id",
                "seek.question_id as sk_question_id",
                "seek.profile_id as sk_profile_id",
                "seek.answer as sk_answer",
                "q.*"
            )->get();

        return $answers->reduce(function ($total, $answer) use ($settings) {
            $seekAnswerValue = json_decode($answer->sf_answer)?->seekAnswer;
            $selfAnswerValue = json_decode($answer->sk_answer)?->selfAnswer;

//            dd(is$seekAnswerValue, $selfAnswerValue);
            if (!(isset($seekAnswerValue->value) && isset($selfAnswerValue->value))) {
                return null;
            }
            //            if (!array_key_exists('value', json_decode($answer->sf_answer)?->seekAnswer)) {
//                return null; // Stop early if 'age' is missing
//            }
//            if (!array_key_exists('value', json_decode($answer->sk_answer)?->selfAnswer)) {
//                return null; // Stop early if 'age' is missing
//            }
            $delta = max((json_decode($answer->sf_answer)?->seekAnswer?->value - json_decode($answer->sk_answer)?->selfAnswer?->value), 0);
            $multiplier = json_decode($answer->sf_answer)?->seekAnswer?->multiplier;
            $adj = (4 - $delta) * $multiplier;
            return $total + $adj;
        }, 0);

    }

    public static function totalMax($person1, $person2)
    {
        $settings = app(SystemSettings::class);
        $answers = Answer::query()
            ->leftJoin("answers as seek", "answers.question_id", "=", "seek.question_id")
            ->where("answers.profile_id", $person1->id)
            ->where("seek.profile_id", $person2->id)
            ->whereNot('answers.question_id', 1)
            ->leftJoin("questions as q", "answers.question_id", "=", "q.id")
            ->select(
                "answers.id",
                "answers.question_id as sf_question_id",
                "answers.profile_id as sf_profile_id",
                "answers.answer as sf_answer",
                "seek.id as sk_id",
                "seek.question_id as sk_question_id",
                "seek.profile_id as sk_profile_id",
                "seek.answer as sk_answer",
                "q.*"
            )->get();

        return $answers->reduce(function ($total, $answer) use ($settings) {

//            if (!array_key_exists('value', json_decode($answer->sf_answer)?->seekAnswer)) {
//                return null; // Stop early if 'age' is missing
//            }
//            if (!array_key_exists('value', json_decode($answer->sk_answer)?->selfAnswer)) {
//                return null; // Stop early if 'age' is missing
//            }
            $multiplier = json_decode($answer->sf_answer)?->seekAnswer?->multiplier;
            $mul = 4 * $multiplier;
            return $total + $mul;
        }, 0);

    }
}
