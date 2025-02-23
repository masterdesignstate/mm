import React from 'react';
import {Link, usePage} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import ApplicationDarkLogo from "@/Components/ApplicationDarkLogo.jsx";
import {Facebook01Icon, InstagramIcon, YoutubeIcon} from "@hugeicons/react";
import darkGrid from "../../../../public/img/dark-grid.png";
import grid from "../../../../public/img/Grid.png";

const footMenu = [
    {
        title: 'Home', link: route('home')
    },
    {
        title: 'Blog', link: route('blog')
    },
    {
        title: 'About', link: route('about')
    },

    {
        title: 'TOS', link: route('tos')
    },
]
const socialMenu = [
    {
        title: 'Instagram', link: '#'
    },
    {
        title: 'Youtube', link: '#'
    },
    {
        title: 'Twitter', link: '#'
    },
]
const Footer = () => {
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
    if (user)
        return (
            <footer className="text-center pt-16 dark:bg-bc-900 dark:text-white"
                style={{ backgroundImage: `url(${bgGrid})` }}>
                <hr className="dark:border-bc-600/30" />
                <div className="text-center py-4 px-4 text-sm">
                    © Copyright 2025. All Rights Reserved.
                </div>
            </footer>
        )
    else
        return (
            <footer className="dark:bg-bc-900 dark:text-white"
                    style={{ backgroundImage: `url(${bgGrid})` }}>
                <div className="mx-auto hidden max-w-7xl flex-col px-4 justify-between space-y-4 py-4 pt-8 lg:grid lg:grid-cols-2 lg:flex-row lg:space-y-0">
                    <div className="dark:hidden">
                        <ApplicationLogo className="w-56" />
                    </div>
                    <div className="hidden dark:block">
                        <ApplicationDarkLogo className="w-56" />
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <ul className="flex flex-col items-center justify-center space-y-2">
                                {footMenu.map((item) => (
                                    <li key={item.title} className="font-bold">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="flex-col items-center space-y-2 text-bpurple-500 lg:flex">
                                {socialMenu.map((item) => (
                                    <li key={item.title} className="font-bold">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex justify-between px-8 pt-8 lg:hidden">
                    <div className="flex flex-col">
                        <div>
                            {/*<ApplicationLogo className="w-56" />*/}
                            <div className="dark:hidden">
                                <ApplicationLogo className="w-56" />
                            </div>
                            <div className="hidden dark:block">
                                <ApplicationDarkLogo className="w-56" />
                            </div>
                        </div>
                        <ul className="mt-8 flex space-x-4 dark:text-white text-bpurple-500 lg:hidden">
                            <li>
                                <a href="#">
                                    <InstagramIcon
                                        size="24"
                                        variant={"stroke"}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Facebook01Icon
                                        size="24"
                                        variant={"solid"}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <YoutubeIcon size="24" variant={"solid"} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col items-center justify-center space-y-2">
                            {footMenu.map((item) => (
                                <li key={item.title} className="font-bold">
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="border-black  dark:border-bc-600/30 p-2 mt-4" />
                <div className="px-4 py-2 pb-4 text-center text-sm">
                    © Copyright 2025. All Rights Reserved.
                </div>
            </footer>
        );
};

export default Footer;
