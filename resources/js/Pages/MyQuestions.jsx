import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Table,
} from "@/Components/ui/table.jsx";
import { AddCircleIcon, CancelCircleIcon } from "@hugeicons/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import TextArea from "@/Components/TextArea.jsx";
import { ray, Ray } from "node-ray/web";
import PageHead from "@/Components/Shared/PageHead.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import { MultiSelect } from "@/Components/ui/MultiSelect.jsx";
import { toast } from "@/hooks/use-toast.js";

Ray.useDefaultSettings();

export default function MyQuestions({ questions, tags }) {

    ray(tags).color("orange");

    const desLabels = [1,3,5]
    const { data, setData, post, processing, errors, setError, reset } =
        useForm({
            question: "",
            answers: [{value:1,answer:""},{value:5,answer:""}],
            q_tags: [],
        });
    const [createQuestion, setCreateQuestion] = useState(false);
    const [myQuestions, setMyQuestions] = useState(questions);
    const [lockDescriptor, setLockDescriptor] = useState(false);
    const [currentTags, setCurrentTags] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        setData("q_tags", [...currentTags]);


        post(route("my-questions-create"), {
            onSuccess: () => {
                reset("question","answers","q_tags");
                setCreateQuestion(false);
                toast({
                    title: "Success",
                    description: "Successfully created",
                })
                router.reload({only:['questions']})
                setMyQuestions(questions)
            },
        });
    };

    const handleAnswerChange = (e, index) => {
        let newAnswers = [...data.answers];

        newAnswers[e.target.dataset.index] = {
            answer: e.target.value,
            value: e.target.dataset.value,
        };
        setData("answers", newAnswers);
        setError("question", "");
    };

    const handleNew = () => {
        if (data.answers.length >= 3 || data.answers.length <= 0) {
            setError(
                "question",
                "Limit reached. Max 3 Items Allowed & Min 2 items required",
            );
        } else {
            let ans = [...data.answers];
            ans.push({
                value: null,
                answer: null,
            });
            setData("answers", ans);
            setError("question", "");
        }
    };

    const handleRemove = (e, answer) => {

        const answers = [...data.answers];
        const remaining = answers.filter((ans) => ans !== answer);



        setData("answers", remaining);
    };


    const handleChecked = (e) => {
        let tg = e.target.value;
        if (e.target.checked) {
            setCurrentTags([...currentTags, tg]);
            setData("q_tags", [...currentTags]);
        } else {
            setCurrentTags(
                currentTags.filter((item) => {
                    return item !== tg;
                }),
            );
        }
        // }
    };

    return (
        <AuthenticatedLayout>
            <Head title="My Questions" />

            <PageHead
                heading="My Questions"
                description="How does it work? Submit the questions that matter most to you! Others can answer them, helping to pinpoint people who truly align with you. It’s as simple as crafting a question, setting answer options, and adding tags to make your question easier to discover."
            />

            {!createQuestion && (
                <section className="mx-auto my-16 max-w-7xl px-4 lg:px-0">
                    <div className="mx-auto flex max-w-5xl items-center justify-between">
                        <h2 className="text-xl font-bold">Questions</h2>

                        <button
                            className="text-gray-500 dark:text-white"
                            onClick={() => setCreateQuestion(true)}
                        >
                            <AddCircleIcon
                                className="text-bpurple-500 dark:text-white"
                                size={36}
                                variant={"solid"}
                            />
                        </button>
                    </div>
                    <Table className="mx-auto my-4 max-w-5xl">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Q#</TableHead>
                                <TableHead>Questions Statement</TableHead>
                                <TableHead>Is Approved ?</TableHead>
                                <TableHead className="text-right">
                                    Date of Creation
                                </TableHead>
                                {/*<TableHead className="text-right">Actions</TableHead>*/}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {myQuestions.map((question, index) => (
                                <TableRow key={index}>
                                    <TableCell className="">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell className="">
                                        {question.question}
                                    </TableCell>
                                    <TableCell className="">
                                        {question.is_approved === null &&
                                            "Not Yet"}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {question.human_date}
                                    </TableCell>
                                    {/*<TableCell className="">*/}
                                    {/*</TableCell>*/}
                                </TableRow>
                            ))}
                            {myQuestions.length === 0 && (
                                <TableRow>
                                    <TableCell
                                        colSpan={5}
                                        className="py-4 text-center text-xl font-bold text-gray-500"
                                    >
                                        You have created no questions so far.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </section>
            )}

            {createQuestion && (
                <>
                    <section className="mx-auto my-16 max-w-5xl px-4 lg:px-0">
                        <div className="flex justify-end">
                            <button
                                className="ml-auto"
                                onClick={() => setCreateQuestion(false)}
                            >
                                <CancelCircleIcon
                                    className="text-red-700"
                                    variant={"solid"}
                                    size={36}
                                />
                            </button>
                        </div>
                        <form onSubmit={submit} className="w-full">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="question"
                                    value="Enter your question here (up to 160 chars)"
                                />

                                <div>
                                    <TextArea
                                        id="question"
                                        name="question"
                                        className="mt-1 rounded-3xl resize-none block w-full"
                                        autoComplete="question"
                                        cols="20"
                                        maxLength="160"
                                        value={data.question}
                                        onChange={(e) =>
                                            setData("question", e.target.value)
                                        }
                                    ></TextArea>
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 flex space-x-2"
                                    onClick={() => handleNew()}
                                >
                                    <AddCircleIcon
                                        variant={"solid"}
                                        size={24}
                                    />
                                    <span>Add middle descriptor</span>
                                </button>
                                <InputError
                                    message={errors.question}
                                    className="mt-2"
                                />
                            </div>

                            {data.answers.map((answer, index) => (
                                <div className="mt-8 space-y-4" key={index}>
                                    <div className="w-full">
                                        <InputLabel
                                            htmlFor={"descriptor" + index}
                                            value={"Descriptor " + desLabels[index]}
                                        />

                                        <div className="flex items-center justify-center space-x-2">
                                            <TextInput
                                                id={"answer" + index}
                                                type="text"
                                                name={"descriptor" + index}
                                                value={answer.answer}
                                                data-value={answer.value}
                                                data-old={answer.answer}
                                                data-index={index}
                                                className="mt-1 block w-full"
                                                autoComplete="descriptor1"
                                                isFocused={true}
                                                onChange={(e) => {
                                                    handleAnswerChange(e);
                                                }}
                                            />
                                            <button
                                                type="button"
                                                className="disabled:text-gray-300 flex w-10 justify-center text-center text-red-700"
                                                data-awr="12"
                                                disabled={data.answers.length <= 2}
                                                onClick={(e, index) => {
                                                    handleRemove(e, answer);
                                                }}
                                            >
                                                <CancelCircleIcon
                                                    size={24}
                                                    variant={"solid"}
                                                />
                                            </button>
                                        </div>

                                        <InputError
                                            message={errors.answers}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            ))}

                            {/*<MultiSelect*/}
                            {/*values={}*/}
                            {/*defaultValue={tags}*/}
                            {/*/>*/}

                            <div className="mt-8">

                                {/*<ul className="flex items-center justify-start space-x-4">*/}
                                {/*    {tags.map((tag, index) => (*/}
                                {/*        <li*/}
                                {/*            key={index}*/}
                                {/*            className="flex items-center"*/}
                                {/*        >*/}
                                {/*            <label className="flex items-center space-x-1">*/}
                                {/*                <Checkbox*/}
                                {/*                    name="tags[]"*/}
                                {/*                    id={`tag${tag}`}*/}
                                {/*                    value={tag}*/}
                                {/*                    onChange={(e) =>*/}
                                {/*                        handleChecked(e)*/}
                                {/*                    }*/}
                                {/*                />*/}
                                {/*                <span>{tag}</span>*/}
                                {/*            </label>*/}
                                {/*        </li>*/}
                                {/*    ))}*/}
                                {/*</ul>*/}
                                <MultiSelect
                                    className="rounded-full h-auto py-4 border-gray-300 lg:w-[30%]"
                                    options={tags}
                                    onValueChange={setCurrentTags}
                                    defaultValue={currentTags}
                                    placeholder="Select Tags"
                                    // variant="inverted"
                                    // animation={2}
                                    maxCount={3}
                                />
                                <InputError
                                    message={errors.q_tags}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-8 flex items-center justify-between">
                                {/*<button*/}
                                {/*    className="rounded-full bg-black px-8 py-4 text-white"*/}
                                {/*    type="button"*/}
                                {/*>*/}
                                {/*    Add Tag*/}
                                {/*</button>*/}

                                <button
                                    className="rounded-full bg-bpurple-500 px-8 py-4 text-white"
                                    disabled={processing}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                </>
            )}
        </AuthenticatedLayout>
    );
}
