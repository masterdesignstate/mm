import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import background from '../../../public/img/white-background.png'
import grid from '../../../public/img/Grid.png'
import darkGrid from "../../../public/img/dark-grid.png";
import ApplicationDarkLogo from "@/Components/ApplicationDarkLogo.jsx";
import React from "react";

export default function GuestLayout({ children }) {
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
        <section className="dark:bg-bc-900 dark:text-white"
        >
        <div className="flex h-screen flex-col items-center  pt-6 justify-between  " style={{backgroundImage: `url(${bgGrid})`}}>
            <div className="mt-8">
                <Link href="/">
                    <div className="dark:hidden">
                        <ApplicationLogo className="w-72 fill-current text-gray-500" />
                    </div>
                    <div className="hidden dark:block">
                        <ApplicationDarkLogo
                            className="w-72 fill-current text-gray-500" />
                    </div>
                </Link>
            </div>

            <div className="">
                {children}
            </div>
            <div className="bg-repeat-x w-full h-52" style={{ backgroundImage: `url(${background})` }}>
                {/*<img src="img/white-background.png" className="object-cover w-full" alt=""/>*/}
            </div>
        </div>
        </section>
    );
}
