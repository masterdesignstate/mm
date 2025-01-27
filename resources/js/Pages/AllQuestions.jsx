import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PageHead from "@/Components/Shared/PageHead.jsx";
import {Head, Link} from "@inertiajs/react";
import {Add01Icon, CheckmarkCircle01Icon} from "@hugeicons/react";

const AllQuestions = ({questions,total_answers}) => {
    return (
        <AuthenticatedLayout>
            <Head title="All Questions"/>
            <section className="max-w-5xl mx-auto px-4 lg:px-0 ">
                <h1 className="text-2xl mt-8 font-bold text-bpurple-500">Questions</h1>
                <p>Total Questions Answered: {total_answers.length}</p>
                <ul className="space-y-4 mt-4">
                    {questions.length > 0 && questions.map((question, index) => (
                        <li key={index}
                            className="rounded-full border px-4 py-2 hover:bg-bpurple-500
                        text-bpurple-600 flex items-center justify-between
                        hover:text-white duration-300 transition-all cursor-pointer"
                        >
                            <Link className="w-full" href={route('question-single-answer',question.id)}>
                                {index + 1}. {question.question}
                            </Link>
                            {question.answer != null  && (
                                <CheckmarkCircle01Icon size={24} variant={"solid"} />
                            )}
                        </li>
                    ))
                    }
                </ul>
                <div className="flex items-center justify-between mt-8">
                    <div>

                        <Link href={route('my-questions')}>
                            <button
                                className="bg-bpurple-300 text-white cursor-pointer px-8 py-2 rounded-full flex items-center space-x-2 text-lg">
                            <span>
                            Questions

                            </span>
                                <Add01Icon size={20} variant={'solid'}/>
                            </button>
                        </Link>
                    </div>
                    <div>

                        <Link href={route('potential-matches')}>
                            <button
                                className="bg-bpurple-500 text-white cursor-pointer px-8 py-2 rounded-full flex items-center space-x-2 text-lg">
                            <span>
                            Matches

                            </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default AllQuestions;
