import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';

import {ray, Ray} from "node-ray/web"
import {useState} from "react";
import {CircleIcon} from "@hugeicons/react";

Ray.useDefaultSettings({host:"127.0.0.1"});

export default function MandatoryQuestions({auth,questions}) {
    const [mandatoryQuestions, setMandatoryQuestions] = useState(questions);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    ray(currentQuestion)

    return (
        <AuthenticatedLayout

        >
            <Head title="Dashboard"/>

            <section className="max-w-5xl mx-auto mt-8">
                <div>
                    <h2 className="text-bpurple-500 font-black text-2xl">Required Questions</h2>
                    <p>Please complete theses questions to view your potential matches.</p>
                </div>

                <div className="w-full">
                    <div className="flex justify-between items-center py-2 ">
                        <h2>Completed</h2>
                        <h3>90%</h3>
                    </div>
                    <div className="rounded-full w-[100%] border border-gray-300 h-4">
                        <div className="bg-gradient-to-r from-bpurple-500 to-bpurple-600 w-[20%] h-full rounded-full"></div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="font-bold mb-8 text-xl">
                        {currentQuestion.question}
                    </div>
                    <div className="space-y-4 relative">
                        <div className="flex space-x-4 items-center group cursor-pointer">
                            <span className="group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center">
                                <CircleIcon size={"24"} variant={"solid"} className="text-bpurple-500 group-hover:block hidden"/>
                            </span>
                            <div className="py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500">{currentQuestion.descriptor1}</div>
                        </div>
                        <div className="flex space-x-4 items-center group cursor-pointer">
                            <span className="group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center"><CircleIcon size={"24"} variant={"solid"} className="text-bpurple-500 group-hover:block hidden"/></span>
                            <div className="py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500">{currentQuestion.descriptor2}</div>
                        </div>
                        <div className="flex space-x-4 items-center group cursor-pointer">
                            <span className="group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center"><CircleIcon size={"24"} variant={"solid"} className="text-bpurple-500 group-hover:block hidden"/></span>
                            <div className="py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500">{currentQuestion.descriptor3}</div>
                        </div>
                        <div className="h-[80%] bg-gray-800 w-px ml-2 -translate-x-1/2 left-0  absolute top-0"></div>
                    </div>
                </div>

            </section>

        </AuthenticatedLayout>
    );
}
