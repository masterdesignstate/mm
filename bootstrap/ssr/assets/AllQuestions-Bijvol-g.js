import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-B89jR5wg.js";
import { Head, Link } from "@inertiajs/react";
import { CheckmarkCircle01Icon, Add01Icon } from "@hugeicons/react";
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
const AllQuestions = ({ questions, total_answers }) => {
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "All Questions" }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto px-4 lg:px-0 ", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl mt-8 font-bold text-bpurple-500", children: "Questions" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Total Questions Answered: ",
        total_answers.length
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-4 mt-4", children: questions.length > 0 && questions.map((question, index) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: "rounded-full border px-4 py-2 hover:bg-bpurple-500\n                        text-bpurple-600 flex items-center justify-between\n                        hover:text-white duration-300 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsxs(Link, { className: "w-full", href: route("question-single-answer", question.id), children: [
              index + 1,
              ". ",
              question.question
            ] }),
            question.answer != null && /* @__PURE__ */ jsx(CheckmarkCircle01Icon, { size: 24, variant: "solid" })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-8", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("my-questions"), children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "bg-bpurple-300 text-white cursor-pointer px-8 py-2 rounded-full flex items-center space-x-2 text-lg",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Questions" }),
              /* @__PURE__ */ jsx(Add01Icon, { size: 20, variant: "solid" })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("potential-matches"), children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-bpurple-500 text-white cursor-pointer px-8 py-2 rounded-full flex items-center space-x-2 text-lg",
            children: /* @__PURE__ */ jsx("span", { children: "Matches" })
          }
        ) }) })
      ] })
    ] })
  ] });
};
export {
  AllQuestions as default
};
