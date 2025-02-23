import React from "react";
import { Button } from "@/Components/ui/Button.jsx";
import { ArrowMoveDownRightIcon } from "@hugeicons/react";
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";
import grid from "../../../public/img/Grid.png";
import darkGrid from "../../../public/img/dark-grid.png";
import { Link } from "@inertiajs/react";

const HomeNew = ({ questions }) => {
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
    return (
        <>
            <Header />
            <section
                className="dark:bg-bc-900 bg-[url('/img/Grid.png')]] bg-repeat px-4 pb-8 pt-2"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-bc-600 mb-12 mt-8 text-center font-head text-5xl uppercase dark:text-white lg:text-7xl">
                        Compatibility isn’t <br className="lg:hidden" /> random.{" "}
                        <br className="hidden lg:block" /> It’s calculated.
                    </h1>
                    <img
                        src="/img/mobile-hero.png"
                        className="lg:hidden mx-auto"
                        alt=""
                    />
                    <img
                        src="/img/lg-hero.png"
                        alt=""
                        className="hidden lg:block mx-auto"
                    />
                </div>
            </section>
            <section
                className="dark:bg-bc-900 px-4 pt-8"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="mx-auto max-w-7xl grid-cols-2 items-center lg:grid lg:gap-8">
                    <div>
                        <h2 className="text-bc-200 text-4xl font-medium dark:text-white/30">
                            Love isn’t a guessing game.
                        </h2>
                        <h3 className="my-4 text-4xl font-medium dark:text-white">
                            It’s a Matchmatical equation.
                        </h3>
                        <p className="text-xl dark:text-white">
                            Matchmatical goes beyond swipes and surface-level
                            attraction. We craft tailored questions designed to
                            spark meaningful connections, helping you find
                            someone truly aligned with you—personality, values,
                            and all.
                        </p>
                        <div className="hidden lg:block">
                            <Link
                                href={route("register")}
                                size="lg"
                                className="bg-bc-100 text-bc-900 mt-4 flex h-auto w-full items-center justify-center space-x-2 rounded-3xl py-6 text-center text-xl"
                            >
                                <ArrowMoveDownRightIcon className="text-5xl" />
                                <span>Join Us</span>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-bc-900 my-8 rounded-3xl p-4 py-8">
                        <img src="img/bubbles.png" alt="" />
                    </div>
                </div>

                <div className="w-full lg:hidden">
                    <Link
                        href={route("register")}
                        size="lg"
                        className="bg-bc-100 text-bc-900 flex h-auto w-full items-center justify-center space-x-2 rounded-3xl py-6 text-center text-xl"
                    >
                        <ArrowMoveDownRightIcon className="text-5xl" />
                        <span>Join Us</span>
                    </Link>
                </div>
            </section>

            <section
                className="dark:bg-bc-900 px-4 py-8"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="mx-auto lg:grid max-w-7xl items-center gap-8 lg:grid-cols-3">
                    <div className="col-span-2">
                        <h4 className="text-bc-600 mb-2 text-4xl font-medium dark:text-white">
                            Explore All Questions
                        </h4>
                        <h5 className="text-bc-200 mb-4 mt-0 text-4xl font-medium dark:text-white/30">
                            That Define Your Match.
                        </h5>

                        {questions.length > 0 &&
                            questions.map((question, index) => (
                                <div
                                    key={index}
                                    className="mt-4 grid-cols-3 gap-4 lg:grid"
                                >
                                    <div className="relative col-span-3 space-y-2 rounded-full border border-gray-700 px-4 py-2 dark:border-white dark:text-white">
                                        <span>
                                            {index + 1}. {question.question}{" "}
                                            {question.is_mandatory ? "*" : ""}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="text-center mt-8 lg:mt-0  items-center mx-auto">
                        <img src="img/hand-heart.png" className="mx-auto inline-block" alt="" />
                    </div>
                </div>
            </section>
            <section className="dark:bg-bc-900 px-4"
                     style={{ backgroundImage: `url(${bgGrid})` }}>
                <div className="mx-auto max-w-7xl pt-8">
                    <div className="dark:from-bc-900 dark: via-bc-900 to-bc-200 border-bc-200 rounded-t-lg border-x border-t bg-gradient-to-t text-center">
                        <div className="mx-auto max-w-4xl py-48 px-4">
                            <h5 className="text-bc-600 font-head text-6xl dark:text-white">
                                Find Your Perfect Match
                            </h5>
                            <p className="mx-auto max-w-2xl dark:text-white">
                                Matchmatical goes beyond swipes and
                                surface-level attraction. We craft tailored
                                questions designed to spark meaningful
                                connections, helping you find someone truly
                                aligned with you—personality, values, and all.
                            </p>
                            <Link className="my-4 block" href={route("login")}>
                                <Button className="h-auto px-8 py-3">
                                    Login with Email
                                </Button>
                            </Link>
                            <div className="dark:text-white">
                                Don’t have an account?
                                <Link
                                    href={route("register")}
                                    className="text-bc-200 font-bold"
                                >
                                    {" "}
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default HomeNew;
