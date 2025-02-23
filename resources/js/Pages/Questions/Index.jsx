import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { ArrowDown01Icon, Cancel01Icon } from "@hugeicons/react";
import darkGrid from "@/../../public/img/dark-grid.png";
import grid from "@/../../public/img/dark-grid.png";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Button } from "@/Components/ui/Button.jsx";

export default function Questions({ q_tags, questions }) {
    const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    let bgGrid;
    if (isDarkMode) {
        bgGrid = darkGrid;
    } else {
        bgGrid = grid;
        // console.log("Light mode is enabled");
    }
    const [selectedTag, setSelectedTag] = useState(null);
    const [query, setQuery] = useState("");

    const [filteredQuestions, setFilteredQuestions] = useState(questions);

    useEffect(() => {
        if (selectedTag != null) {
            filterQuestions();
        }
    }, [selectedTag]);

    const reorder = (type) => {

        console.log("REached here");
        if (type === "questions") {
            questions.sort((a, b) => {
                return a.id - b.id;
            });
        } else {
            questions.sort((a, b) => {
                return b.answers.length - a.answers.length;
            });
        }
        setFilteredQuestions([...questions]);
    };

    function filterQuestions() {
        const qs = questions.filter((question) => {
            return question.tags.includes(selectedTag);
        });
        console.log(qs);
        setFilteredQuestions(qs);
    }

    return (
        <AuthenticatedLayout>
            <div>
                <Head title="All Questions" />
                <div className="flex flex-col justify-between dark:bg-bc-900 dark:text-white">
                    <main className="flex-1">
                        <section
                            className="dark:bg-bc-900 dark:text-white"
                            style={{ backgroundImage: `url(${bgGrid})` }}
                        >
                            <div className="mx-auto max-w-7xl px-4 lg:px-0">
                                <h1 className="mx-auto max-w-4xl pt-16 text-center font-head text-4xl font-medium uppercase text-bc-600 md:text-6xl lg:text-7xl dark:text-white">
                                    ANSWER MORE QUESTIONS TO REFINE YOUR
                                    COMPATIBILITY RESULTS
                                </h1>
                                <p className="mx-auto mt-4 max-w-3xl text-center text-xl">
                                    Answering questions is the foundation of
                                    Matchmatical. Your answers determine who
                                    aligns with you and who you align with.
                                    Update your answers anytime to explore
                                    compatibility with others.
                                </p>
                            </div>
                        </section>

                        <section
                            className="pb-8 dark:bg-bc-900 dark:text-white"
                            style={{ backgroundImage: `url(${bgGrid})` }}
                        >
                            <div className="mx-auto max-w-7xl px-4 lg:px-0">
                                <div className="mx-auto grid grid-cols-3 items-center gap-4 pt-16 lg:grid-cols-5">
                                    <span className="lg:col-span-2">
                                        Questions
                                    </span>
                                    <div className="pointer !cursor-pointer"
                                          onClick={()=>reorder("questions")}>
                                         Sort by Q #
                                    </div>
                                    <div className="pointer !cursor-pointer"
                                          onClick={()=>reorder("answers")}>
                                        Sort by # of Ans
                                    </div>
                                    <span className="relative col-span-3 lg:col-span-1">
                                        <Combobox
                                            as="div"
                                            value={selectedTag}
                                            onChange={setSelectedTag}
                                            onClose={() => setQuery("")}
                                        >
                                            <div className="relative">
                                                {selectedTag !== null && (
                                                    <Button
                                                        variant={"ghost"}
                                                        onClick={() => {
                                                            setQuery("");
                                                            setSelectedTag(
                                                                null,
                                                            );
                                                            setFilteredQuestions(
                                                                questions,
                                                            );
                                                        }}
                                                        className="group absolute inset-y-0 left-0 px-2.5 text-red-500"
                                                    >
                                                        <Cancel01Icon />
                                                    </Button>
                                                )}
                                                <ComboboxInput
                                                    className="w-full rounded-full pl-8 dark:bg-transparent"
                                                    displayValue={(tag) => tag}
                                                    placeholder="Search Tags"
                                                    onChange={(event) =>
                                                        setQuery(
                                                            event.target.value,
                                                        )
                                                    }
                                                />
                                                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                                                    <ArrowDown01Icon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                                                </ComboboxButton>
                                                <ComboboxOptions
                                                    anchor="bottom"
                                                    className="w-56 rounded-lg border border-gray-600 bg-white"
                                                >
                                                    {q_tags.map(
                                                        (tag, index) => (
                                                            <ComboboxOption
                                                                key={index}
                                                                value={tag}
                                                                className="w-full px-4 py-1 data-[focus]:bg-bpurple-500 data-[focus]:text-white"
                                                            >
                                                                {tag}
                                                            </ComboboxOption>
                                                        ),
                                                    )}
                                                </ComboboxOptions>
                                            </div>
                                        </Combobox>
                                    </span>
                                </div>

                                {filteredQuestions.length > 0 &&
                                    filteredQuestions.map((question, index) => (
                                        <div
                                            key={index}
                                            className="mt-4 grid-cols-4 items-center gap-4 lg:grid"
                                        >
                                            <Link
                                                className="relative col-span-3 block space-y-2 rounded-[30px] border border-gray-700 px-4 py-2 text-xl hover:bg-bc-600 hover:text-white"
                                                href={route(
                                                    "question-single-answer",
                                                    question.id,
                                                )}
                                            >
                                                <div>
                                                    <span>
                                                        {question.id}.{" "}
                                                        {question.question}{" "}
                                                        {question.is_mandatory
                                                            ? "*"
                                                            : ""}
                                                    </span>
                                                    <span className="absolute right-0 top-0 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-700 bg-bpurple-100 px-2 py-1 text-xs text-black dark:bg-bc-600 dark:text-white">
                                                        {
                                                            question.answers
                                                                .length
                                                        }
                                                        {/*{question.answers.length>0 && (question.answers.length) }*/}
                                                    </span>
                                                </div>
                                            </Link>
                                            <ul className="mt-4 grid grid-cols-3 space-x-2 lg:mt-0">
                                                {question.tags.map(
                                                    (tag, index) => (
                                                        <li
                                                            key={index}
                                                            className="rounded-full border border-gray-700 px-4 py-2 text-center"
                                                        >
                                                            {tag}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    ))}
                                {filteredQuestions.length === 0 && (
                                    <div className="text-center">
                                        <div className="flex justify-center py-4 text-2xl font-bold">
                                            No Questions found for this Tag
                                        </div>
                                        <button
                                            className="mx-auto rounded-full bg-bpurple-500 px-4 py-2 text-white"
                                            onClick={() => {
                                                setQuery("");
                                                setSelectedTag(null);
                                                setFilteredQuestions(questions);
                                            }}
                                        >
                                            Show All Questions
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
