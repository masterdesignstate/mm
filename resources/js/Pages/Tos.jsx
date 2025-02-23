import { Head, Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Term from "@/Components/Tos/Term.jsx";
import { Facebook01Icon, InstagramIcon, YoutubeIcon } from "@hugeicons/react";
import NavLink from "@/Components/NavLink.jsx";
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
export default function Tos() {
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
            <Head title="Terms of Service" />
            <Header />
            <section
                className="text-white dark:bg-bc-900"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="mx-auto max-w-7xl px-4 lg:px-0">
                    <h1 className="pt-16 text-center font-head text-7xl font-medium uppercase text-bc-600 dark:text-white">
                        Terms of service
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-black dark:tex">
                        Welcome to Matchmatical, a platform designed to help
                        users find meaningful connections through
                        compatibility-based matchmaking. By using the
                        Matchmatical app or website, you agree to the following
                        Terms of Service. Please read these terms carefully
                        before using our services.
                    </p>
                </div>
            </section>
            <section
                className="text-white dark:bg-bc-900"
                style={{ backgroundImage: `url(${bgGrid})` }}
            >
                <div className="">
                    <div className="mx-auto max-w-7xl space-y-8 px-4 lg:px-0">
                        <Term className="pt-8" heading="1. Definitions">
                            Matchmatical: Our online dating platform that
                            connects individuals based on compatibility and
                            shared interests. <br />
                            You/User: Any individual using Matchmatical. <br />
                            Using Matchmatical: Accessing, interacting with, or
                            engaging in any activity on the platform.
                        </Term>

                        <Term
                            className="mt-8"
                            heading="2.  Acceptance of Terms"
                        >
                            By using Matchmatical, you confirm that you have
                            read, understood, and agree to be bound by these
                            Terms of Service.
                        </Term>
                        <Term className="mt-8" heading="3. Eligibility">
                            To use Matchmatical, you must:
                            <ul className="ml-8 list-disc">
                                <li>Be at least 18 years old.</li>
                                <li>Reside in the United States.</li>
                            </ul>
                        </Term>
                        <Term
                            className="mt-8"
                            heading="4. Account Registration"
                        >
                            When you create an account, you agree to:
                            <ul className="ml-8 list-disc">
                                <li>
                                    Provide accurate information, including your
                                    name, age, gender, and location.
                                </li>
                                <li>
                                    Keep your login credentials confidential.
                                </li>
                                <li>
                                    Notify us immediately at the email address
                                    below if you suspect unauthorized use of
                                    your account
                                </li>
                            </ul>
                            You are responsible for all activity that occurs
                            under your account.
                        </Term>
                        <Term
                            heading="5. Prohibited Conduct
"
                        >
                            While using Matchmatical, you agree NOT to:
                            <ul className="ml-8 list-disc">
                                <li>
                                    Impersonate another person or misrepresent
                                    yourself
                                </li>
                                <li>
                                    Post or share unlawful, abusive, obscene, or
                                    harmful content
                                </li>
                                <li>Harass, bully, or threaten other users</li>
                                <li>
                                    Use Matchmatical for commercial purposes
                                </li>
                                <li>
                                    Access or attempt to access another's
                                    account
                                </li>
                                <li>
                                    Use Matchmatical in a way that violates any
                                    applicable law or regulation
                                </li>
                            </ul>
                            Violation of these rules may result in suspension or
                            termination of your account, at the discretion of
                            Matchmatical's administrators.
                        </Term>
                        <Term heading="6.  Intended Use">
                            All results generated by Matchmatical are intended
                            for informational and entertainment purposes only.
                            These results do not constitute any form of
                            professional advice, and Matchmatical makes no
                            guarantees regarding outcomes or user compatibility.
                        </Term>
                        <Term
                            heading="7. Content Ownership
"
                        >
                            <ul>
                                <li>
                                    Your Content: You retain ownership of any
                                    content you share on Matchmatical. By
                                    sharing this content, you grant Matchmatical
                                    a non-exclusive, worldwide, royalty-free
                                    license to use it.
                                </li>
                                <li>
                                    Our Content: Matchmatical owns all rights to
                                    the platform's design, features, algorithms,
                                    and branding. You may not copy, modify, or
                                    distribute our content without prior written
                                    permission.
                                </li>
                            </ul>
                        </Term>
                        <Term heading="8. Privacy">
                            All information provided during your use of
                            Matchmatical is protected and will not be sold or
                            shared with any third party without your explicit
                            consent, except as required by law.
                        </Term>
                        <Term heading="9. Disclaimer">
                            Matchmatical expressly makes no guarantees or
                            warranties regarding the accuracy, reliability, or
                            completeness of results. Matchmatical expressly
                            disclaims all liability for any actions taken by you
                            or others based on these results.
                        </Term>
                        <Term heading="10. Assumption of Risk">
                            You acknowledge and accept that your use of
                            Matchmatical may involve inherent risks, including
                            but not limited to, emotional or psychological harm.
                            You agree to assume full responsibility for these
                            risks and for your own safety and well-being.
                        </Term>

                        <Term heading="11. Waiver and Indemnification">
                            To the maximum extent permitted by applicable law,
                            you waive, release, and discharge Matchmatical and
                            its affiliates from any claims or liabilities
                            arising from your use of Matchmatical. You also
                            agree to indemnify and defend Matchmatical and its
                            affiliates against such claims or liabilities,
                            including any attorneys' fees.
                        </Term>

                        <Term heading="12. Termination">
                            Matchmatical reserves the right to suspend or
                            terminate your account at any time for violations of
                            these terms or for any reason deemed necessary to
                            maintain a safe platform. You may also terminate
                            your account at any time through your profile
                            settings.
                        </Term>
                        <Term heading="13. Changes to Terms">
                            We may update these Terms of Service from time to
                            time. If we make significant changes, we will notify
                            you via email. Your continued use of Matchmatical
                            after we notify you of such changes indicates your
                            acceptance of the updated terms.
                        </Term>
                        <Term heading="14. Contact Us">
                            If you have questions about these Terms of Service,
                            you can contact us at: admin@matchmatical.com
                        </Term>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
