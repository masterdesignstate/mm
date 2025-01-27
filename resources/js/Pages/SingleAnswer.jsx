import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';

import {ray, Ray} from "node-ray/web"
import {useEffect, useState} from "react";
import {CircleIcon} from "@hugeicons/react";
import InputError from "@/Components/InputError.jsx";

Ray.useDefaultSettings({host: "127.0.0.1"});

export default function SingleAnswer({auth, question, errors}) {
    const [answer, setAnswer] = useState("");
    ray(question)

    useEffect(() => {
        // if(question.answer){
        //     setAnswer(question.answer.answer);
        // }
    }, []);
    const submit = () => {
        router.post(route('question-single-answer', question.id), {
            question_id: question.id,
            answer: answer
        })
    }

    return (
        <AuthenticatedLayout

        >
            <Head title={question.question}/>

            <section className="max-w-5xl mx-auto mt-8 px-4 lg:px-0">
                <div>
                    <h2 className="text-bpurple-500 font-black text-2xl">
                        {question.is_mandatory && (
                            <span>
                                Required &nbsp;
                            </span>
                        )}
                        Question
                    </h2>
                    {question.is_mandatory && (
                        <div>

                            <p>
                                Please complete theses questions to view your potential matches.
                            </p>

                            {/*<div className="w-full mt-2 mb-8">*/}
                            {/*    <div className="flex justify-between items-center py-2 ">*/}
                            {/*        <h2>Completed</h2>*/}
                            {/*        <h3>90%</h3>*/}
                            {/*    </div>*/}
                            {/*    <div className="rounded-full w-[100%] border border-gray-300 h-4">*/}
                            {/*        <div*/}
                            {/*            className="bg-gradient-to-r from-bpurple-500 to-bpurple-600 w-[20%] h-full rounded-full"></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    )}


                    <p className="mt-4 text-2xl">{question.question}</p>
                    <InputError message={errors.answer}/>
                </div>

                {/*<div className="w-full">*/}
                {/*    <div className="flex justify-between items-center py-2 ">*/}
                {/*        <h2>Completed</h2>*/}
                {/*        <h3>90%</h3>*/}
                {/*    </div>*/}
                {/*    <div className="rounded-full w-[100%] border border-gray-300 h-4">*/}
                {/*        <div className="bg-gradient-to-r from-bpurple-500 to-bpurple-600 w-[20%] h-full rounded-full"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="mt-8">
                    <div className="font-bold mb-8 text-xl">
                        {/*{question.question}*/}
                    </div>
                    <div className="space-y-4 relative">
                        <div className="flex space-x-4 items-center group cursor-pointer">
                            <span
                                className="group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center">
                                <CircleIcon size={"24"} variant={"solid"}
                                            className="text-bpurple-500 group-hover:block hidden"/>
                            </span>
                            <div onClick={() => setAnswer(question.descriptor1)}
                                 className={"py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500" + (answer === question.descriptor1 ? " bg-bpurple-500 text-white" : "")}
                            >{question.descriptor1}</div>
                        </div>

                        <div

                            className="flex space-x-4 items-center group cursor-pointer">
                            <span
                                className="group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center"><CircleIcon
                                size={"24"} variant={"solid"}
                                className="text-bpurple-500 group-hover:block hidden"/></span>
                            <div onClick={() => setAnswer(question.descriptor2)}
                                 className={"py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500" + (answer === question.descriptor2 ? " bg-bpurple-500 text-white" : "")}>{question.descriptor2 ? question.descriptor2 : ""}</div>
                        </div>

                        <div className="flex space-x-4 items-center group cursor-pointer">
                            <span
                                className="group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center"><CircleIcon
                                size={"24"} variant={"solid"}
                                className="text-bpurple-500 group-hover:block hidden"/></span>
                            <div onClick={() => setAnswer(question.descriptor3)}
                                 className={"py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500" + (answer === question.descriptor3 ? " bg-bpurple-500 text-white" : "")}>{question.descriptor3}</div>
                        </div>
                        <div className="h-[80%] bg-gray-800 w-px ml-2 -translate-x-1/2 left-0  absolute top-0"></div>
                    </div>

                    <div className="my-8">
                        <ul className="flex space-x-2 items-center group cursor-pointer">
                            <li>Tags:</li>
                            {question.tags.length > 0 && question.tags.map((tag, index) => (
                                <li key={index}
                                    className="rounded-full px-4 py-1 bg-bpurple-400 text-white text-sm">{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-between items-center">
                        {!question.is_mandatory ? (
                            <Link href={route('all-questions')}>
                                <button className="bg-white border  px-8 py-2 rounded-full">
                                    Go Back
                                </button>
                            </Link>
                        ) : (<span></span>)}
                        <button onClick={submit} className="bg-bpurple-500 text-white px-8 py-2 rounded-full">Submit
                        </button>
                    </div>
                </div>

            </section>

        </AuthenticatedLayout>
    );
}
