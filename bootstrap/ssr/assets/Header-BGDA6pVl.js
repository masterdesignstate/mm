import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { A as ApplicationLogo } from "./ApplicationLogo-BiY3mFu2.js";
import { usePage, Link } from "@inertiajs/react";
import { Menu01Icon } from "@hugeicons/react";
const pages = [
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
    title: "Terms Of Service",
    link: route("tos")
  }
];
const Header = () => {
  usePage().props.auth.user;
  return /* @__PURE__ */ jsx("nav", { className: "border-b border-gray-200 py-4 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-0 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" }) }) }),
    /* @__PURE__ */ jsx("ul", { className: "items-center space-x-4 hidden lg:flex", children: pages.map((page) => /* @__PURE__ */ jsx("li", { className: "font-bold", children: /* @__PURE__ */ jsx(Link, { href: page.link, children: page.title }) }, page.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "space-x-2 hidden lg:block", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("login"),
          className: "uppercase rounded-full px-12 py-2 bg-bpurple-50 border-bpurple-300 border",
          children: "Login"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("register"),
          className: "uppercase rounded-full px-12 py-2 bg-bpurple-600 text-white border-bpurple-normal border",
          children: "Signup"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(Menu01Icon, { size: 24 }) })
  ] }) });
};
export {
  Header as H
};
