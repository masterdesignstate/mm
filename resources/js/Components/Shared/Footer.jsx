import React from 'react';
import {Link, usePage} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Facebook01Icon, InstagramIcon, YoutubeIcon} from "@hugeicons/react";

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
    const user = usePage().props.auth.user;
    if (user)
        return (
            <footer className=" text-center mt-8">
                <hr/>
                <div className="text-center py-2 px-4 text-sm">
                    © Copyright 2025. All Rights Reserved.
                </div>
            </footer>
        )
    else
        return (
            <footer>
                <div
                    className="hidden mt-8 lg:grid lg:grid-cols-2 flex-col lg:flex-row space-y-4 lg:space-y-0  justify-between max-w-7xl mx-auto py-4">
                    <div>
                        <ApplicationLogo className="w-56"/>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <ul className="flex flex-col justify-center items-center space-y-2">
                                {
                                    footMenu.map(item => (
                                        <li key={item.title} className="font-bold">
                                            <Link href={item.link}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="lg:flex flex-col items-center space-y-2 text-bpurple-500">
                                {
                                    socialMenu.map(item => (
                                        <li key={item.title} className="font-bold">
                                            <Link href={item.link}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="lg:hidden flex justify-between mt-8 max-w-[70%] mx-auto">
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <div>
                        <ApplicationLogo className="w-56"/>
                        </div>
                        <ul className="flex lg:hidden space-x-4 mt-16 text-bpurple-500">
                            <li>
                                <a href="#">
                                    <InstagramIcon size="24" variant={"stroke"}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Facebook01Icon size="24" variant={"solid"}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <YoutubeIcon size="24" variant={"solid"}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col justify-center items-center space-y-2">
                            {
                                footMenu.map(item => (
                                    <li key={item.title} className="font-bold">
                                        <Link href={item.link}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <hr className="border-black mt-4"/>
                <div className="text-center py-2 px-4 text-sm">
                    © Copyright 2025. All Rights Reserved.
                </div>
            </footer>
        );
};

export default Footer;
