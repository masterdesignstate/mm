import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ray } from "node-ray/web";
import Checkbox from "@/Components/Checkbox.jsx";
import { Button } from "@/Components/ui/Button.jsx";
import { Head, Link } from "@inertiajs/react";
import GoBack from "@/Components/Shared/GoBack.jsx";

const Show = ({ question }) => {
    ray(question).color("orange");
    const stops = [1, 2, 3, 4, 5]; // Only 5 positions

    const [answers, setAnswers] = React.useState(question.answers);
    return (
        <AuthenticatedLayout>
            <Head title={question.question} />
            <div className="container mx-auto my-8 px-8">
                <GoBack />
            </div>
            <section className="mx-auto max-w-5xl px-4 lg:-mt-8 lg:px-0">
                <h1 className="mt-8 text-2xl font-bold text-bpurple-500">
                    Question
                </h1>
                <h2 className="mt-2 flex items-center space-x-2 text-2xl">
                    <span className="flex size-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-500 text-sm">
                        {question.question_number
                            ? question.question_number
                            : question.id}
                    </span>
                    <span>{question.question}</span>
                </h2>
                <p className="mt-4">
                    Times answered by others: {question.times_answered}
                </p>

                <div className="mt-4">
                    <div className="flex w-full items-center justify-between">
                        <span>Your Answer</span>
                        {/*<div>*/}
                        {/*    <label className="space-x-2" htmlFor="">*/}
                        {/*        <Checkbox*/}
                        {/*            disabled*/}
                        {/*            checked={*/}
                        {/*                question.answer.answer.isOkayWithAll*/}
                        {/*            }*/}
                        {/*        />*/}
                        {/*        <span>Required</span>*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                    </div>
                    <SliderPrimitive.Root
                        className="relative z-50 my-4 flex w-full select-none items-center"
                        value={[question?.answer?.answer?.selfAnswer?.value]}
                        min={1}
                        max={5}
                        step={1} // Ensures it moves only in 25 increments (5 stops)
                    >
                        <div className="absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1">
                            {stops.map((stop) => (
                                <div
                                    key={stop}
                                    className="z-50 h-3 w-1 rounded bg-gray-400"
                                />
                            ))}
                        </div>
                        <div className="absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1">
                            {question.answers.map((stop, ind) => (
                                    <div
                                        key={"self" + stop}
                                        className="z-50 h-3 w-1 rounded bg-gray-400"
                                    />
                            ))}
                        </div>

                        <SliderPrimitive.Track className="relative -z-20 h-1 w-full rounded bg-gray-200">
                            <SliderPrimitive.Range className="absolute h-full" />
                        </SliderPrimitive.Track>
                        <SliderPrimitive.Thumb className="absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none">
                            <svg
                                className="size-6"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="1"
                                    y="1"
                                    width="14.5584"
                                    height="15"
                                    rx="7.27922"
                                    fill="#F3F0FF"
                                />
                                <rect
                                    x="1"
                                    y="1"
                                    width="14.5584"
                                    height="15"
                                    rx="7.27922"
                                    stroke="#692EB7"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="8.2793"
                                    cy="8.5"
                                    r="4.5"
                                    fill="#682EB8"
                                />
                            </svg>
                        </SliderPrimitive.Thumb>
                    </SliderPrimitive.Root>
                    <ul className="flex w-full justify-between">
                        {answers.map((answer) => (
                            <li key={answer.answer}>{answer.answer}</li>
                        ))}
                    </ul>
                </div>
                <div className="my-8">
                    <div className="flex items-center justify-between">
                        <span>Seeking Answer</span>
                        <div className="space-x-4">
                            <label className="space-x-2" htmlFor="">
                                <Checkbox
                                    disabled
                                    checked={
                                        question?.answer?.answer.seekAnswer.is_required
                                    }
                                />
                                <span>Is Required</span>
                            </label>
                            <label className="space-x-2" htmlFor="">
                                <Checkbox
                                    disabled
                                    checked={
                                        question?.answer?.answer.isOkayWithAll
                                    }
                                />
                                <span>Okay With All</span>
                            </label>
                        </div>
                    </div>
                    <SliderPrimitive.Root
                        className="relative z-50 my-4 flex w-full select-none items-center"
                        value={[question?.answer?.answer?.seekAnswer?.value]}
                        min={1}
                        max={5}
                        step={1} // Ensures it moves only in 25 increments (5 stops)
                    >
                        <div className="absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1">
                            {stops.map((stop) => (
                                <div
                                    key={stop}
                                    className="z-50 h-3 w-1 rounded bg-gray-400"
                                />
                            ))}
                        </div>
                        <div className="absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1">
                            {question.answers.map((stop, index) => (
                                <div
                                    key={"seek" + index}
                                    className="z-50 h-3 w-1 rounded bg-gray-400"
                                />
                            ))}
                        </div>
                        <SliderPrimitive.Track
                            className={
                                "relative -z-20 h-1 w-full rounded " +
                                (question.answer?.answer?.isOkayWithAll
                                    ? "bg-gray-500"
                                    : "bg-gray-200")
                            }
                        >
                            <SliderPrimitive.Range className="absolute h-full" />
                        </SliderPrimitive.Track>
                        {!question?.answer?.answer.isOkayWithAll && (
                            <SliderPrimitive.Thumb className="absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none">
                                <svg
                                    className="size-6"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="1"
                                        y="1"
                                        width="14.5584"
                                        height="15"
                                        rx="7.27922"
                                        fill="#F3F0FF"
                                    />
                                    <rect
                                        x="1"
                                        y="1"
                                        width="14.5584"
                                        height="15"
                                        rx="7.27922"
                                        stroke="#692EB7"
                                        strokeWidth="2"
                                    />
                                    <circle
                                        cx="8.2793"
                                        cy="8.5"
                                        r="4.5"
                                        fill="#682EB8"
                                    />
                                </svg>
                            </SliderPrimitive.Thumb>
                        )}
                    </SliderPrimitive.Root>
                    <ul className="flex w-full justify-between">
                        {answers.map((answer) => (
                            <li key={answer.answer}>{answer.answer}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span>
                        Multiplier :{" "}
                        {question?.answer?.answer?.seekAnswer.multiplier}
                    </span>
                </div>
                <div className="my-8 flex items-center space-x-4">
                    <span>Tags:</span>
                    <ul className="flex items-center space-x-2">
                        {question.tags.map((tag, index) => (
                            <li
                                className="rounded-full bg-bpurple-600 px-4 py-2 text-white"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center justify-between space-x-4">
                        <li>
                            <Link
                                href={route(
                                    "question-single-answer",
                                    question.id,
                                )}
                            >
                                <Button
                                    type="button"
                                    className="px-12"
                                    variant="secondary"
                                >
                                    Edit
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Button asChild className="px-12">
                                <Link
                                    href={route(
                                        "answers.destroy",
                                        question.answer.id,
                                    )}
                                    method="delete"
                                >
                                    Clear
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default Show;
