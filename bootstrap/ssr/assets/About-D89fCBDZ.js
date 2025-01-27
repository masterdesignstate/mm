import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { H as Header } from "./Header-BGDA6pVl.js";
import { F as Footer } from "./Footer-CXNlU36s.js";
import "react";
import "./ApplicationLogo-BiY3mFu2.js";
import "@hugeicons/react";
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "About" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl px-4 lg:px-0 mx-auto pt-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-head font-black text-7xl text-center uppercase text-bpurple-600", children: "Mathematics of love, simplified" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-4xl mx-auto text-center text-xl mt-4", children: "Here, meaningful connections are built through thoughtful questions and personalized compatibility. Your perfect match is just an answer away." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto py-4 px-4 flex justify-center", children: /* @__PURE__ */ jsx("img", { src: "img/about-header.jpg", className: "text-center", alt: "" }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-4 mt-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-head font-black text-6xl  text-center uppercase text-bpurple-600 my-16", children: "About Us" }),
      /* @__PURE__ */ jsxs("ul", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("img", { src: "img/image 5.jpg", className: "mx-auto", alt: "" }),
          /* @__PURE__ */ jsx("h3", { className: " mt-4 text-bpurple-500 font-bold  text-2xl", children: "Why Matchmatical Matters" }),
          /* @__PURE__ */ jsx("p", { children: "At Matchmatical, we believe that relationships thrive on understanding and compatibility. Our platform empowers you to connect with others who share your values, goals, and interests, whether for friendship or romance" })
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: "img/image 6.jpg", className: "mx-auto", alt: "" }),
          /* @__PURE__ */ jsx("h3", { className: " mt-4 text-bpurple-500 font-bold  text-2xl", children: "How Matchmatical Works" }),
          /* @__PURE__ */ jsx("p", { children: "Matchmatical uses a simple yet powerful approach: answer curated questions, let our algorithm do the math, and discover users with high compatibility. It’s matchmaking reimagined—scientific, thoughtful, and effective." })
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: "img/image 7.jpg", className: "mx-auto", alt: "" }),
          /* @__PURE__ */ jsx("h3", { className: " mt-4 text-bpurple-500 font-bold  text-2xl", children: "What Matchmatical Values" }),
          /* @__PURE__ */ jsx("p", { children: "We value authenticity, inclusivity, and meaningful interactions. Whether you’re seeking a serious relationship or just looking to expand your social circle, Matchmatical is here to support your journey." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  About as default
};
