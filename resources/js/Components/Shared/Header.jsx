import React from 'react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Link, usePage} from "@inertiajs/react";
import {Menu01Icon, } from "@hugeicons/react";

const pages = [
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
        title: 'Terms Of Service', link: route('tos')
    },
]
const Header = () => {
    const user = usePage().props.auth.user;
    // if(user)
    //     return (
    //         <>
    //         </>
    //     )
    return (
        <nav className="border-b border-gray-200 py-4 mb-4">
            <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between">
                <div>
                    <Link href={route('home')}>
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"/>
                    </Link>
                </div>
                <ul className="items-center space-x-4 hidden lg:flex">
                    {
                        pages.map(page => (
                            <li key={page.title} className="font-bold">
                                <Link href={page.link}>{page.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="space-x-2 hidden lg:block">
                    <Link href={route('login')}
                        className="uppercase rounded-full px-12 py-2 bg-bpurple-50 border-bpurple-300 border">Login
                    </Link>
                    <Link href={route('register')}
                        className="uppercase rounded-full px-12 py-2 bg-bpurple-600 text-white border-bpurple-normal border">Signup
                    </Link>
                </div>
                <div className="lg:hidden">
                    <Menu01Icon size={24} />
                </div>
            </div>
        </nav>
    );
};

export default Header;
