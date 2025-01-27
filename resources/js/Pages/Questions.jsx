import {Head, Link} from '@inertiajs/react';
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import {Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions} from "@headlessui/react";
import {useEffect, useState} from "react";
import {ArrowDown01Icon} from "@hugeicons/react";


export default function Questions({q_tags, questions}) {
    const [selectedTag, setSelectedTag] = useState(null);
    const [query, setQuery] = useState("");

    const [filteredQuestions, setFilteredQuestions] = useState(questions);

    useEffect(() => {
        if (selectedTag != null) {
            filterQuestions();
        }
    }, [selectedTag]);

    function filterQuestions() {
        const qs = questions.filter((question) => {
            return question.tags.includes(selectedTag);
        })
        console.log(qs)
        setFilteredQuestions(qs)
    }


    return (
        <>
            <Head title="Terms of Service"/>
            <Header/>
            <section className="max-w-7xl px-4 lg:px-0 mx-auto">
                <h1 className="font-head font-black text-7xl text-center uppercase text-bpurple-600 pt-16 max-w-4xl mx-auto">Explore
                    All
                    Questions That Define Your Match</h1>
                <p className="max-w-3xl mx-auto text-center text-xl mt-4">Discover how compatible you are with others by
                    answering these insightful questions. Your answers help us connect you with people who truly align
                    with your values, preferences, and personality.</p>
            </section>

            <section className="max-w-7xl px-4 mx-auto lg:px-0">
                <div className="mx-auto mt-16 grid grid-cols-5 gap-4 lg:grid-cols-5 items-center">
                    <span className="col-span-2">Questions</span>
                    <span>Sort by Q #</span>
                    <span>Sort by # of Answers</span>
                    <span className="relative">
                        <Combobox
                            as="div"
                            value={selectedTag} onChange={setSelectedTag} onClose={() => setQuery('')}>
                            <div className="relative">
      <ComboboxInput
          className="rounded-full w-full"
          displayValue={(tag) => tag}
          placeholder="Search Tags"
          onChange={(event) => setQuery(event.target.value)}
      />
                                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ArrowDown01Icon className="size-4 fill-white/60 group-data-[hover]:fill-white"/>
          </ComboboxButton>
      <ComboboxOptions anchor="bottom" className="border bg-white w-56 rounded-lg border-gray-600">
        {q_tags.map((tag, index) => (
            <ComboboxOption key={index} value={tag}
                            className=" data-[focus]:bg-bpurple-500 data-[focus]:text-white w-full px-4 py-1">
                {tag}
            </ComboboxOption>
        ))}
      </ComboboxOptions>
                            </div>
    </Combobox>
                    </span>
                </div>

                {filteredQuestions.length > 0 && filteredQuestions.map((question, index) => (
                    <div key={index} className="lg:grid grid-cols-4 gap-4 mt-4">
                        <div className="relative border rounded-full py-2 px-4 border-gray-700 col-span-3 space-y-2">
                    <span>
                    {index + 1}. {question.question} {question.is_mandatory ? "*" : "" }
                    </span>
                            <span
                                className="bg-bpurple-100 border border-gray-700 rounded-full px-2 py-1 absolute right-0 size-8 flex items-center justify-center  top-0 -translate-y-1/2 text-xs">
                                {question.answers.length}
                    {/*{question.answers.length>0 && (question.answers.length) }*/}
                    </span>

                        </div>
                        <ul className="mt-4 lg:mt-0 grid grid-cols-3 space-x-2">
                            {question.tags.map((tag, index) => (
                                <li key={index} className="rounded-full px-4 py-2 border border-gray-700 text-center">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {filteredQuestions.length === 0 && (
                    <div className="text-center">
                        <div className="flex justify-center font-bold text-2xl py-4">
                            No Questions found for this Tag
                        </div>
                        <button
                            className="bg-bpurple-500 px-4 py-2 rounded-full mx-auto text-white"
                            onClick={() => {
                                setQuery("")
                                setSelectedTag(null)
                                setFilteredQuestions(questions)
                            }}>Show All Questions
                        </button>
                    </div>
                )}

            </section>

            <Footer/>
        </>
    );
}
