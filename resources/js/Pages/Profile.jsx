import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import ProfileAttribute from "@/Components/Shared/ProfileAttribute.jsx";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ray } from "node-ray/web";

import * as SliderPrimitive from "@radix-ui/react-slider";
import {
    ArrowDown01Icon,
    Cancel01Icon, CircleIcon,
    FavouriteIcon,
    PencilEdit02Icon
} from "@hugeicons/react";
import { Button } from "@/Components/ui/Button.jsx";
import GoBack from "@/Components/Shared/GoBack.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import { MultiSelect } from "@/Components/ui/MultiSelect.jsx";
import { toast } from "@/hooks/use-toast.js";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import {
    Fullscreen,
    Thumbnails,
    Zoom,
} from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Profile({
    profile,
    answers,
    lastActivity,
    tags,
    match,
    ctags,
    canMessage,
}) {
    const { csrf_token, my_profile } = usePage().props;
    const [carouselApi, setCarouselApi] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);
    const [gallery, setGallery] = useState(profile.swiper);

    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        if (!carouselApi) return;

        const updateCarouselState = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());
            setTotalItems(carouselApi.scrollSnapList().length);
        };

        updateCarouselState();

        carouselApi.on("select", updateCarouselState);

        return () => {
            carouselApi.off("select", updateCarouselState); // Clean up on unmount
        };
    }, [carouselApi]);

    const scrollToIndex = (index) => {
        carouselApi?.scrollTo(index);
    };

    const [currentTags, setCurrentTags] = useState([]);
    // ray(profile.gallery).color("orange");

    useEffect(() => {
        if (ctags.length > 0) {
            setCurrentTags(ctags);
        }
    }, [ctags]);

    const stops = [1, 2, 3, 4, 5]; // Only 5 positions

    const [reRender, setReRender] = useState(false);
    const [showTagEditor, setShowTagEditor] = useState(false);

    useEffect(() => {}, [reRender]);
    const like = async (profile) => {
        profile.like_from_current_user = {
            ...profile.like_from_current_user,
            response: "positive",
            profile_id: profile.id,
            from_id: my_profile.id,
        };

        const res = await fetch(route("profile-responses.store"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrf_token, // Add CSRF token to headers
            },
            body: JSON.stringify({
                like_from_current_user: profile.like_from_current_user,
                response: "positive",
            }),
        });
        const data = await res.json();
        toast({
            title: "Success",
            description: "Profile Liked Successfully",
        });
        profile.like_from_current_user = data;
        router.reload({ only: ["canMessage", "ctags", "tags", "profile"] });
    };

    const dislike = async (profile) => {
        profile.like_from_current_user = {
            ...profile.like_from_current_user,
            response: "negative",
            profile_id: profile.id,
            from_id: my_profile.id,
        };

        const res = await fetch(route("profile-responses.store"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrf_token, // Add CSRF token to headers
            },
            body: JSON.stringify({
                like_from_current_user: profile.like_from_current_user,
                response: "negative",
            }),
        });
        const data = await res.json();
        toast({
            title: "Success",
            description: "Profile tagged hidden Successfully",
        });
        profile.like_from_current_user = data;
        router.reload({ only: ["canMessage", "ctags", "tags", "profile"] });
    };


    const unlike = (profile) => {
                    setReRender(true);
        router.delete(
            route("profile-responses.destroy", profile.like_from_current_user),
            {
                onSuccess: () => {
                    // profile.like_from_current_user = null;
                    setReRender(false);
                    // window.location = window.location
                    router.reload({ only: ["canMessage", "profile", "ctags","tags"] });
                    setCurrentTags(ctags)
                },
            },
        );
    };

    const saveTags = () => {
        router.post(
            route("tags-store"),
            {
                like_from_current_user: profile.like_from_current_user ?? null,
                tags: currentTags,
                to_user_id: profile.id,
            },
            {
                onSuccess: () => {
                    toast({
                        title: "Success",
                        description: "Tags updated successfully",
                    });
                },
            },
        );
    };
    return (
        <AuthenticatedLayout>
            <Head title="My Profile" />
            <div className="container mx-auto mt-8 px-8">
                <GoBack />
            </div>
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 lg:-mt-8 lg:px-0">
                <span></span>
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
            <section className="mx-auto my-16 flex max-w-4xl items-center justify-center px-4">
                <div className="w-full items-center gap-8 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h2 className="text-2xl text-bpurple-500 dark:text-white">
                            {profile.name}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {profile.is_online ? (
                                <span className="flex items-center space-x-2">
                                                            <CircleIcon
                                                                className="size-3 mr-2 text-green-400"
                                                                variant="solid"
                                                            />
                                    Online
                                                        </span>
                            ):
                            <span>
                            Last Active : {lastActivity}
                            </span>
                            }
                        </p>

                        <Lightbox
                            open={showLightbox}
                            plugins={[Zoom, Fullscreen, Thumbnails]}
                            close={() => setShowLightbox(false)}
                            slides={[...gallery]}
                        />

                        <div className="relative w-full rounded-xl border-8 border-bc-600 px-4 lg:w-[300px] lg:px-0">
                            <AspectRatio
                                ratio={10 / 14}
                                className="bg-green-300"
                            >
                                <div className="h-full w-full bg-gray-300">
                                    <Swiper
                                        className="mx-auto h-full w-full text-center"
                                        // spaceBetween={30}
                                        slidesPerView={1}
                                        modules={[Pagination, Autoplay]}
                                        pagination={{ clickable: true }}
                                        loop={true} // Enables infinite looping
                                        autoplay={{
                                            delay: 3000, // 3 seconds per slide
                                        }}
                                    >
                                        {gallery.map((im, i) => (
                                            <SwiperSlide
                                                key={i}
                                                className="h-full w-full"
                                            >
                                                <img
                                                    onClick={() =>
                                                        setShowLightbox(true)
                                                    }
                                                    className="h-full w-full object-cover object-center"
                                                    src={im.src}
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </AspectRatio>
                        </div>
                        <div></div>
                        <div className="!my-8 mx-auto block w-[80%]">
                            <ul className="flex w-full justify-between">
                                <li className="flex flex-col justify-center dark:text-white">
                                    <h5 className="text-bpurple-500 dark:text-white">
                                        Overall Rating
                                    </h5>
                                    <span className="text-2xl text-bpurple-600 dark:text-white">
                                        {match.overall} %
                                    </span>
                                </li>
                                <li className="flex flex-col justify-center">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <h5 className="text-bpurple-500 dark:text-white">
                                                    Their Rating
                                                </h5>
                                                <span className="text-2xl text-bpurple-600 dark:text-white">
                                                    {match.you_seek} %
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <div>
                                                    Based on what you seek
                                                </div>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                                <li className="flex flex-col justify-center">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <h5 className="text-bpurple-500 dark:text-white">
                                                    Your Rating
                                                </h5>
                                                <span className="text-2xl text-bpurple-600 dark:text-white">
                                                    {match.they_seek} %
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <div>
                                                    Based ONLY on what they seek
                                                </div>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex w-full justify-between space-x-4">
                                {profile.like_from_current_user &&
                                profile.like_from_current_user.response ===
                                "positive" ? (
                                    <li
                                        onClick={() => unlike(profile)}
                                        className="flex cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-bpurple-500 p-4 text-white"
                                    >
                                        <FavouriteIcon size={28} />
                                    </li>
                                ) : (
                                    <li
                                        onClick={() => like(profile)}
                                        className="dark:text-white flex cursor-pointer items-center justify-center rounded-full border border-gray-300 p-4 text-bpurple-500"
                                    >
                                        <FavouriteIcon size={28} />
                                    </li>
                                )}
                                {profile.like_from_current_user &&
                                profile.like_from_current_user.response ===
                                    "negative" ? (
                                    <li
                                        onClick={() => unlike(profile)}
                                        className="flex bg-bc-200 items-center cursor-pointer justify-center rounded-full border border-gray-300 p-4 text-white"
                                    >
                                        <Cancel01Icon size={28} />
                                    </li>
                                ) : (
                                    <li
                                        onClick={() => dislike(profile)}
                                        className="flex items-center cursor-pointer justify-center rounded-full border border-gray-300 p-4 text-bpurple-500 dark:text-white">
                                        <Cancel01Icon size={28} />
                                    </li>
                                )}


                            </ul>
                        </div>
                        {showTagEditor && (
                            <div className="!my-8 block w-full">
                                <MultiSelect
                                    options={tags}
                                    onValueChange={setCurrentTags}
                                    defaultValue={currentTags}
                                    placeholder="Select Tags"
                                    variant="inverted"
                                    animation={2}
                                    maxCount={3}
                                />
                            </div>
                        )}
                        <div className="!mt-6 flex items-center space-x-4">
                            {!showTagEditor && (
                                <ul className="flex flex-wrap items-center justify-center gap-2">
                                    {currentTags.map((tag, index) => (
                                        <li
                                            key={index}
                                            className="rounded-full bg-bc-200 px-6 py-1 text-center text-white"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div
                                onClick={() =>
                                    showTagEditor
                                        ? setShowTagEditor(false)
                                        : setShowTagEditor(true)
                                }
                            >
                                {showTagEditor ? (
                                    <Button onClick={saveTags}>
                                        Save Tags
                                    </Button>
                                ) : (
                                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                                        <PencilEdit02Icon />
                                        <div>Add/Edit Tags</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-16 w-full space-y-2 px-4 lg:mt-0">
                            {canMessage && (
                                <>
                                    <div className="bg-bc-600 text-white p-4 rounded-3xl">You both like each other.</div>
                                </>
                            )}

                            <div>
                                <ProfileAttribute
                                    label="Username"
                                    attribute={profile.uname}
                                />
                            </div>
                            <div className="flex items-center space-x-48">
                                <div>
                                    <ProfileAttribute
                                        label="Age"
                                        attribute={profile.age}
                                    />
                                </div>
                                <div>
                                    <ProfileAttribute
                                        label="Zip"
                                        attribute={profile.zip}
                                    />
                                </div>
                            </div>

                            <div>
                                <ProfileAttribute
                                    label="Mutual Questions"
                                    attribute={profile.common_question_count}
                                />
                            </div>

                            <div>
                                <ProfileAttribute
                                    label="Questions Answered"
                                    attribute={profile.questions_answered}
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
                                    className="relative z-50 my-4 flex w-full select-none items-center"
                                    value={[
                                        answers[1]?.answer?.selfAnswer?.value,
                                    ]}
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
                                <div className="text-lg text-bpurple-500">
                                    <ul className="flex items-center justify-between dark:text-white">
                                        <li>Feminine</li>
                                        <li>Masculine</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className="flex items-center justify-between">
                                    <div className="text-bc-200 dark:text-white">
                                        Relationship Preference
                                    </div>
                                    <div className="flex items-center justify-between space-x-2">
                                        <Checkbox
                                            disabled
                                            checked={
                                                answers[0]?.answer
                                                    ?.isOkayWithAll
                                            }
                                        />
                                        <span className="text-bc-200">
                                            Okay with All
                                        </span>
                                    </div>
                                </div>
                                <SliderPrimitive.Root
                                    className="relative z-50 my-4 flex w-full select-none items-center"
                                    value={[
                                        answers[0]?.answer?.selfAnswer?.value,
                                    ]}
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
                                <div className="text-lg text-bpurple-500">
                                    <ul className="flex items-center justify-between dark:text-white">
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

                            <div className="!mt-4 items-center justify-start space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                asChild
                                                disabled={!canMessage}
                                                className="w-full !py-7 text-xl"
                                                size={"lg"}
                                                variant={"secondary"}
                                            >
                                                <Link
                                                    as="button"
                                                    className="w-full"
                                                    disabled={!canMessage}
                                                    href={route(
                                                        "chat",
                                                        profile.user.id,
                                                    )}
                                                >
                                                    Message
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div>
                                                Can message once you like them.
                                                And they like you back.
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <Button
                                    asChild
                                    className="w-full !py-7 text-xl"
                                    size={"lg"}
                                >
                                    <Link href={route("compare", profile)}>
                                        Comparison
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
