import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import grid from "../../../public/img/Grid.png";
import Footer from "@/Components/Shared/Footer.jsx";
import { Notification02Icon, NotificationCircleIcon } from "@hugeicons/react";
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Sheet,
} from "@/Components/ui/sheet.jsx";
import { Toaster } from "@/Components/ui/toaster.jsx";
import { toast } from "@/hooks/use-toast.js";
import { ToastAction } from "@/Components/ui/toast.jsx";
import darkGrid from "../../../public/img/dark-grid.png";
import ApplicationDarkLogo from "@/Components/ApplicationDarkLogo.jsx";
import { Button } from "@/Components/ui/Button.jsx";

export default function AuthenticatedLayout({ header, children }) {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark",
    );
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
    const display_pic = usePage().props.auth.display_pic;
    const notifications = usePage().props.notifications;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    useEffect(() => {
        // Listen to the 'notifications' channel
        Echo.channel("notifications").listen(
            "NotificationReceived",
            (event) => {
                console.log(event.message);
                const data = event.message;
                const message = event.message.message;
                // setNotifications((prevNotifications) => [...prevNotifications, event.message]);

                if (data.to_user_id === user.id) {
                    toast({
                        title: "Notification Received",
                        description: message,
                        action: (
                            <ToastAction altText="View Profile">
                                <Link href={data.profile_url}>
                                    View Profile
                                </Link>
                            </ToastAction>
                        ),
                    });
                }
            },
        );

        // Cleanup the listener on component unmount
        return () => {
            Echo.channel("notifications").stopListening("NotificationReceived");
        };
    }, []);

    return (
        <div
            className="flex min-h-screen flex-col bg-repeat dark:bg-bc-900 dark:text-white"
            style={{ backgroundImage: `url(${bgGrid})` }}
        >
            <div>
                <Toaster />
                <nav className="border-b border-gray-100 bg-white dark:border-bc-200 dark:bg-transparent dark:text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex shrink-0 items-center">
                                    <Link href="/">
                                        <div className="dark:hidden">
                                            <ApplicationLogo className="ws-auto block h-8 fill-current text-gray-800 dark:text-gray-200" />
                                        </div>
                                        <div className="hidden dark:block">
                                            <ApplicationDarkLogo className="ws-auto block h-8 fill-current text-gray-800 dark:text-gray-200" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("my-profile")}
                                        active={route().current("my-profile")}
                                    >
                                        My Profile
                                    </NavLink>
                                    <NavLink
                                        href={route("matches")}
                                        active={route().current("matches")}
                                    >
                                        Potential Matches
                                    </NavLink>

                                    <NavLink
                                        href={route("questions.index")}
                                        active={route().current(
                                            "questions.index",
                                        )}
                                    >
                                        Questions
                                    </NavLink>

                                    <NavLink
                                        href={route("chat")}
                                        active={route().current("chat")}
                                    >
                                        Chat
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <div className="relative flex">
                                    <Sheet>
                                        <SheetTrigger>
                                            <div
                                                className="relative rounded-full border border-bpurple-500 p-2 dark:border-none"
                                                onClick={() =>
                                                    setShowingNavigationDropdown(
                                                        !showingNavigationDropdown,
                                                    )
                                                }
                                            >
                                                <Notification02Icon className="text-bpurple-500 dark:text-white" />
                                                <div className="absolute right-0 top-0 -mt-2 w-full -translate-x-1/2 rounded-full bg-white p-1 text-xs dark:bg-bc-900">
                                                    {notifications.length}
                                                </div>
                                            </div>
                                        </SheetTrigger>
                                        <SheetContent className="w-[400px] sm:w-[540px]">
                                            <SheetHeader>
                                                <SheetTitle className="flex space-x-4">
                                                    <div>Notifications</div>
                                                    <div>
                                                        <Link
                                                            className="text-sm font-light"
                                                            method="POST"
                                                            href={route(
                                                                "clear-all-notifications",
                                                            )}
                                                        >
                                                            Clear All
                                                        </Link>
                                                    </div>
                                                </SheetTitle>
                                                <SheetDescription>
                                                    <div>
                                                        All the important
                                                        notifications for your
                                                        profile will appear
                                                        here.
                                                    </div>
                                                    <ul className="mt-4 space-y-4">
                                                        {notifications.map(
                                                            (notification) => (
                                                                <li>
                                                                    {notification.type ===
                                                                        "App\\Notifications\\LikeProfileResponseNotification" && (
                                                                        <div className="rounded-lg border p-2 py-4">
                                                                            <div>
                                                                                You
                                                                                have
                                                                                received
                                                                                a
                                                                                like
                                                                                from
                                                                                {" " +
                                                                                    notification
                                                                                        .data
                                                                                        ?.from_name}
                                                                            </div>
                                                                            <Button
                                                                                asChild
                                                                                size="small"
                                                                                className="mt-2 px-4 py-1 text-xs"
                                                                                variant="secondary"
                                                                            >
                                                                                {notification.data.from_id &&
                                                                                <Link
                                                                                    href={route("profile", notification.data?.from_id,)}
                                                                                >
                                                                                    View Profile
                                                                                </Link>
                                                                                }
                                                                            </Button>
                                                                        </div>
                                                                    )}

                                                                    {notification.type ===
                                                                        "App\\Notifications\\NewMessageNotification" && (
                                                                        <div className="rounded-lg border p-2 py-4">
                                                                            <div>
                                                                                You                                                                              have
                                                                                received
                                                                                a
                                                                                message
                                                                                from
                                                                                {" " + notification.data?.from_name}
                                                                            </div>
                                                                            <Button
                                                                                asChild
                                                                                size="small"
                                                                                className="mt-2 px-4 py-1 text-xs"
                                                                                variant="secondary"
                                                                            >
                                                                                <Link
                                                                                    href={route(
                                                                                        "chat",
                                                                                        notification
                                                                                            .data
                                                                                            ?.users
                                                                                            ?.from
                                                                                            .id,
                                                                                    )}
                                                                                >
                                                                                    See
                                                                                    Message
                                                                                </Link>
                                                                            </Button>
                                                                        </div>
                                                                    )}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                                <div className="relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-bc-900 dark:text-white dark:hover:text-gray-300"
                                                >
                                                    <div className="flex size-10 items-center justify-center rounded-full border border-gray-400 bg-gray-500">
                                                        {user?.profile?.dp && (
                                                            <img
                                                                src={
                                                                    user.profile
                                                                        .dp
                                                                }
                                                                alt="Dp"
                                                                className="size-10 rounded-full object-cover object-center"
                                                            />
                                                        )}
                                                    </div>

                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content className="dark:bg-bc-900">
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Settings
                                            </Dropdown.Link>
                                            {/*<Dropdown>*/}
                                            {/*    <button*/}
                                            {/*        onClick={() =>*/}
                                            {/*            setDarkMode(!darkMode)*/}
                                            {/*        }*/}
                                            {/*        className="rounded-lg bg-gray-200 p-2 dark:bg-gray-800"*/}
                                            {/*    >*/}
                                            {/*        {darkMode*/}
                                            {/*            ? "☀️ Light Mode"*/}
                                            {/*            : "🌙 Dark Mode"}*/}
                                            {/*    </button>*/}
                                            {/*</Dropdown>*/}
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink
                                href={route("my-profile")}
                                active={route().current("my-profile")}
                            >
                                My Profile
                            </ResponsiveNavLink>

                            <ResponsiveNavLink
                                href={route("matches")}
                                active={route().current("matches")}
                            >
                                Potential Matches
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("questions.index")}
                                active={route().current("questions.index")}
                            >
                                All Questions
                            </ResponsiveNavLink>

                            <ResponsiveNavLink
                                href={route("chat")}
                                active={route().current("chat")}
                            >
                                Chat
                            </ResponsiveNavLink>
                        </div>

                        <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Settings
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="bg-white shadow dark:bg-transparent">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
            </div>

            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
