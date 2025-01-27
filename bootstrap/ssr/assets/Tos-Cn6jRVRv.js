import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import "react";
import { H as Header } from "./Header-BGDA6pVl.js";
import { F as Footer } from "./Footer-CXNlU36s.js";
import "./ApplicationLogo-BiY3mFu2.js";
import "@hugeicons/react";
const Term = ({ heading, children, className, ...props }) => {
  return /* @__PURE__ */ jsxs("div", { ...props, className, children: [
    /* @__PURE__ */ jsx("h2", { className: "font-bold text-3xl text-black mb-3", children: heading }),
    /* @__PURE__ */ jsx("div", { className: "font-light text-gray-800", children })
  ] });
};
[
  {
    title: "About",
    link: route("about")
  },
  {
    title: "Terms Of Service",
    link: route("tos")
  },
  {
    title: "Blog",
    link: route("blog")
  }
];
function Tos() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Terms of Service" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl px-4 lg:px-0 mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-head font-black text-7xl text-center uppercase text-bpurple-600 pt-16", children: "Terms of service" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-center text-xl mt-4", children: "Welcome to Matchmatical, a platform designed to help users find meaningful connections through compatibility-based matchmaking. By using the Matchmatical app or website, you agree to the following Terms of Service. Please read these terms carefully before using our services." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-8 px-4 lg:px-0 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx(Term, { className: "mt-8", heading: "1. Acceptance of Terms", children: "By accessing or using Matchmatical, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, you must stop using the platform immediately." }),
      /* @__PURE__ */ jsxs(Term, { className: "mt-8", heading: "2. Eligibility", children: [
        "To use Matchmatical, you must:",
        /* @__PURE__ */ jsxs("ul", { className: "list-disc ml-8", children: [
          /* @__PURE__ */ jsx("li", { children: "Be at least 18 years old." }),
          /* @__PURE__ */ jsx("li", { children: "Reside in the United States." }),
          /* @__PURE__ */ jsx("li", { children: "Create an account with accurate and truthful information." })
        ] }),
        "Matchmatical reserves the right to terminate accounts that violate these eligibility requirements."
      ] }),
      /* @__PURE__ */ jsxs(Term, { className: "mt-8", heading: "3. Account Registration", children: [
        "When you create an account, you agree to:",
        /* @__PURE__ */ jsxs("ul", { className: "list-disc ml-8", children: [
          /* @__PURE__ */ jsx("li", { children: "Provide accurate information, including your name, age, gender, and location." }),
          /* @__PURE__ */ jsx("li", { children: "Keep your login credentials confidential." }),
          /* @__PURE__ */ jsx("li", { children: "Notify us immediately if you suspect unauthorized use of your account." })
        ] }),
        "You are responsible for all activity that occurs under your account."
      ] }),
      /* @__PURE__ */ jsxs(Term, { heading: "4. Prohibited Conduct", children: [
        "While using Matchmatical, you agree NOT to:",
        /* @__PURE__ */ jsxs("ul", { className: "list-disc ml-8", children: [
          /* @__PURE__ */ jsx("li", { children: "Impersonate another person or use fake profiles." }),
          /* @__PURE__ */ jsx("li", { children: "Post or share unlawful, abusive, obscene, or harmful content." }),
          /* @__PURE__ */ jsx("li", { children: "Harass, bully, or threaten other users." }),
          /* @__PURE__ */ jsx("li", { children: "Use the app for commercial purposes without authorization." }),
          /* @__PURE__ */ jsx("li", { children: "Access or attempt to access another user’s account." }),
          /* @__PURE__ */ jsx("li", { children: "Use Matchmatical in a way that violates any applicable law or regulation." })
        ] }),
        "Violation of these rules may result in suspension or termination of your account."
      ] }),
      /* @__PURE__ */ jsx(Term, { heading: "5. Privacy", children: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information." }),
      /* @__PURE__ */ jsx(Term, { heading: "6. Compatibility Algorithm", children: "Matchmatical uses a proprietary algorithm to calculate compatibility scores. While we strive to provide accurate matches, we do not guarantee the success or quality of any connection made through our platform." }),
      /* @__PURE__ */ jsx(Term, { heading: "7. Termination", children: "Matchmatical reserves the right to suspend or terminate your account at any time for violations of these terms or for any reason deemed necessary to maintain a safe platform. You may also terminate your account at any time through your profile settings." }),
      /* @__PURE__ */ jsx(Term, { heading: "8. Changes to Terms", children: "We may update these Terms of Service from time to time. If we make significant changes, we will notify you through the app or via email. Your continued use of Matchmatical after such changes indicates your acceptance of the updated terms." }),
      /* @__PURE__ */ jsxs(Term, { heading: "9. Contact Us", children: [
        "If you have questions about these Terms of Service, you can contact us at:",
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Matchmatical Support Team" }),
          /* @__PURE__ */ jsx("li", { children: "Email: [Insert Support Email]" }),
          /* @__PURE__ */ jsx("li", { children: "Address: [Insert Business Address]" })
        ] }),
        "By using Matchmatical, you acknowledge that you have read and agree to these Terms of Service. Thank you for being part of our community!"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Tos as default
};
