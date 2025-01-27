import {Head, Link} from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Facebook01Icon, InstagramIcon, YoutubeIcon} from "@hugeicons/react";
import BlogCard from "@/Components/Blog/BlogCard.jsx";
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";


const footMenu = [
    {
        title: 'About', link: route('about')
    },

    {
        title: 'Terms Of Service', link: route('tos')
    },
    {
        title: 'Blog', link: route('blog')
    },
]
export default function Blog() {

    return (
        <>
            <Head title="Blog"/>
            <Header/>
            <section className="max-w-7xl px-4 lg:px-0 mx-auto pt-16">
                <h1 className="font-head font-black text-7xl text-center uppercase text-bpurple-600">Blog</h1>

            </section>

            <section className="max-w-7xl mx-auto px-4 mt-8">

                <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/1/400/300"
                            heading="Top 10 First-Date Ideas to Spark a Connection"
                        >
                            Explore creative and romantic ideas for your next first
                            date to leave a lasting impression.
                        </BlogCard>
                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/2/400/300"
                            heading="How to Create a Dating Profile
                                That Stands Out"
                        >
                            Tips on crafting the perfect bio and choosing the right
                            photos for success.
                        </BlogCard>


                    </li>
                    <li>
                        <BlogCard
                            src="https://picsum.photos/seed/3/400/300"
                            heading="AI in Modern Matchmaking: How
                                Matchmatical Enhances Connections"
                        >
                            Discover how artificial intelligence is reshaping the
                            dating landscape.
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
                            How to effectively express interest online and offline
                            with your soulmate.
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
                            Steps to overcome and learn from modern dating challenges.
                        </BlogCard>
                    </li>


                </ul>
            </section>

            <Footer/>
        </>
    );
}
