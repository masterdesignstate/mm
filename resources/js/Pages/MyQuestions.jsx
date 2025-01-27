import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {useState} from "react";
import {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Table
} from "@/Components/ui/table.jsx";
import {AddCircleIcon, CancelCircleIcon} from "@hugeicons/react";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Select,
    Textarea
} from "@headlessui/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import TextArea from "@/Components/TextArea.jsx";
import {Ray, ray} from "node-ray/web";
import {clsx} from "clsx";
import PageHead from "@/Components/Shared/PageHead.jsx";


Ray.useDefaultSettings()

export default function MyQuestions({questions, tags}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        question: "",
        descriptor1: "",
        descriptor2: "",
        descriptor3: "",
        tags: []
    });
    const [createQuestion, setCreateQuestion] = useState(false)
    const [myQuestions, setMyQuestions] = useState(questions);
    const [lockDescriptor, setLockDescriptor] = useState(false);
    const [currentTags, setCurrentTags] = useState([]);

    ray(questions)

    const submit = (e) => {
        e.preventDefault();

        post(route('my-questions-create'), {
            onFinish: () => {
                reset('question', 'descriptor1', 'descriptor2', 'descriptor3')
                setCreateQuestion(false)
            },
        });
    };

    return (
        <AuthenticatedLayout

        >
            <Head title="My Questions"/>

            <PageHead heading="My Questions"
                      description="How does it work? Create personalized questions to help your matches better connect with you. Add a question, choose tags, set answer options, and prioritize its importance. Your matches will answer these questions, making connections more meaningful and tailored to your preferences. "/>

            {!createQuestion &&
                <section className="max-w-7xl mx-auto my-16 px-4 lg:px-0">
                    <div className="flex items-center max-w-5xl mx-auto justify-between">
                        <h2 className="text-xl font-bold">Questions</h2>
                        <button className="text-gray-500" onClick={() => setCreateQuestion(true)}>
                            <AddCircleIcon className="text-bpurple-500"
                                           size={36} variant={"solid"}/>
                        </button>
                    </div>
                    <Table className="max-w-5xl mx-auto my-4">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Q#</TableHead>
                                <TableHead>Questions Statement</TableHead>
                                <TableHead>Tags</TableHead>
                                <TableHead>Is Approved ?</TableHead>
                                <TableHead className="text-right">Date of Creation</TableHead>
                                {/*<TableHead className="text-right">Actions</TableHead>*/}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {myQuestions.map((question, index) => (
                                <TableRow key={index}>
                                    <TableCell className="">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell className="">{question.question}</TableCell>
                                    <TableCell className="">
                                        <ul className="flex space-x-2 items-center justify-center">
                                            {question.tags.map((tag, index) => (
                                                <li key={index}
                                                    className="bg-bpurple-100 px-2 py-1 rounded-full">{tag}</li>
                                            ))}
                                        </ul>
                                    </TableCell>
                                    <TableCell className="">
                                        {question.is_approved === null && "Not Yet"}
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
                                    <TableCell colSpan={5} className="py-4 text-xl font-bold text-center text-gray-500">You have created no questions so far.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                </section>
            }

            {createQuestion &&

                <>
                    <section className="max-w-5xl mx-auto my-16 px-4 lg:px-0">
                        <div className="flex justify-end">
                            <button className="ml-auto"
                            onClick={() => setCreateQuestion(false)}>

                                <CancelCircleIcon className="text-red-700" variant={'solid'} size={36}/>
                            </button>

                        </div>
                        <form onSubmit={submit} className="w-full">
                            <div className="w-full">
                                <InputLabel htmlFor="question" value="Question"/>


                                <TextArea
                                    id="question"
                                    name="question"
                                    className="mt-1 block w-full"
                                    autoComplete="question"
                                    cols="20"
                                    value={data.question}
                                    onChange={(e) => setData('question', e.target.value)}
                                >
                                </TextArea>
                                <InputError message={errors.question} className="mt-2"/>

                            </div>


                            <div className="mt-8 space-y-4">

                                <div className="w-full">
                                    <InputLabel htmlFor="descriptor1" value="Descriptor 1"/>

                                    <TextInput
                                        id="descriptor1"
                                        type="text"
                                        name="descriptor1"
                                        value={data.descriptor1}
                                        className="mt-1 block w-full"
                                        autoComplete="descriptor1"
                                        isFocused={true}
                                        onChange={(e) => setData('descriptor1', e.target.value)}
                                    />

                                    <InputError message={errors.descriptor1} className="mt-2"/>
                                </div>

                                <div className="w-full">
                                    <InputLabel htmlFor="descriptor2" value="Descriptor 2"/>

                                    <TextInput
                                        id="descriptor2"
                                        type="text"
                                        disabled={lockDescriptor}
                                        name="descriptor2"
                                        placeholder="Optional"
                                        value={data.descriptor2}
                                        className="mt-1 block w-full"
                                        autoComplete="descriptor2"
                                        isFocused={true}
                                        onChange={(e) => setData('descriptor2', e.target.value)}
                                    />

                                    <InputError message={errors.descriptor2} className="mt-2"/>
                                </div>

                                <div className="w-full">
                                    <InputLabel htmlFor="descriptor3" value="Descriptor 3"/>

                                    <TextInput
                                        id="descriptor3"
                                        type="text"
                                        name="descriptor3"
                                        value={data.descriptor3}
                                        className="mt-1 block w-full"
                                        autoComplete="descriptor3"
                                        isFocused={true}
                                        onChange={(e) => setData('descriptor3', e.target.value)}
                                    />

                                    <InputError message={errors.descriptor3} className="mt-2"/>
                                </div>

                                <div className="w-full">


                                    <InputError message={errors.descriptor3} className="mt-2"/>
                                </div>

                            </div>


                            <div className="mt-8 flex items-center justify-between">
                                <button className="bg-black text-white px-8 py-4 rounded-full" type="button">
                                    Add Tag
                                </button>

                                <button className="bg-bpurple-500 text-white px-8 py-4 rounded-full"
                                        disabled={processing}
                                >
                                    Submit
                                </button>

                            </div>

                        </form>
                    </section>
                </>

            }


        </AuthenticatedLayout>
    );
}

