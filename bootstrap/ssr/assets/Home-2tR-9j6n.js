import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#100336] text-white w-screen h-screen flex items-center justify-center", children: [
      "Coming Soon",
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Login" }) })
    ] })
  ] });
}
export {
  Home as default
};
