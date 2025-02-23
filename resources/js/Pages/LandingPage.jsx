import * as React from "react";
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";
import { Head, Link } from "@inertiajs/react";
import Green from "@/Icons/Green.jsx";
import RedShield from "@/Icons/RedShield.jsx";
import YellowUsers from "@/Icons/YellowUsers.jsx";
import { useState } from "react";

const it_works = [
    {
        heading: "Register",
        content: "Sign up and create your profile—it’s quick, easy, and free.",
    },
    {
        heading: "Answer Questions",
        content:
            "Complete a series of thoughtfully designed questions to share your values, preferences, and personality traits.",
    },
    {
        heading: "Maximum match!",
        content:
            "Our smart matching algorithm connects you with people who align with your answers, making every match meaningful and worth exploring.",
    },
];

const whyMatch = [
    {
        icon: <YellowUsers />,
        head: "Smart search",
        short: "The algorithm will independently select contacts according to your answered questions.",
    },
    {
        icon: <Green />,
        head: "Instant use",
        short: "Find out who is next to you right now and start communicating now",
    },
    {
        icon: <RedShield />,
        head: "No spam",
        short: "The necessary contacts are just a click away across the country",
    },
];

const faq = [
    {
        q: "Does MatchMatical has real profiles?",
        a: "MatchMatical uses photo verification technology to confirm that the person you are communicating with is real. Verified profiles are marked with a blue check mark, and we strongly recommend that you also pass verification. Firstly, a profile with an icon looks cool, and secondly, it makes our community safer.",
    },
    {
        q: "At what age can I register in the system?",
        a: " are marked with a blue check mark, and we strongly recommend that you also pass verification. Firstly, a profile with an icon looks cool, and secondly, it makes our community safer.",
    },
    {
        q: "Which photo should I use for Yandex Match?",
        a: "MatchMatical uses photo verification technology to confirm that the person you are communicating with is real.",
    },
    {
        q: "Yandex Match is a free app?",
        a: "MatchMatical uses photo verification technology to confirm that the person you are communicating with is res verification. Firstly, a profile with an icon looks cool, and secondly, it makes our community safer.",
    },
    {
        q: "Is it possible to use Yandex Match on a computer?",
        a: "MatchMatical uses photo verification technology to confirm that the person you are communicating with is re.",
    },
    {
        q: "Where does Yandex Match work?",
        a: "MatchMatical uses photo verification technology to confirm that the person you are communicating with is real. Verified profiles",
    },
    {
        q: "What should I add to my personal information?",
        a: "MatchMatical  Verified profiles are marked with a blue check mark, and we strongly recommend that you also pass verification. Firstly, a profile with an icon looks cool, and secondly, it makes our community safer.",
    },
];
export default function LandingPage() {
    const [currentFaq, setCurrentFaq] = useState(faq[0]);
    return (
        <div className="flex flex-col overflow-hidden bg-white">
            <Header />
            <Head
                title="Love is a formula –
Start solving yours today! | MatchMatical"
            />
            <section className="grid w-full lg:grid-cols-2 lg:items-center">
                <div className="">
                    <div className="flex flex-col items-center">
                        <div>
                            <h1 className="mb-8 px-2 text-center font-head text-5xl font-bold uppercase">
                                Love is a Formula – <br />
                                Start Solving Yours Today!
                            </h1>
                        </div>

                        <div className="w-96">
                            <Link href={route("login")}>
                                <button
                                    className="w-full rounded-full bg-bpurple-500 py-4 text-white"
                                    onClick={() => setShowForm(true)}
                                >
                                    Login with Email
                                </button>
                            </Link>
                            <div className="my-4 text-center">
                                Don’t have an account?
                                <Link
                                    href={route("register")}
                                    className="ml-2 text-pink-400"
                                >
                                    Sign Up
                                </Link>
                            </div>
                            <div className="relative my-8">
                                <span className="absolute left-1/2 top-0 -mt-3 w-10 -translate-x-1/2 bg-white text-center">
                                    Or
                                </span>
                                <hr className="border-gray-400" />
                            </div>
                            <div className="space-y-4">
                                <a
                                    href={route("facebook.auth")}
                                    className="flex w-full items-center justify-center space-x-4 rounded-full bg-[#1877F2] py-4 text-white"
                                >
                                    <svg
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="24"
                                            height="24"
                                            transform="translate(0 0.5)"
                                            fill="#1877F2"
                                        />
                                        <path
                                            d="M23.5 12.5699C23.5 6.2186 18.3513 1.06988 12 1.06988C5.64872 1.06988 0.5 6.2186 0.5 12.5699C0.5 18.3099 4.70538 23.0674 10.2031 23.9302V15.8941H7.2832V12.5699H10.2031V10.0363C10.2031 7.1541 11.92 5.56207 14.5468 5.56207C15.805 5.56207 17.1211 5.78668 17.1211 5.78668V8.61675H15.671C14.2424 8.61675 13.7969 9.50322 13.7969 10.4127V12.5699H16.9863L16.4765 15.8941H13.7969V23.9302C19.2946 23.0674 23.5 18.3099 23.5 12.5699Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span>Continue with Facebook</span>
                                </a>
                                <a
                                    href={route("google.auth")}
                                    className="flex w-full items-center justify-center space-x-4 rounded-full bg-white py-4 shadow"
                                >
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="24"
                                            height="24"
                                            transform="translate(0.5)"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M23.54 12.2613C23.54 11.4459 23.4668 10.6618 23.3309 9.90906H12.5V14.3575H18.6891C18.4225 15.795 17.6123 17.0129 16.3943 17.8284V20.7138H20.1109C22.2855 18.7118 23.54 15.7636 23.54 12.2613Z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.5 23.4998C15.605 23.4998 18.2081 22.47 20.1109 20.7137L16.3943 17.8282C15.3645 18.5182 14.0472 18.9259 12.5 18.9259C9.50474 18.9259 6.96951 16.903 6.06519 14.1848H2.22314V17.1644C4.11542 20.9228 8.00451 23.4998 12.5 23.4998Z"
                                            fill="#34A853"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.06523 14.1851C5.83523 13.4951 5.70455 12.7581 5.70455 12.0001C5.70455 11.2422 5.83523 10.5051 6.06523 9.81512V6.83557H2.22318C1.44432 8.38807 1 10.1444 1 12.0001C1 13.8558 1.44432 15.6122 2.22318 17.1647L6.06523 14.1851Z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.5 5.07386C14.1884 5.07386 15.7043 5.65409 16.8961 6.79364L20.1945 3.49523C18.2029 1.63955 15.5997 0.5 12.5 0.5C8.00451 0.5 4.11542 3.07705 2.22314 6.83545L6.06519 9.815C6.96951 7.09682 9.50474 5.07386 12.5 5.07386Z"
                                            fill="#EA4335"
                                        />
                                    </svg>

                                    <span>Continue with Google</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="/img/love-head.png" alt="" />
                </div>
            </section>
            <section className="relative px-4 lg:px-0">
                <div className="mx-auto grid max-w-7xl items-center py-24 lg:grid-cols-2 lg:gap-8">

                <div className="absolute bottom-1/2 right-0 translate-y-1/2">
                    <img
                        src="img/shine-right.png"
                        className="h-[800px] w-auto"
                        alt=""
                    />
                </div>
                <div className="font-light space-y-4 text-justify">
                    <h4 className="text-3xl font-bold">
                        What is MatchMatical?
                    </h4>
                    <p>
                        Matchmatical is a cutting-edge dating platform that
                        takes the guesswork out of finding meaningful
                        connections. Using a personalized compatibility system,
                        Matchmatical matches you with individuals who share your
                        values, preferences, and personality.
                    </p>
                    <p>
                        By answering thoughtfully curated questions and using
                        our smart matching algorithm, you'll meet people who
                        align with your goals and interests.{" "}
                    </p>
                </div>
                <div className="mt-8 lg:mt-0">
                    <img
                        src="/img/reviews.png"
                        className="mx-auto h-auto lg:w-[70%] w-[90%]"
                        alt=""
                    />
                </div>
                </div>

            </section>
            <section className="px-4 lg:px-0 mx-auto grid max-w-7xl items-center pb-24 lg:grid-cols-2 lg:gap-8">
                <div className="">
                    <img
                        src="/img/whom.png"
                        className="mx-auto h-auto  lg:w-[70%] w-[90%]"
                        alt=""
                    />
                </div>
                <div className="font-light mt-8 lg:mt-0 text-justify space-y-4">
                    <h4 className="text-3xl font-bold">For whom?</h4>
                    <p>
                        At Matchmatical, our team is passionate about creating a
                        smarter and more meaningful way to connect people. We’re
                        a diverse group of designers, developers, relationship
                        experts, and data scientists who believe that
                        compatibility goes beyond swiping left or right.
                    </p>
                    <p>
                        By answering thoughtfully curated questions and using
                        our smart matching algorithm, you'll meet people who
                        align with your goals and interests.{" "}
                    </p>
                </div>
            </section>

            <section className="relative px-4  mx-auto max-w-7xl rounded-3xl bg-[#F4F8FC] p-12 lg:px-16">
                <div className="relative z-20">
                    <h3 className="mb-8 text-3xl font-bold ">How it works</h3>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {it_works.map((item, i) => (
                            <div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-bpurple-500 text-white">
                                        {i + 1}
                                    </div>
                                    <h1 className="text-xl font-bold">
                                        {item.heading}
                                    </h1>
                                </div>
                                <p className="mt-4 font-light">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 h-1/2 w-screen rounded-3xl bg-[#F4F8FC] p-16"></div>
            </section>

            <section className="relative px-4 lg:px-0">
                <div className="absolute bottom-1/2 left-0 translate-y-1/2">
                    <img
                        src="img/shine-left.png"
                        className="h-[800px] w-auto"
                        alt=""
                    />
                </div>
                <div className="absolute bottom-1/2 right-0 translate-y-1/2">
                    <img
                        src="img/yellow-right.png"
                        className="h-[800px] w-auto"
                        alt=""
                    />
                </div>
                <div className="mx-auto grid max-w-7xl items-center py-24 lg:grid-cols-2 lg:gap-8">
                    <div className="space-y-4 font-light">
                        <h4 className="text-3xl font-bold">
                            Join MatchMatical
                        </h4>
                        <p className>
                            Your Perfect Match is just a few clicks away!
                        </p>
                        <Link href={route("register")} className="inline-block">
                            <button className="rounded-full bg-bpurple-500 px-8 py-2 text-white">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    <div className="mt-8 lg:mt-0 z-10">
                        <img
                            src="/img/females.png"
                            className="mx-auto h-auto"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 lg:px-0 bg-[url(/img/bg-wave.png)] bg-cover bg-center bg-no-repeat">
                <div className="mx-auto grid max-w-7xl items-center pb-24 pt-8 lg:grid-cols-2 lg:gap-8">
                    <div className="">
                        <img
                            src="/img/phone.png"
                            className="mx-auto h-auto"
                            alt=""
                        />
                    </div>
                    <div className="space-y-4 font-light text-white lg:pt-48">
                        <h4 className="text-5xl font-bold">Mutual match!</h4>
                        <p className="text-xl">
                            Start communicating with mutual interest with
                            MatchMatical.
                        </p>
                        <p className="text-xl">
                            In our application, it will be more convenient for
                            you to always be in touch, chat and create new
                            matches.
                        </p>
                        <Link href={route("register")} className="inline-block">
                            <button className="mt-4">
                                <img src="img/download.png" className="w-48" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto px-4 lg:px-0  max-w-7xl py-8 lg:py-24">
                <h3 className="mb-8 text-center text-3xl font-bold text-bpurple-500">
                    Why MatchMatical?
                </h3>
                <div className="grid lg:grid-cols-3 gap-8">
                    {whyMatch.map((item, i) => (
                        <div className="rounded-3xl z-10 bg-[#F6F8FD] p-8">
                            <div>{item.icon}</div>
                            <h4 className="py-4 font-bold text-black">
                                {item.head}
                            </h4>
                            <p>{item.short}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative px-4 lg:px-0">
                <div className="absolute right-0 top-0 -translate-y-1/2">
                    <img
                        src="img/shine-right.png"
                        className="h-[800px] w-auto"
                        alt=""
                    />
                </div>
                <div className="mx-auto max-w-7xl py-8 lg:py-24">
                    <h3 className="mb-8 text-center text-4xl font-bold">
                        Any other <br /> questions?
                    </h3>
                    <div className="lg:flex lg:gap-8">
                        <div className="lg:w-[49%] font-light">
                            <ul className="space-y-8">
                                {faq.map((item, i) => (
                                    <li
                                        key={i}
                                        onMouseEnter={() => setCurrentFaq(item)}
                                    >
                                        <h5
                                            className={
                                                "cursor-pointer font-bold lg:font-light text-xl hover:font-bold " +
                                                (item.q === faq.q
                                                    ? "font-bold"
                                                    : "")
                                            }
                                        >
                                            {item.q}
                                        </h5>
                                        <p className="lg:hidden">{item.a}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden lg:block h-[400px] w-[7px] rounded-full bg-[#EDEEF3]">
                            <div className="h-[50px] w-[7px] rounded-full bg-bpurple-500"></div>
                        </div>
                        <div className="hidden lg:block lg:w-[49%] text-lg font-light">
                            {currentFaq.a}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-1/2 left-0 translate-y-1/2">
                    <img
                        src="img/shine-left.png"
                        className="h-[800px] w-auto"
                        alt=""
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}
