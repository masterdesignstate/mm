import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PageHead from "@/Components/Shared/PageHead.jsx";
import { Head, Link } from "@inertiajs/react";
import { Add01Icon, CheckmarkCircle01Icon } from "@hugeicons/react";
import GoBack from "@/Components/Shared/GoBack.jsx";
import { ray } from "node-ray/web";

const AnsweredQuestions = ({ questions, total_answers }) => {
    ray(questions);
    return (
        <AuthenticatedLayout>
            <Head title="Answered Questions" />
            <div className="container mx-auto my-8 px-8">
                <GoBack />
            </div>
            <section className="mx-auto max-w-5xl px-4 lg:-mt-8 lg:px-0">

                <h1 className="mt-8 text-2xl font-bold text-bpurple-500 dark:text-white">
                    Answered Questions
                </h1>
                <div className="flex items-center justify-between">
                <p>Total Questions Answered: {total_answers.length}</p>
                <p className="my-1 flex items-center space-x-2 text-sm">
                    <span className="text-3xl text-bc-100">*</span>
                    <span> Mandatory</span>
                </p>
                </div>
                <ul className="mt-4 space-y-3">
                    {questions.length > 0 &&
                        questions.map((question, index) => (
                            <li
                                key={index}
                                className="flex cursor-pointer items-center justify-between rounded-full border px-4 py-3 text-bpurple-600 transition-all duration-300 group hover:bg-bpurple-500 hover:text-white"
                            >
                                {question.answer != null ? (
                                    <div className="flex w-full items-center justify-between dark:text-white">
                                        <Link
                                            className="w-full text-xl"
                                            href={route(
                                                "questions.show",
                                                question.id,
                                            )}
                                        >
                                            {index + 1}. {question.question}
                                            {Boolean(question.is_mandatory) && (
                                                <span className="ml-2 font-bold">
                                                    *
                                                </span>
                                            )}
                                        </Link>
                                        <CheckmarkCircle01Icon
                                            size={24}
                                            className="text-bc-600 group-hover:text-white dark:text-white"
                                            variant={"solid"}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full dark:text-white">
                                        <Link
                                            className="inline-block w-full text-xl"
                                            href={route(
                                                "question-single-answer",
                                                question.id,
                                            )}
                                        >
                                            {index + 1}. {question.question}
                                            {Boolean(question.is_mandatory) && (
                                                <span className="ml-2 font-bold">
                                                    *
                                                </span>
                                            )}
                                        </Link>
                                    </div>
                                )}
                            </li>
                        ))}
                </ul>
                <div className="mt-8 lg:flex items-center justify-between space-y-4 lg:space-y-0">
                    <div>
                        <Link href={route("my-questions")}>
                            <button className="flex w-full justify-center cursor-pointer items-center space-x-2 rounded-full bg-bc-50 px-8 py-2 text-lg text-bc-600">
                                <span>Questions</span>
                                <Add01Icon size={20} variant={"solid"} />
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={route("questions.index")}>
                            <button className="flex w-full justify-center cursor-pointer items-center space-x-2 rounded-full bg-bpurple-500 px-8 py-2 text-lg text-white">
                                <span>All Questions</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default AnsweredQuestions;
