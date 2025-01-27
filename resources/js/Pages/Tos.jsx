import {Head, Link} from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Term from "@/Components/Tos/Term.jsx";
import {Facebook01Icon, InstagramIcon, YoutubeIcon} from "@hugeicons/react";
import NavLink from "@/Components/NavLink.jsx";
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
export default function Tos() {

    return (
        <>
            <Head title="Terms of Service"/>
            <Header/>
            <section className="max-w-7xl px-4 lg:px-0 mx-auto">
                <h1 className="font-head font-black text-7xl text-center uppercase text-bpurple-600 pt-16">Terms of service</h1>
                <p className="max-w-3xl mx-auto text-center text-xl mt-4">Welcome to Matchmatical, a platform designed
                    to help users find meaningful connections through compatibility-based matchmaking. By using the
                    Matchmatical app or website, you agree to the following Terms of Service. Please read these terms
                    carefully before using our services.</p>
            </section>
            <section className="space-y-8 px-4 lg:px-0 max-w-7xl mx-auto">
                <Term className="mt-8" heading="1. Acceptance of Terms">
                    By accessing or using Matchmatical, you confirm that you have read, understood, and agree to be
                    bound by these Terms of Service. If you do not agree, you must stop using the platform immediately.
                </Term>
                <Term className="mt-8" heading="2. Eligibility">
                    To use Matchmatical, you must:
                    <ul className="list-disc ml-8">
                        <li>
                            Be at least 18 years old.

                        </li>
                        <li>
                            Reside in the United States.

                        </li>
                        <li>
                            Create an account with accurate and truthful information.

                        </li>
                    </ul>
                    Matchmatical reserves the right to terminate accounts that violate these eligibility requirements.
                </Term>
                <Term className="mt-8" heading="3. Account Registration">
                    When you create an account, you agree to:
                    <ul className="list-disc ml-8">
                        <li>
                            Provide accurate information, including your name, age, gender, and location.
                        </li>
                        <li>
                            Keep your login credentials confidential.
                        </li>
                        <li>
                            Notify us immediately if you suspect unauthorized use of your account.
                        </li>
                    </ul>
                    You are responsible for all activity that occurs under your account.
                </Term>
                <Term heading="4. Prohibited Conduct">
                    While using Matchmatical, you agree NOT to:
                    <ul className="list-disc ml-8">
                        <li>
                            Impersonate another person or use fake profiles.

                        </li>
                        <li>
                            Post or share unlawful, abusive, obscene, or harmful content.

                        </li>
                        <li>
                            Harass, bully, or threaten other users.

                        </li>
                        <li>
                            Use the app for commercial purposes without authorization.

                        </li>
                        <li>
                            Access or attempt to access another user’s account.

                        </li>
                        <li>
                            Use Matchmatical in a way that violates any applicable law or regulation.

                        </li>
                    </ul>
                    Violation of these rules may result in suspension or termination of your account.
                </Term>
                <Term heading="5. Privacy">
                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use,
                    and protect your personal information.
                </Term>
                <Term heading="6. Compatibility Algorithm">
                    Matchmatical uses a proprietary algorithm to calculate compatibility scores. While we strive to
                    provide accurate matches, we do not guarantee the success or quality of any connection made through
                    our platform.
                </Term>
                <Term heading="7. Termination">
                    Matchmatical reserves the right to suspend or terminate your account at any time for violations of
                    these terms or for any reason deemed necessary to maintain a safe platform. You may also terminate
                    your account at any time through your profile settings.
                </Term>
                <Term heading="8. Changes to Terms">
                    We may update these Terms of Service from time to time. If we make significant changes, we will
                    notify you through the app or via email. Your continued use of Matchmatical after such changes
                    indicates your acceptance of the updated terms.
                </Term>
                <Term heading="9. Contact Us">
                    If you have questions about these Terms of Service, you can contact us at:
                    <ul>
                        <li>
                            Matchmatical Support Team
                        </li>
                        <li>
                            Email: [Insert Support Email]

                        </li>
                        <li>
                            Address: [Insert Business Address]

                        </li>
                    </ul>

                    By using Matchmatical, you acknowledge that you have read and agree to these Terms of Service.
                    Thank you for being part of our community!
                </Term>

            </section>
            <Footer/>
        </>
    );
}
