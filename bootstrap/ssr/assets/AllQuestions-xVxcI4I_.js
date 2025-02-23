import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { Head, Link } from "@inertiajs/react";
import { CheckmarkCircle01Icon, Add01Icon } from "@hugeicons/react";
import { G as GoBack } from "./GoBack-DouR9b2L.js";
import { ray } from "node-ray/web";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
const AllQuestions = ({ questions, total_answers }) => {
  ray(questions);
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "All Questions" }),
    /* @__PURE__ */ jsx("div", { className: "my-8 container mx-auto  px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "lg:-mt-8 mx-auto max-w-5xl px-4 lg:px-0", children: [
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-2xl font-bold text-bpurple-500", children: "Questions" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Total Questions Answered: ",
        total_answers.length
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: questions.length > 0 && questions.map((question, index) => /* @__PURE__ */ jsx(
        "li",
        {
          className: "flex cursor-pointer items-center justify-between rounded-full border px-4 py-3 text-bpurple-600 transition-all duration-300 hover:bg-bpurple-500 hover:text-white",
          children: question.answer != null ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                className: "w-full text-xl",
                href: route(
                  "questions.show",
                  question.id
                ),
                children: [
                  index + 1,
                  ". ",
                  question.question,
                  Boolean(question.is_mandatory) && /* @__PURE__ */ jsx("span", { className: "font-bold ml-2", children: "*" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              CheckmarkCircle01Icon,
              {
                size: 24,
                className: "text-bc-600",
                variant: "solid"
              }
            )
          ] }) : /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(
            Link,
            {
              className: "w-full inline-block text-xl",
              href: route(
                "question-single-answer",
                question.id
              ),
              children: [
                index + 1,
                ". ",
                question.question,
                Boolean(question.is_mandatory) && /* @__PURE__ */ jsx("span", { className: "font-bold ml-2", children: "*" })
              ]
            }
          ) })
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("my-questions"), children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex cursor-pointer items-center space-x-2 rounded-full bg-bc-50 px-8 py-2 text-lg text-bc-600",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Questions" }),
              /* @__PURE__ */ jsx(Add01Icon, { size: 20, variant: "solid" })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("matches"), children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "flex cursor-pointer items-center space-x-2 rounded-full bg-bpurple-500 px-8 py-2 text-lg text-white",
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
