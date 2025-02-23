import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import "react";
import { H as Header } from "./Header-BGDA6pVl.js";
import { F as Footer } from "./Footer-TPpfWWn9.js";
import "./ApplicationLogo-BiY3mFu2.js";
import "@hugeicons/react";
const BlogCard = ({ heading, children, src, className, ...props }) => {
  return /* @__PURE__ */ jsxs("div", { ...props, className, children: [
    /* @__PURE__ */ jsx("img", { src, alt: "" }),
    /* @__PURE__ */ jsx("span", { className: "font-light text-xs text-gray-600", children: "08.08.2021" }),
    /* @__PURE__ */ jsx("h3", { className: " mt-4  font-bold ", children: heading }),
    /* @__PURE__ */ jsxs("p", { className: "font-light text-sm", children: [
      children,
      children
    ] })
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
function Blog() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Blog" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl px-4 lg:px-0 mx-auto pt-16", children: /* @__PURE__ */ jsx("h1", { className: "font-head font-black text-7xl text-center uppercase text-bpurple-600", children: "Blog" }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-4 mt-8", children: /* @__PURE__ */ jsxs("ul", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/1/400/300",
          heading: "Top 10 First-Date Ideas to Spark a Connection",
          children: "Explore creative and romantic ideas for your next first date to leave a lasting impression."
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/2/400/300",
          heading: "How to Create a Dating Profile\n                                That Stands Out",
          children: "Tips on crafting the perfect bio and choosing the right photos for success."
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/3/400/300",
          heading: "AI in Modern Matchmaking: How\n                                Matchmatical Enhances Connections",
          children: "Discover how artificial intelligence is reshaping the dating landscape."
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/4/400/300",
          heading: "5 Green Flags to Look for in a\n                                Healthy Relationship",
          children: "Signs that you're building a strong and balanced connection."
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/5/400/300",
          heading: "Heartwarming Stories: Couples\nWho Found Love with Matchmatical",
          children: "Real-life success stories from users of the app."
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/6/400/300",
          heading: "Mastering the Art of Flirting in the\nDigital Age",
          children: "How to effectively express interest online and offline with your soulmate."
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/7/400/300",
          heading: "The Science Behind Compatibility:\nMatchmatical’s Approach to Pairing\nPeople",
          children: "An inside look at the algorithms that make the app unlike any."
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        BlogCard,
        {
          src: "https://picsum.photos/seed/8/400/300",
          heading: "Dealing with Ghosting: How to Move\nForward and Stay Confident",
          children: "Steps to overcome and learn from modern dating challenges."
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Blog as default
};
