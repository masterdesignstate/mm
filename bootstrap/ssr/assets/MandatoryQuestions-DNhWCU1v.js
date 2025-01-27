import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-B89jR5wg.js";
import { Head } from "@inertiajs/react";
import { ray, Ray } from "node-ray/web";
import { useState } from "react";
import { CircleIcon } from "@hugeicons/react";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-CXNlU36s.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
Ray.useDefaultSettings({ host: "127.0.0.1" });
function MandatoryQuestions({ auth, questions }) {
  useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  ray(currentQuestion);
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto mt-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-bpurple-500 font-black text-2xl", children: "Required Questions" }),
            /* @__PURE__ */ jsx("p", { children: "Please complete theses questions to view your potential matches." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 ", children: [
              /* @__PURE__ */ jsx("h2", { children: "Completed" }),
              /* @__PURE__ */ jsx("h3", { children: "90%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "rounded-full w-[100%] border border-gray-300 h-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-bpurple-500 to-bpurple-600 w-[20%] h-full rounded-full" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold mb-8 text-xl", children: currentQuestion.question }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center group cursor-pointer", children: [
                /* @__PURE__ */ jsx("span", { className: "group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center", children: /* @__PURE__ */ jsx(CircleIcon, { size: "24", variant: "solid", className: "text-bpurple-500 group-hover:block hidden" }) }),
                /* @__PURE__ */ jsx("div", { className: "py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500", children: currentQuestion.descriptor1 })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center group cursor-pointer", children: [
                /* @__PURE__ */ jsx("span", { className: "group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center", children: /* @__PURE__ */ jsx(CircleIcon, { size: "24", variant: "solid", className: "text-bpurple-500 group-hover:block hidden" }) }),
                /* @__PURE__ */ jsx("div", { className: "py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500", children: currentQuestion.descriptor2 })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center group cursor-pointer", children: [
                /* @__PURE__ */ jsx("span", { className: "group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center", children: /* @__PURE__ */ jsx(CircleIcon, { size: "24", variant: "solid", className: "text-bpurple-500 group-hover:block hidden" }) }),
                /* @__PURE__ */ jsx("div", { className: "py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500", children: currentQuestion.descriptor3 })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[80%] bg-gray-800 w-px ml-2 -translate-x-1/2 left-0  absolute top-0" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  MandatoryQuestions as default
};
