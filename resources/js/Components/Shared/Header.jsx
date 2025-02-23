import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import { Link, usePage } from "@inertiajs/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/react";
import ApplicationDarkLogo from "@/Components/ApplicationDarkLogo.jsx";
import darkGrid from "../../../../public/img/dark-grid.png";
import grid from "../../../../public/img/Grid.png";

const pages = [
    {
        title: "Home",
        link: route("home"),
    },
    {
        title: "Blog",
        link: route("blog"),
    },
    {
        title: "About",
        link: route("about"),
    },
    {
        title: "Questions",
        link: route("public-questions"),
    },
];
const Header = () => {
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
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    // if(user)
    //     return (
    //         <>
    //         </>
    //     )
    return (
        <nav className="dark:bg-bc-900 border-b border-gray-200 py-4 dark:border-none"
             style={{ backgroundImage: `url(${bgGrid})` }}>
            <div className="container mx-auto flex items-center justify-between px-4 ">
                <div>
                    <Link href={route("home")}>
                        {/*<ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />*/}
                        <div className="dark:hidden">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        </div>
                        <div className="hidden dark:block">
                            <ApplicationDarkLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        </div>
                    </Link>
                </div>
                <ul className="hidden items-center space-x-4 lg:flex">
                    {pages.map((page) => (
                        <li
                            key={page.title}
                            className="font-bold dark:text-white"
                        >
                            <Link href={page.link}>{page.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden space-x-2 lg:block">
                    <Link
                        href={route("login")}
                        className="rounded-full border border-bpurple-300 bg-bc-50 px-12 py-2 uppercase dark:border-none dark:text-bc-600"
                    >
                        Login
                    </Link>
                    <Link
                        href={route("register")}
                        className="border-bpurple-normal rounded-full border bg-bc-600 px-12 py-2 uppercase text-white dark:border-none"
                    >
                        Signup
                    </Link>
                </div>
                <div
                    onClick={() =>
                        showingNavigationDropdown
                            ? setShowingNavigationDropdown(false)
                            : setShowingNavigationDropdown(true)
                    }
                    className="dark:text-white lg:hidden"
                >
                    {!showingNavigationDropdown && <Menu01Icon size={24} />}
                    {showingNavigationDropdown && <Cancel01Icon size={24} />}
                </div>
            </div>
            {showingNavigationDropdown && (
                <div className="mt-6 lg:hidden">
                    <ul className="space-y-2 px-8 uppercase">
                        {pages.map((page) => (
                            <li key={page.title} className="dark:text-white">
                                <Link href={page.link}>{page.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex flex-col space-y-2 px-8 text-center lg:hidden">
                        <Link
                            href={route("login")}
                            className="rounded-full border border-bpurple-300 bg-bc-50 px-12 py-2 uppercase dark:border-none  dark:text-bc-600"
                        >
                            Login
                        </Link>
                        <Link
                            href={route("register")}
                            className="border-bpurple-normal rounded-full border bg-bc-600 px-12 py-2 uppercase text-white dark:border-none"
                        >
                            Signup
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
