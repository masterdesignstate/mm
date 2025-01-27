import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { usePage, Link } from "@inertiajs/react";
import { A as ApplicationLogo } from "./ApplicationLogo-BiY3mFu2.js";
import { InstagramIcon, Facebook01Icon, YoutubeIcon } from "@hugeicons/react";
const footMenu = [
  {
    title: "Home",
    link: route("home")
  },
  {
    title: "Blog",
    link: route("blog")
  },
  {
    title: "About",
    link: route("about")
  },
  {
    title: "TOS",
    link: route("tos")
  }
];
const socialMenu = [
  {
    title: "Instagram",
    link: "#"
  },
  {
    title: "Youtube",
    link: "#"
  },
  {
    title: "Twitter",
    link: "#"
  }
];
const Footer = () => {
  const user = usePage().props.auth.user;
  if (user)
    return /* @__PURE__ */ jsxs("footer", { className: " text-center mt-8", children: [
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("div", { className: "text-center py-2 px-4 text-sm", children: "© Copyright 2025. All Rights Reserved." })
    ] });
  else
    return /* @__PURE__ */ jsxs("footer", { children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "hidden mt-8 lg:grid lg:grid-cols-2 flex-col lg:flex-row space-y-4 lg:space-y-0  justify-between max-w-7xl mx-auto py-4",
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-56" }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col justify-center items-center space-y-2", children: footMenu.map((item) => /* @__PURE__ */ jsx("li", { className: "font-bold", children: /* @__PURE__ */ jsx(Link, { href: item.link, children: item.title }) }, item.title)) }) }),
              /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx("ul", { className: "lg:flex flex-col items-center space-y-2 text-bpurple-500", children: socialMenu.map((item) => /* @__PURE__ */ jsx("li", { className: "font-bold", children: /* @__PURE__ */ jsx(Link, { href: item.link, children: item.title }) }, item.title)) }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex justify-between mt-8 max-w-[70%] mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center space-y-2", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-56" }) }),
          /* @__PURE__ */ jsxs("ul", { className: "flex lg:hidden space-x-4 mt-16 text-bpurple-500", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx(InstagramIcon, { size: "24", variant: "stroke" }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx(Facebook01Icon, { size: "24", variant: "solid" }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx(YoutubeIcon, { size: "24", variant: "solid" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col justify-center items-center space-y-2", children: footMenu.map((item) => /* @__PURE__ */ jsx("li", { className: "font-bold", children: /* @__PURE__ */ jsx(Link, { href: item.link, children: item.title }) }, item.title)) }) })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "border-black mt-4" }),
      /* @__PURE__ */ jsx("div", { className: "text-center py-2 px-4 text-sm", children: "© Copyright 2025. All Rights Reserved." })
    ] });
};
export {
  Footer as F
};
