import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Deferred, Head, Link, usePoll } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import ProfileAttribute from "@/Components/Shared/ProfileAttribute.jsx";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Button } from "@/Components/ui/Button.jsx";
import { Skeleton } from "@/Components/ui/skeleton.jsx";
import GoBack from "@/Components/Shared/GoBack.jsx";
import MatchProgress from "@/Components/Shared/MatchProgress.jsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/Components/ui/tooltip.jsx";

export default function MyProfile({
                                      profile,
                                      partner,
                                      answers,
                                      partner_answers,
                                      distance,
                                      match,
                                      canMessage,
                                      common_question_count,
                                      ky
                                  }) {

    // const {start,stop} = usePoll(3000, {
    //     only: ['distance']
    // })
    // const [distance, setDistance] = useState(null);
    const [disValue, setDisValue] = useState("");
    useEffect(() => {
    }, []);

    const getDistance = () => {
        if (profile.zip && partner.zip) {
            const response = fetch(
                `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${profile.zip}&destinations=${partner.zip}&key=YOUR_API_KEY`
            );
        }
    };

    const stops = [1, 2, 3, 4, 5]; // Only 5 positions
    // const [value, setValue] = React.useState(3); // Default to middle stop
    // const handleChange = (val) => {
    //     const closest = stops.reduce((prev, curr) =>
    //         Math.abs(curr - val[0]) < Math.abs(prev - val[0]) ? curr : prev,
    //     );
    //     setValue(closest);
    // };
    // useEffect(() => {
    //     setDisValue(distance)
    //     if(disValue !== "N/A"){
    //         stop()
    //     }
    // }, [distance]);
    return (
        <AuthenticatedLayout>
            <Head title="Comparision" />
            <div className="container mx-auto my-8 px-8">
                <GoBack />
            </div>
            <section className="mx-auto max-w-4xl items-center justify-center px-4 lg:-mt-8 lg:px-0">
                <div className="grid-cols-2 items-end lg:items-center text-center grid w-full gap-8 lg:grid-cols-5">
                    <div className="flex flex-col col-span-1 items-center justify-center space-y-2 lg:col-span-2">
                        <h2 className="text-2xl text-bpurple-500 dark:text-white">
                            {profile.name}
                        </h2>
                        <p className="text-sm text-white dark:text-bc-900">.</p>

                        <div className="w-full overflow-hidden rounded-xl lg:w-[300px] lg:px-0">
                            <AspectRatio ratio={10 / 14} className="bg-bc-50">
                                <div className="h-full w-full bg-gray-300">
                                    <img
                                        src={profile.dp}
                                        alt="Image"
                                        className="h-full object-cover"
                                    />
                                </div>
                            </AspectRatio>
                        </div>
                    </div>
                    <div className="hidden h-full flex-col items-center justify-center space-y-4 lg:-mt-[50%] lg:flex"></div>
                    <div className="flex flex-col items-center justify-center space-y-2 lg:col-span-2">
                        <h2 className="text-2xl text-bpurple-500 dark:text-white">
                            {partner.name}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Last Active : {partner.last_login}
                        </p>

                        <div className="w-full overflow-hidden rounded-xl lg:w-[300px] lg:px-0">
                            <AspectRatio ratio={10 / 14} className="bg-bc-50">
                                <div className="h-full w-full bg-gray-300">
                                    <img
                                        src={partner.dp}
                                        alt="Image"
                                        className="h-full object-cover"
                                    />
                                </div>
                            </AspectRatio>
                        </div>
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-2">
                        <div className="!mt-8">
                            <ProfileAttribute
                                label="Age"
                                className="text-center"
                                attribute={profile.age}
                            />
                        </div>
                        <div>
                            <ProfileAttribute
                                label="Zip"
                                className="text-center"
                                attribute={profile.zip}
                            />
                        </div>
                        <div>
                            <ProfileAttribute
                                className="text-center"
                                label="Questions Answered"
                                attribute={answers.length}
                            />
                        </div>
                        <div className="block w-full"></div>
                    </div>
                    <div className="hidden h-full flex-col items-center justify-end space-y-2 lg:flex">
                        {distance.hasOwnProperty("distance") && (
                            <>
                                <div className="flex flex-col items-center justify-center">
                                    <ProfileAttribute
                                        label="Distance"
                                        className="!mt-8 text-center"
                                        attribute=""
                                    />
                                    <Deferred
                                        className="text-xl leading-6 text-bc-600 dark:text-bc-100"
                                        data="distance"
                                        fallback={
                                            <Skeleton className="h-[20px] w-[100px] rounded-full" />
                                        }
                                    >
                                        <span className="text-center text-xl leading-6 text-bc-600 dark:text-bc-100">
                                            {Math.round(
                                                distance.distance.value /
                                                    1.609 /
                                                    1000,
                                            )}{" "}
                                            Miles
                                        </span>
                                    </Deferred>
                                </div>
                            </>
                        )}
                        <div>
                            <ProfileAttribute
                                className="text-center"
                                label="Mutual Questions"
                                attribute={common_question_count}
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-2">
                        <div className="!mt-8">
                            <ProfileAttribute
                                label="Age"
                                className="text-center"
                                attribute={partner.age}
                            />
                        </div>
                        <div>
                            <ProfileAttribute
                                label="Zip"
                                className="text-center"
                                attribute={partner.zip}
                            />
                        </div>
                        <div>
                            <ProfileAttribute
                                labelClass=""
                                className="text-center"
                                label="Questions Answered"
                                attribute={partner_answers.length}
                            />
                        </div>
                        <div className="block w-full"></div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="h-full flex-col items-center justify-center space-y-2 lg:flex">
                        {distance.hasOwnProperty("distance") && (
                            <>
                                <div className="flex flex-col items-center justify-center">
                                    <ProfileAttribute
                                        label="Distance"
                                        className="!mt-8 text-center"
                                        attribute=""
                                    />
                                    <Deferred
                                        className="text-xl leading-6 text-bc-600 dark:text-bc-100"
                                        data="distance"
                                        fallback={
                                            <Skeleton className="h-[20px] w-[100px] rounded-full" />
                                        }
                                    >
                                        <span className="text-center text-xl leading-6 text-bc-600 dark:text-bc-100">
                                            {Math.round(
                                                distance.distance.value /
                                                    1.609 /
                                                    1000,
                                            )}{" "}
                                            Miles
                                        </span>
                                    </Deferred>
                                </div>
                                <div className="flex flex-col items-center w-full  mx-auto justify-center">
                                    <ProfileAttribute
                                        label="Traveling Time"
                                        className="text-center"
                                        attribute=""
                                    />
                                    <Deferred
                                        data="distance"
                                        fallback={
                                            <Skeleton className="h-[20px] w-[100px] rounded-full" />
                                        }
                                    >
                                        <span className="text-center text-xl leading-6 text-bc-600 dark:text-bc-100">
                                            {distance.duration.text}
                                        </span>
                                    </Deferred>
                                </div>
                            </>
                        )}
                        <div className="w-full text-center flex justify-center">
                            <ProfileAttribute
                                className="text-center"
                                label="Mutual Questions"
                                attribute={common_question_count}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-4 lg:px-0">
                <div>
                    <div className="mb-4 space-y-4">
                        <MatchProgress
                            value={match.overall}
                            label="Overall Rating"
                        />
                        <MatchProgress
                            value={match.you_seek}
                            label="Their Rating"
                        />
                        <MatchProgress
                            value={match.they_seek}
                            label="Your Rating"
                        />
                    </div>
                    <div className="!mt-4 mx-auto items-center justify-center space-y-4 flex lg:space-x-4 lg:space-y-0">
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
                                        <Link href={route("chat", profile.id)}>
                                            Message
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div>
                                        Can message once you like them. And they
                                        like you back.
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/*<Button*/}
                        {/*    asChild*/}
                        {/*    className="w-full !py-7 text-xl"*/}
                        {/*    size={"lg"}*/}
                        {/*>*/}
                        {/*    <Link href={route("compare", profile)}>*/}
                        {/*        Comparison*/}
                        {/*    </Link>*/}
                        {/*</Button>*/}
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
