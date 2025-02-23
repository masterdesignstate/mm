import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import { ray, Ray } from "node-ray/web";
import React, { useEffect, useState } from "react";
import { CircleIcon } from "@hugeicons/react";
import InputError from "@/Components/InputError.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import GoBack from "@/Components/Shared/GoBack.jsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip.jsx";

Ray.useDefaultSettings({ host: "127.0.0.1" });

export default function SingleAnswer({ question, errors, percentage = 0 }) {
    const [selfAnswer, setSelfAnswer] = useState(null);
    const [seekAnswer, setSeekAnswer] = useState(null);
    const [isSeekingQuestion, setIsSeekingQuestion] = useState(false);

    const [isRequired, setIsRequired] = useState(false);
    const [isOkayWithAll, setIsOkayWithAll] = useState(false);

    const [skipSelf, setSkipSelf] = useState(question.meta.skip_self);
    const [skipSeeking, setSkipSeeking] = useState(question.meta.skip_seeking);

    const [multiplier, setMultiplier] = useState(1);

    ray(question).color("green");
    ray("Skip Self " + skipSelf, "Skip Seeking " + skipSeeking).color("orange");

    useEffect(() => {
        if (skipSelf) {
            setIsSeekingQuestion(true);
        }
        if (skipSeeking) {
            setIsSeekingQuestion(false);
        }
        if (question?.answer?.answer?.isOkayWithAll) {
            setIsOkayWithAll(true);
            setSeekAnswer(question.answers);
        }
    }, []);
    const submit = () => {
        let data = null;
        if (Array.isArray(seekAnswer)) {
            data = {
                selfAnswer: selfAnswer,
                seekAnswer: {
                    answers: seekAnswer,
                    value: 6,
                    multiplier: multiplier,
                    is_required:isRequired,
                },
                isOkayWithAll: isOkayWithAll,
            };
        } else {
            data = {
                selfAnswer: selfAnswer,
                seekAnswer: {
                    ...seekAnswer,
                    is_required:isRequired,
                    multiplier: multiplier,
                },
                isOkayWithAll: isOkayWithAll,
            };
        }
        console.log(seekAnswer);
        router.post(route("question-single-answer", question.id), {
            question_id: question.id,
            answer: data,
        });
        setIsSeekingQuestion(false);
        setIsRequired(false);
        setMultiplier(1);
        setIsOkayWithAll(false);
        setSeekAnswer(null);
        setSelfAnswer(null);
        setSkipSeeking(false);
        setSkipSelf(false);
    };

    const handleIsOkayWithAll = (e) => {
        if (e.target.checked) {
            setIsOkayWithAll(e.target.checked);
            setSeekAnswer(question.answers);
        } else {
            setIsOkayWithAll(e.target.checked);
            setSeekAnswer(null);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={question.question} />
            <div className="container mx-auto my-8 px-8">
                <GoBack />
            </div>
            <section className="mx-auto max-w-5xl px-4 lg:-mt-8 lg:px-0">
                <div>
                    <h2 className="text-2xl font-black text-bpurple-500 dark:text-white">
                        {Boolean(question.is_mandatory) && (
                            <span>Mandatory &nbsp;</span>
                        )}
                        Question
                    </h2>
                    {Boolean(question.is_mandatory) && (
                        <div>
                            <p>
                                Answer these questions to complete your profile
                            </p>

                            <div className="mb-8 mt-2 w-full">
                                <div className="flex items-center justify-between py-2">
                                    <h2>Completed</h2>
                                    <h3>{percentage} %</h3>
                                </div>
                                <div className="h-4 w-[100%] rounded-full border border-gray-300">
                                    <div
                                        style={{ width: `${percentage}%` }}
                                        className={
                                            "h-full rounded-full bg-gradient-to-r from-bpurple-500 to-bpurple-600"
                                        }
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <p className="mt-4 flex items-center space-x-2 text-2xl">
                        <span className="flex size-6 items-center justify-center rounded-full border border-gray-500 text-sm">
                            {question.question_number
                                ? question.question_number
                                : question.id}
                        </span>
                        <span>{question.question}</span>
                    </p>
                    <div className="mt-4 flex items-center justify-between space-x-2 text-sm">
                        {!isSeekingQuestion ? (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>Your Answer</TooltipTrigger>
                                    <TooltipContent>
                                        <p>The way you would answer</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ) : (
                            <>
                                <div className="flex w-full items-center justify-between">
                                    <div>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    Seeking Answer
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    The way you would like
                                                    others to answer
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>

                                    <div>
                                        {isSeekingQuestion && (
                                            <span className="flex items-center space-x-2">
                                                <label className="flex items-center space-x-2">
                                                    <Checkbox
                                                        name="isOkayWithAll"
                                                        className="size-6 checked:bg-bpurple-500 checked:focus:bg-bpurple-500"
                                                        checked={isOkayWithAll}
                                                        onChange={(e) =>
                                                            handleIsOkayWithAll(
                                                                e,
                                                            )
                                                        }
                                                    />
                                                    <span>Okay with All </span>
                                                </label>
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {!question.is_mandatory && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <label className="flex items-center space-x-2">
                                                    <Checkbox
                                                        name="isRequired"
                                                        className="size-6 checked:bg-bpurple-500 checked:focus:bg-bpurple-500"
                                                        checked={isRequired}
                                                        onChange={(e) =>
                                                            setIsRequired(
                                                                e.target
                                                                    .checked,
                                                            )
                                                        }
                                                    />
                                                    <span>Required</span>
                                                </label>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Exclude others who have not
                                                answered this question
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </>
                        )}
                    </div>
                    <InputError message={errors.answer} />
                </div>

                <div className="mt-8">
                    <div className="relative space-y-4">
                        {question.answers.length > 0 &&
                            question.answers.map((ans, index) => (
                                <div key={index}>
                                    <div className="group flex cursor-pointer items-center space-x-4">
                                        <span className="flex size-4 items-center justify-center hover:font-bold group-hover:text-bpurple-500">
                                            <CircleIcon
                                                size={"24"}
                                                variant={"solid"}
                                                className="hidden text-bpurple-500 group-hover:block"
                                            />
                                        </span>
                                        <div
                                            onClick={() =>
                                                isSeekingQuestion
                                                    ? setSeekAnswer(ans)
                                                    : setSelfAnswer(ans)
                                            }
                                            className={
                                                "w-full rounded-full border px-4 py-2 transition-all duration-500 group-hover:bg-bpurple-500 group-hover:text-white" +
                                                (!isSeekingQuestion
                                                    ? selfAnswer === ans
                                                        ? " bg-bpurple-500 text-white"
                                                        : ""
                                                    : seekAnswer === ans ||
                                                        seekAnswer?.length > 0
                                                      ? " bg-bpurple-500 text-white"
                                                      : "")
                                            }
                                        >
                                            {ans.answer}
                                        </div>
                                    </div>
                                    {/*                                    {(question.answers.length===2 && index ===0 ) && <div*/}
                                    {/*                                        key={index}*/}
                                    {/*                                        className="group flex cursor-pointer items-center space-x-4"*/}
                                    {/*                                    >*/}
                                    {/*                                        <div className="w-full mt-4 ml-8">*/}
                                    {/*                                            <div*/}
                                    {/*                                                className="dark:bg-transparent w-full rounded-full border px-4 py-2 transition-all duration-500 bg-bc-50 cursor-not-allowed ">*/}
                                    {/*&nbsp;*/}
                                    {/*                                            </div>*/}
                                    {/*                                        </div>*/}
                                    {/*                                    </div>*/}
                                    {/*                                    }*/}
                                </div>
                            ))}

                        <ul className="absolute top-0 flex h-[calc(100%-30px)] flex-col justify-between" >
                            {question.answers.length === 2
                                ? Array.from(
                                      { length: 2 },
                                      (_, index) => index + 1,
                                  ).map((item) => (

                                      <li className="h-1 w-2 translate-x-1/2  bg-bc-200"></li>
                                  ))
                                : Array.from(
                                      { length: 5 },
                                      (_, index) => index + 1,
                                  ).map((item) => (
                                      <li className="h-1 w-2 translate-x-1/2 bg-bc-200"></li>
                                  ))}
                        </ul>
                        <div className={"absolute left-0 top-0 ml-2  w-px -translate-x-1/2 bg-gray-800 dark:bg-bc-50 " + (question.answers.length == 2 ? "h-[70%]" : "h-[80%]") }></div>
                    </div>

                    {isSeekingQuestion && (
                        <div className="mt-8 w-full">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <InputLabel
                                            htmlFor="multiplier"
                                            value={
                                                <span>
                                                    Multiplier:
                                                    <small className="ml-2 text-sm text-gray-500">
                                                        Enter value between 1 to
                                                        10. Default is 1
                                                    </small>
                                                </span>
                                            }
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Increasing the multiplier will
                                        prioritize this question
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TextInput
                                id="multiplier"
                                type="number"
                                name="multiplier"
                                max={10}
                                min={1}
                                value={multiplier}
                                className="mt-1 block w-full border-gray-100 px-20 text-center lg:w-auto"
                                isFocused={true}
                                onChange={(e) => setMultiplier(e.target.value)}
                            />

                            <InputError
                                message={errors.multiplier}
                                className="mt-2"
                            />
                        </div>
                    )}

                    <div className="my-8 flex items-center justify-between space-x-2">
                        <ul className="group flex cursor-pointer items-center space-x-2">
                            <li>Tags:</li>
                            {question.tags.length > 0 &&
                                question.tags.map((tag, index) => (
                                    <li
                                        key={index}
                                        className="rounded-full bg-bpurple-400 px-4 py-1 text-sm text-white"
                                    >
                                        {tag}
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className="flex items-center justify-between">
                        {/*{question.is_mandatory ? (*/}
                        {/*    <Link href={route("public-questions")}>*/}
                        {/*        <button className="rounded-full border bg-white px-8 py-2 dark:text-bc-600">*/}
                        {/*            Go Back*/}
                        {/*        </button>*/}
                        {/*    </Link>*/}
                        {/*) : (*/}
                        <span></span>
                        {/*)}*/}
                        {!isSeekingQuestion ? (
                            !skipSeeking ? (
                                <button
                                    disabled={!selfAnswer}
                                    onClick={() => setIsSeekingQuestion(true)}
                                    className="rounded-full bg-bpurple-500 px-8 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    disabled={!selfAnswer}
                                    onClick={submit}
                                    className="rounded-full bg-bpurple-500 px-8 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black"
                                >
                                    Submit
                                </button>
                            )
                        ) : (
                            <div className="flex w-full items-center justify-between space-x-4">
                                {!question.isSkipSelf ? (
                                    <button
                                        className="rounded-full border bg-white px-8 py-2 dark:text-bc-900"
                                        onClick={() =>
                                            setIsSeekingQuestion(false)
                                        }
                                    >
                                        Go Back
                                    </button>
                                ) : (
                                    <span></span>
                                )}
                                <button
                                    disabled={!(isOkayWithAll || seekAnswer)}
                                    onClick={submit}
                                    className="rounded-full bg-bpurple-500 px-8 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black"
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
