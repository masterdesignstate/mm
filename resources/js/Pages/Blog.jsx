import { Head, Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import { Facebook01Icon, InstagramIcon, YoutubeIcon } from "@hugeicons/react";
import BlogCard from "@/Components/Blog/BlogCard.jsx";
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";
import darkGrid from "../../../public/img/dark-grid.png";
import grid from "../../../public/img/Grid.png";

const footMenu = [
    {
        title: "About",
        link: route("about"),
    },

    {
        title: "Terms Of Service",
        link: route("tos"),
    },
    {
        title: "Blog",
        link: route("blog"),
    },
];
export default function Blog() {
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
            <Head title="Blog" />
            <Header />
            <section className="dark:bg-bc-900 text-white"
                     style={{ backgroundImage: `url(${bgGrid})` }}>
                <div className="mx-auto max-w-7xl px-4 pt-16 lg:px-0">
                    <h1 className="dark:text-white text-center font-head text-7xl font-black text-bc-600">
                        Blog
                    </h1>
                </div>
            </section>

            <section className="dark:bg-bc-900 text-white"
                     style={{ backgroundImage: `url(${bgGrid})` }}>
            <div className="mx-auto pt-8 max-w-7xl px-4">
                <ul className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-4 py-8">
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/1/400/300"
                            heading="Top 10 First-Date Ideas to Spark a Connection"
                        >
                            Explore creative and romantic ideas for your next
                            first date to leave a lasting impression.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/2/400/300"
                            heading="How to Create a Dating Profile
                                That Stands Out"
                        >
                            Tips on crafting the perfect bio and choosing the
                            right photos for success.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/3/400/300"
                            heading="AI in Modern Matchmaking: How
                                Matchmatical Enhances Connections"
                        >
                            Discover how artificial intelligence is reshaping
                            the dating landscape.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/4/400/300"
                            heading="5 Green Flags to Look for in a
                                Healthy Relationship"
                        >
                            Signs that you're building a strong and balanced
                            connection.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/5/400/300"
                            heading="Heartwarming Stories: Couples
Who Found Love with Matchmatical"
                        >
                            Real-life success stories from users of the app.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/6/400/300"
                            heading="Mastering the Art of Flirting in the
Digital Age"
                        >
                            How to effectively express interest online and
                            offline with your soulmate.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/7/400/300"
                            heading="The Science Behind Compatibility:
Matchmatical’s Approach to Pairing
People"
                        >
                            An inside look at the algorithms that make the app
                            unlike any.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/8/400/300"
                            heading="Dealing with Ghosting: How to Move
Forward and Stay Confident"
                        >
                            Steps to overcome and learn from modern dating
                            challenges.
                        </BlogCard>
                    </li>
                </ul>
            </div>
            </section>

            <Footer />
        </>
    );
}
