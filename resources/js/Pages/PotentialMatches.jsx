import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {
    ArrowDown01Icon,
    Chatting01Icon,
    CircleIcon,
    FavouriteIcon,
    FilterHorizontalIcon,
    Home09Icon,
} from "@hugeicons/react";
import TextInput from "@/Components/TextInput.jsx";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Button } from "@/Components/ui/Button.jsx";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { ray } from "node-ray/web";
import GoBack from "@/Components/Shared/GoBack.jsx";

const PotentialMatches = ({ profiles, tags }) => {
    const { csrf_token, my_profile } = usePage().props;

    const [matchProfiles, setMatchProfiles] = useState(profiles);

    const [matchType, setMatchType] = useState("overAllMatch");

    const [showFilters, setShowFilters] = useState(false);

    const [searchString, setSearchString] = useState("");
    const [agePreference, setAgePreference] = useState([18, 80]); // Initial values
    // const [distancePreference, setDistancePreference] = useState([0, 5000]); // Initial values
    const [matchPercentage, setMatchPercentage] = useState([10, 100]); // Initial values

    const [currentTag, setCurrentTag] = useState("");

    const [distances, setDistances] = useState([]);

    const [distanceProfiles, setDistanceProfiles] = useState([]);

    useEffect(() => {
        let newProfiles = profiles.filter((profile) => {
            // const distance = Math.round(
            //     profile?.distance?.distance?.value / 1.609 / 1000,
            // );
            return (
                profile.overAllMatch >= matchPercentage[0] &&
                profile.overAllMatch <= matchPercentage[1] &&
                profile.age >= agePreference[0] &&
                profile.age <= agePreference[1]
                // distance >= distancePreference[0] &&
                // distance <= distancePreference[1]
            );
        });

        // if(currentTag !== "Hide"){
        //     newProfiles = newProfiles.filter(profile=>{
        //         return profile.tag
        //     })
        // }

        const searchProfile = newProfiles.filter((profile) => {
            return new RegExp(searchString, "i").test(profile.name);
        });

        let tagProfiles = searchProfile;

        if (currentTag !== "") {
            tagProfiles = searchProfile.filter((profile) => {
                console.log(profile);
                if (
                    profile !== null &&
                    profile.like_from_current_user !== null &&
                    profile.like_from_current_user.tags !== null
                ) {
                    console.log(
                        profile.name,
                        profile.like_from_current_user.tags,
                    );
                    return profile.like_from_current_user.tags.includes(
                        currentTag,
                    );
                }
            });
        }

        // tagProfiles = tagProfiles.filter((profile) => {
        //     if (currentTag !== "Hide" && profile.like_from_current_user) {
        //         return !profile.like_from_current_user.tags.includes("Hide");
        //     } else {
        //         return true;
        //     }
        // });

        tagProfiles.sort((a, b) => {
            if (matchType === "youSeek") {
                return b.match.youSeek - a.match.youSeek;
            } else if (matchType === "theySeek") {
                return b.match.theySeek - a.match.theySeek;
            } else {
                return b.match.overAllMatch - a.match.overAllMatch;
            }
        });
        setMatchProfiles(tagProfiles);
    }, [
        matchPercentage,
        agePreference,
        searchString,
        currentTag,
        matchType,
        // distanceProfiles,
        // distancePreference,
    ]);

    const resetAll = () => {
        setCurrentTag("");
    };

    const like = async (profile) => {
        console.log(profile);
        const allProfiles = [...matchProfiles];
        allProfiles.forEach((pro, index) => {
            if (pro.id === profile.id) {
                pro.like_from_current_user = {
                    ...profile.like_from_current_user,
                    response: "positive",
                };
                ray(pro).color("red");
            }
        });

        setMatchProfiles(allProfiles);

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
        console.log(data);
        const newProfiles = [...matchProfiles];
        newProfiles.forEach((pro, index) => {
            if (pro.id === profile.id) {
                pro.like_from_current_user = data;
            }
        });
    };
    const unlike = (profile) => {
        router.delete(
            route(
                "profile-responses.destroy",
                profile.like_from_current_user.id,
            ),
            {
                onSuccess: () => {
                    const allProfiles = [...matchProfiles];
                    allProfiles.forEach((pro, index) => {
                        if (pro.id === profile.id) {
                            pro.like_from_current_user = null;
                        }
                    });

                    setMatchProfiles(allProfiles);
                },
            },
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Potential Matches" />
            <div className="container mx-auto my-8 flex items-center justify-between px-8">
                <GoBack />
                <div className="lg:hidden">
                    <Button
                        onClick={() => {
                            setShowFilters(!showFilters);
                        }}
                    >
                        <FilterHorizontalIcon />
                        <span>Filters</span>
                    </Button>
                </div>
            </div>
            <section className="mx-auto max-w-7xl gap-12 px-4 lg:-mt-16 lg:grid lg:grid-cols-7">
                <div
                    className={
                        "col-span-2 mb-8 flex flex-col space-y-3 lg:mb-0 lg:block " +
                        (showFilters ? "block" : "hidden")
                    }
                >
                    <div className="flex space-x-2 rounded-lg bg-bpurple-500 px-4 py-4 text-white">
                        <span>
                            <FilterHorizontalIcon />
                        </span>
                        <h3>Filter the Matches</h3>
                    </div>
                    <div>
                        <TextInput
                            value={searchString}
                            onChange={(e) => setSearchString(e.target.value)}
                            className="w-full rounded-lg"
                            placeholder="Search by Name/User"
                        />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5>Compatibility Type</h5>
                        </div>
                    </div>
                    <select
                        onChange={(e) => setMatchType(e.target.value)}
                        value={matchType}
                        className="flex justify-between space-x-2 rounded-lg border-none bg-bpurple-50 px-4 py-2 lg:w-full dark:border dark:border-solid dark:border-bc-50 dark:bg-transparent"
                    >
                        <option value="" disabled>
                            Select Match Type
                        </option>
                        <option value="overAllMatch">Overall Rating</option>
                        <option value="theySeek">Their Rating</option>
                        <option value="youSeek">Your Rating</option>
                    </select>
                    <div className="block py-4">
                        <label className="space-y-4">
                            <span>Age Preference</span>
                            <SliderPrimitive.Root
                                className="relative z-50 flex w-full touch-none select-none items-center"
                                value={agePreference}
                                onValueChange={setAgePreference}
                                min={18}
                                max={80}
                                step={1}
                            >
                                {agePreference.map((value, index) => (
                                    <SliderPrimitive.Thumb
                                        key={index}
                                        className="relative z-50 block"
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
                                        <span className="absolute left-0">
                                            {value}
                                        </span>
                                    </SliderPrimitive.Thumb>
                                ))}
                                <SliderPrimitive.Track className="relative -z-10 h-1 w-full bg-gray-300">
                                    <SliderPrimitive.Range className="absolute -z-10 h-full bg-bpurple-500" />
                                </SliderPrimitive.Track>
                            </SliderPrimitive.Root>
                        </label>
                    </div>
                    {/*<div className="block py-4">*/}
                    {/*    <label className="space-y-4">*/}
                    {/*        <span>Distance</span>*/}
                    {/*        <SliderPrimitive.Root*/}
                    {/*            className="relative z-50 flex w-full touch-none select-none items-center"*/}
                    {/*            value={distancePreference}*/}
                    {/*            onValueChange={setDistancePreference}*/}
                    {/*            min={0}*/}
                    {/*            max={5000}*/}
                    {/*            step={50}*/}
                    {/*        >*/}
                    {/*            {distancePreference.map((value, index) => (*/}
                    {/*                <SliderPrimitive.Thumb*/}
                    {/*                    key={index}*/}
                    {/*                    className="z-50 block"*/}
                    {/*                >*/}
                    {/*                    <svg*/}
                    {/*                        className="size-6"*/}
                    {/*                        viewBox="0 0 17 17"*/}
                    {/*                        fill="none"*/}
                    {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                    >*/}
                    {/*                        <rect*/}
                    {/*                            x="1"*/}
                    {/*                            y="1"*/}
                    {/*                            width="14.5584"*/}
                    {/*                            height="15"*/}
                    {/*                            rx="7.27922"*/}
                    {/*                            fill="#F3F0FF"*/}
                    {/*                        />*/}
                    {/*                        <rect*/}
                    {/*                            x="1"*/}
                    {/*                            y="1"*/}
                    {/*                            width="14.5584"*/}
                    {/*                            height="15"*/}
                    {/*                            rx="7.27922"*/}
                    {/*                            stroke="#692EB7"*/}
                    {/*                            strokeWidth="2"*/}
                    {/*                        />*/}
                    {/*                        <circle*/}
                    {/*                            cx="8.2793"*/}
                    {/*                            cy="8.5"*/}
                    {/*                            r="4.5"*/}
                    {/*                            fill="#682EB8"*/}
                    {/*                        />*/}
                    {/*                    </svg>*/}
                    {/*                    <span className="absolute left-0">*/}
                    {/*                        {value}*/}
                    {/*                    </span>*/}
                    {/*                </SliderPrimitive.Thumb>*/}
                    {/*            ))}*/}
                    {/*            <SliderPrimitive.Track className="relative -z-10 h-1 w-full bg-gray-300">*/}
                    {/*                <SliderPrimitive.Range className="absolute -z-10 h-full bg-bpurple-500" />*/}
                    {/*            </SliderPrimitive.Track>*/}
                    {/*        </SliderPrimitive.Root>*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    <div className="block py-4">
                        <label className="space-y-4">
                            <span>Match Percentage</span>
                            <SliderPrimitive.Root
                                className="relative z-50 flex w-full touch-none select-none items-center"
                                value={matchPercentage}
                                onValueChange={setMatchPercentage}
                                min={0}
                                max={100}
                                step={1}
                            >
                                {matchPercentage.map((value, index) => (
                                    <SliderPrimitive.Thumb
                                        key={index}
                                        className="relative z-50 block"
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
                                        <span className="absolute left-0">
                                            {value}
                                        </span>
                                    </SliderPrimitive.Thumb>
                                ))}
                                <SliderPrimitive.Track className="relative -z-10 h-1 w-full bg-gray-300">
                                    <SliderPrimitive.Range className="absolute -z-10 h-full bg-bpurple-500" />
                                </SliderPrimitive.Track>
                            </SliderPrimitive.Root>
                        </label>
                    </div>
                    <div className="!mt-8 flex justify-between">
                        <div>
                            <h5>Tags</h5>
                        </div>
                    </div>

                    <select
                        onChange={(e) => setCurrentTag(e.target.value)}
                        value={currentTag}
                        className="flex justify-between space-x-2 rounded-lg border-none bg-bpurple-50 px-4 py-2 lg:w-full dark:border dark:border-solid dark:border-bc-50 dark:bg-transparent"
                    >
                        <option value="" disabled>
                            Select Tag
                        </option>
                        {tags.map((tag, index) => (
                            <option key={index}>{tag}</option>
                        ))}
                    </select>

                    {/*<div>*/}
                    {/*    <div className="flex justify-between space-x-2 rounded-lg bg-bpurple-50 px-4 py-2">*/}
                    {/*        <div>Active</div>*/}

                    {/*        <div>*/}
                    {/*            <ArrowDown01Icon />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="!mt-6 space-x-2">
                        <Button
                            onClick={resetAll}
                            size="lg"
                            variant="secondary"
                            className="rounded-full text-lg"
                        >
                            Clear Tags
                        </Button>
                        {/*<Button size="lg" className="rounded-full text-lg">*/}
                        {/*    Apply Filters*/}
                        {/*</Button>*/}
                    </div>
                </div>

                <div className="col-span-5">
                    <h1 className="text-xl text-bpurple-500 dark:text-white">
                        Compatibility Results
                    </h1>
                    <p>
                        Total{" "}
                        <span className="font-bold">
                            {matchProfiles.length}
                        </span>{" "}
                        Match Results based on your selected filters
                    </p>
                    <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {matchProfiles &&
                            matchProfiles.map((profile, index) => (
                                <li key={index} className="text-white">
                                    <div
                                        className={
                                            `flex h-96 w-auto flex-col items-center justify-between overflow-hidden rounded-3xl border-4 border-bpurple-500 bg-[url(${profile.dp})] relative bg-cover bg-center text-white`
                                            // (!profile.dp.includes("dice") &&
                                            //     "bg-[url(${profile.dp})]")
                                        }
                                        style={
                                            profile.dp && {
                                                backgroundImage: `url(${profile.dp})`,
                                            }
                                        }
                                    >
                                        <div className="absolute inset-0 z-10 h-full w-full cursor-pointer bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        <Link
                                            className="relative z-20 h-full w-full"
                                            href={route("profile", profile)}
                                        >
                                            <div className="flex h-full w-full flex-col items-center justify-between overflow-hidden">
                                                <div className="rounded-b-2xl bg-bpurple-500 px-4 py-1 font-bold">
                                                    {matchType ===
                                                        "overAllMatch" &&
                                                        profile.overAllMatch +
                                                            " % "}

                                                    {matchType === "youSeek" &&
                                                        profile.match.youSeek +
                                                            " % "}

                                                    {matchType === "theySeek" &&
                                                        profile.match.theySeek +
                                                            " % "}
                                                </div>

                                                <div className="flex items-center space-x-2 text-center font-bold">
                                                    {profile.is_online && (
                                                        <span>
                                                            <CircleIcon
                                                                className="size-3 text-green-400"
                                                                variant="solid"
                                                            />
                                                        </span>
                                                    )}
                                                    <span>
                                                        {profile.name},
                                                        {profile.age}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="absolute right-0 top-0 z-50 translate-y-1/2 p-2">
                                            <ul className="flex flex-col space-y-2 *:rounded-full *:p-2">
                                                {profile.like_from_current_user &&
                                                profile.like_from_current_user
                                                    .response === "positive" ? (
                                                    <li
                                                        className="mx-auto !text-red-600"
                                                        // onClick={() =>
                                                        //     unlike(profile)
                                                        // }
                                                    >
                                                        <FavouriteIcon
                                                            variant={"solid"}
                                                        />
                                                    </li>
                                                ) : (
                                                    <li>
                                                        <FavouriteIcon
                                                            variant={"stroke"}
                                                        />
                                                    </li>
                                                )}
                                                <li>
                                                    <span className="flex flex-col items-center">
                                                        <Chatting01Icon />
                                                        <span className="text-sm">
                                                            {
                                                                profile.common_question_count
                                                            }
                                                        </span>
                                                    </span>
                                                </li>
                                                {/*<li className="flex flex-col items-center">*/}
                                                {/*    <Home09Icon variant="stroke" />*/}
                                                {/*    {Math.round(*/}
                                                {/*        profile?.distance*/}
                                                {/*            ?.distance?.value /*/}
                                                {/*            1.609 /*/}
                                                {/*            1000,*/}
                                                {/*    )}*/}
                                                {/*    <span className="-mt-2 text-xs">*/}
                                                {/*        mi*/}
                                                {/*    </span>*/}
                                                {/*</li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default PotentialMatches;
