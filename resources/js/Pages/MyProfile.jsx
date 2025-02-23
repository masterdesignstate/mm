import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import ProfileAttribute from "@/Components/Shared/ProfileAttribute.jsx";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import * as SliderPrimitive from "@radix-ui/react-slider";
import Checkbox from "@/Components/Checkbox.jsx";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
    Zoom,
    Fullscreen,
    Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/Button.jsx";
import { ArrowDown01Icon } from "@hugeicons/react";

export default function MyProfile({ auth, profile, questions }) {
    const stops = [1, 2, 3, 4, 5]; // Only 5 positions
    const [value, setValue] = useState(3); // Default to middle stop
    const [showLightbox, setShowLightbox] = useState(false);
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        setGallery(profile.gallery);
    }, []);

    const handleChange = (val) => {
        const closest = stops.reduce((prev, curr) =>
            Math.abs(curr - val[0]) < Math.abs(prev - val[0]) ? curr : prev,
        );
        setValue(closest);
    };
    return (
        <AuthenticatedLayout>
            <Head title="My Profile" />

            <div className="mx-auto my-8 flex max-w-5xl items-center justify-center px-4 lg:justify-between">
                <span className="hidden lg:block"></span>
                <div className="space-x-2">
                    <Link href={route("on-boarding")}>
                        <button className="rounded-full bg-bpurple-500 px-4 py-2 text-white">
                            Edit Profile
                        </button>
                    </Link>
                    <DropdownMenu className="">
                        <Button asChild variant="secondary">
                            <DropdownMenuTrigger className="">
                                <span>Questions</span>
                                <ArrowDown01Icon />
                            </DropdownMenuTrigger>
                        </Button>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={route("answers.index")}>
                                    Answered Questions
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={route("questions.index")}>
                                    Answer Questions
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={route("my-questions")}>
                                    Submit Question
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <section className="mx-auto my-8 flex max-w-4xl items-center justify-center px-4">
                <div className="grid w-full items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h2 className="text-2xl font-medium text-bc-600 dark:text-white">
                            {auth.user.name}
                        </h2>
                        <div className="w-full lg:w-[300px]">
                            <AspectRatio
                                ratio={10 / 14}
                                className="overflow-hidden rounded-3xl border-8 border-bc-600 bg-bc-50"
                            >
                                {/*<div className="h-full cursor-pointer w-full bg-gray-300">*/}
                                <img
                                    src={profile.dp}
                                    onClick={() => setShowLightbox(true)}
                                    alt="Image"
                                    className="h-full w-full cursor-pointer object-cover object-center"
                                />
                                {/*</div>*/}
                            </AspectRatio>
                        </div>
                        <div className="lg:w-[300px]">
                            <Lightbox
                                open={showLightbox}
                                plugins={[Zoom, Fullscreen, Thumbnails]}
                                close={() => setShowLightbox(false)}
                                slides={[{ src: profile.dp }, ...gallery]}
                            />
                            <ul
                                className="grid w-full cursor-pointer grid-cols-4 gap-2"
                                onClick={() => setShowLightbox(true)}
                            >
                                {gallery.map((item, index) => (
                                    <li
                                        key={index}
                                        className="h-24 w-auto overflow-hidden"
                                    >
                                        <img
                                            className="h-full w-full rounded-lg border-2 border-bc-600 object-cover object-center"
                                            src={item.src}
                                            alt=""
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="w-full space-y-2 px-4">
                            <div>
                                <ProfileAttribute
                                    label="Username"
                                    attribute={profile.uname}
                                />
                            </div>
                            <div>
                                <ProfileAttribute
                                    label="Zip"
                                    attribute={profile.zip}
                                />
                            </div>
                            <div>
                                <ProfileAttribute
                                    label="Age"
                                    attribute={profile.age}
                                />
                            </div>

                            <div>
                                <ProfileAttribute
                                    label="Motto"
                                    attribute={profile.tag_line}
                                />
                            </div>

                            <div className="">
                                <div className="text-sm">Gender</div>
                                <SliderPrimitive.Root
                                    appearance="dark"
                                    className="relative z-50 my-4 flex w-full select-none items-center"
                                    value={[
                                        questions[1]?.answer?.answer?.selfAnswer
                                            ?.value,
                                    ]}
                                    min={1}
                                    max={5}
                                    // inverted
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

                                    <SliderPrimitive.Track className="dark-bg-white relative -z-20 h-1 w-full rounded bg-gray-200 dark:bg-white">
                                        <SliderPrimitive.Range className="dark-bg-white absolute h-full dark:bg-neutral-50" />
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
                                <div className="text-lg text-bpurple-500 dark:text-white">
                                    <ul className="flex items-center justify-between">
                                        <li>Feminine</li>
                                        <li>Masculine</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className="flex items-center justify-between">
                                    <div className="text-bc-200 dark:text-bc-100">
                                        Relationship Preference
                                    </div>
                                    <div className="flex items-center justify-between space-x-2">
                                        <Checkbox
                                            disabled
                                            checked={
                                                questions[0]?.answer?.answer
                                                    ?.isOkayWithAll
                                            }
                                        />
                                        <span className="text-bc-200 dark:text-bc-100">
                                            Okay with All
                                        </span>
                                    </div>
                                </div>
                                <SliderPrimitive.Root
                                    className="relative z-50 my-4 flex w-full select-none items-center"
                                    value={[
                                        questions[0]?.answer?.answer?.seekAnswer
                                            ?.value,
                                    ]}
                                    min={1}
                                    max={5}
                                    step={1} // Ensures it moves only in 25 increments (5 stops)
                                >
                                    <div className="absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1">
                                        {stops.map((stop) => (
                                            <div
                                                key={stop}
                                                className="z-50 h-3 w-1 rounded bg-gray-400 dark:!bg-bc-50"
                                            />
                                        ))}
                                    </div>

                                    <SliderPrimitive.Track className="relative -z-20 h-1 w-full rounded bg-gray-200 dark:bg-white">
                                        <SliderPrimitive.Range className="absolute h-full" />
                                    </SliderPrimitive.Track>
                                    <SliderPrimitive.Thumb
                                        className={
                                            "absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none "
                                            + (questions[0]?.answer?.answer
                                                ?.isOkayWithAll ? " hidden" : "")
                                        }
                                    >
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
                                <div className="text-lg text-bpurple-500 dark:text-white">
                                    <ul className="flex items-center justify-between">
                                        <li>Hookup</li>
                                        <li>Dating</li>
                                        <li>Partner</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <ProfileAttribute
                                    label="Bio"
                                    attribute={profile.bio}
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-start"></div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
