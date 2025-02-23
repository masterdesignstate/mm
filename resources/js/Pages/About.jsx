import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";
import darkGrid from "../../../public/img/dark-grid.png";
import grid from "../../../public/img/Grid.png";

export default function About() {
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
            <Head title="About" />
            <Header />
            <section
                className="text-white dark:bg-bc-900"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="mx-auto max-w-7xl px-4 pt-16 lg:px-0">
                    <h1 className="text-center font-head text-5xl lg:text-7xl font-black uppercase text-bc-600 dark:font-medium dark:text-white">
                        Mathematics of love, simplified
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-xl text-bc-900 dark:text-white">
                        Here, meaningful connections are built through
                        thoughtful questions and personalized compatibility.
                        Your perfect match is just an answer away.
                    </p>
                </div>
            </section>
            <section
                className="text-white dark:bg-bc-900"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="mx-auto flex max-w-7xl justify-center px-4 py-4">
                    <img
                        src="img/about-header.jpg"
                        className="rounded-3xl lg:rounded-[80px] text-center dark:rounded-[40px]"
                        alt=""
                    />
                </div>
            </section>
            <section
                className="text-white dark:bg-bc-900"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="mx-auto max-w-7xl px-4 py-8">
                    <h2 className="my-16 text-center font-head text-6xl font-black uppercase text-bpurple-600 dark:font-medium dark:text-white">
                        About Us
                    </h2>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <li>
                            <div className="">
                                <img
                                    src="img/image 5.jpg"
                                    className="mx-auto dark:rounded-3xl"
                                    alt=""
                                />
                                <h3 className="mt-4 text-2xl font-bold text-bpurple-500 dark:text-white">
                                    Why Matchmatical Matters
                                </h3>
                                <p className="text-bc-900 dark:text-white">
                                    At Matchmatical, we believe that
                                    relationships thrive on understanding and
                                    compatibility. Our platform empowers you to
                                    connect with others who share your values,
                                    goals, and interests, whether for friendship
                                    or romance
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img
                                    src="img/image 6.jpg"
                                    className="mx-auto dark:rounded-3xl"
                                    alt=""
                                />
                                <h3 className="mt-4 text-2xl font-bold text-bpurple-500 dark:text-white">
                                    How Matchmatical Works
                                </h3>
                                <p className="text-bc-900 dark:text-white">
                                    Matchmatical uses a simple yet powerful
                                    approach: answer curated questions, let our
                                    algorithm do the math, and discover users
                                    with high compatibility. It’s matchmaking
                                    reimagined—scientific, thoughtful, and
                                    effective.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img
                                    src="img/image 7.jpg"
                                    className="mx-auto dark:rounded-3xl"
                                    alt=""
                                />
                                <h3 className="mt-4 text-2xl font-bold text-bpurple-500 dark:text-white">
                                    What Matchmatical Values
                                </h3>
                                <p className="text-bc-900 dark:text-white">
                                    We value authenticity, inclusivity, and
                                    meaningful interactions. Whether you’re
                                    seeking a serious relationship or just
                                    looking to expand your social circle,
                                    Matchmatical is here to support your
                                    journey.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}
