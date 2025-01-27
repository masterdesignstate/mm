import {Head, Link} from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Facebook01Icon, InstagramIcon, YoutubeIcon} from "@hugeicons/react";
import Header from "@/Components/Shared/Header.jsx";
import Footer from "@/Components/Shared/Footer.jsx";




export default function About() {

    return (
        <>
            <Head title="About"/>
            <Header/>
            <section className="max-w-7xl px-4 lg:px-0 mx-auto pt-16">
                <h1 className="font-head font-black text-7xl text-center uppercase text-bpurple-600">Mathematics of love, simplified</h1>
                <p className="max-w-4xl mx-auto text-center text-xl mt-4">Here, meaningful connections are built through thoughtful questions and personalized compatibility. Your perfect match is just an answer away.</p>
            </section>
            <section className="max-w-7xl mx-auto py-4 px-4 flex justify-center">
                <img src="img/about-header.jpg" className="text-center" alt=""/>
            </section>
            <section className="max-w-7xl mx-auto px-4 mt-8">
                <h2 className="font-head font-black text-6xl  text-center uppercase text-bpurple-600 my-16">About Us</h2>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <li>
                        <div className="">
                            <img src="img/image 5.jpg" className="mx-auto" alt=""/>
                            <h3 className=" mt-4 text-bpurple-500 font-bold  text-2xl">Why Matchmatical Matters</h3>
                            <p>At Matchmatical, we believe that relationships thrive on understanding and compatibility. Our platform empowers you to connect with others who share your values, goals, and interests, whether for friendship or romance</p>
                        </div>
                    </li>
                    <li>

                        <div>
                            <img src="img/image 6.jpg" className="mx-auto" alt=""/>
                            <h3 className=" mt-4 text-bpurple-500 font-bold  text-2xl">How Matchmatical Works</h3>
                            <p>Matchmatical uses a simple yet powerful approach: answer curated questions, let our algorithm do the math, and discover users with high compatibility. It’s matchmaking reimagined—scientific, thoughtful, and effective.</p>
                        </div>
                    </li>
                    <li>

                        <div>
                            <img src="img/image 7.jpg" className="mx-auto" alt=""/>
                            <h3 className=" mt-4 text-bpurple-500 font-bold  text-2xl">What Matchmatical Values</h3>
                            <p>We value authenticity, inclusivity, and meaningful interactions. Whether you’re seeking a serious relationship or just looking to expand your social circle, Matchmatical is here to support your journey.</p>
                        </div>
                    </li>

                </ul>
            </section>

            <Footer></Footer>
        </>
    );
}
