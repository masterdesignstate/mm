import { jsxs, jsx } from "react/jsx-runtime";
import { A as ApplicationLogo } from "./ApplicationLogo-BiY3mFu2.js";
import { Link } from "@inertiajs/react";
import { g as grid } from "./Grid-pbLu9vEv.js";
const background = "/build/assets/white-background-uc1-yU4R.png";
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen flex-col items-center bg-white pt-6 justify-between  ", style: { backgroundImage: `url(${grid})` }, children: [
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-72 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "", children }),
    /* @__PURE__ */ jsx("div", { className: "bg-repeat-x w-full h-52", style: { backgroundImage: `url(${background})` } })
  ] });
}
export {
  GuestLayout as G
};
