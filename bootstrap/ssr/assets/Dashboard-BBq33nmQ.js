import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { Head } from "@inertiajs/react";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@hugeicons/react";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
function Dashboard() {
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
