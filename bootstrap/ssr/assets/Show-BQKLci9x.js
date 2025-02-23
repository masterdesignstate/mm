import { jsxs, jsx } from "react/jsx-runtime";
import React__default from "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ray } from "node-ray/web";
import { C as Checkbox } from "./Checkbox-B9Eitb6d.js";
import { B as Button } from "./Button-BR5pHvwW.js";
import { Link } from "@inertiajs/react";
import { G as GoBack } from "./GoBack-DouR9b2L.js";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@hugeicons/react";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "@radix-ui/react-slot";
const Show = ({ question }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  ray(question).color("orange");
  const [answers, setAnswers] = React__default.useState(question.answers);
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "my-8 container mx-auto  px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "lg:-mt-8 mx-auto max-w-5xl px-4 lg:px-0", children: [
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-2xl font-bold text-bpurple-500", children: "Question" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-2 flex items-center space-x-2 text-2xl", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "flex size-6 items-center justify-center rounded-full border border-gray-500 text-sm",
            children: question.question_number ? question.question_number : question.id
          }
        ),
        /* @__PURE__ */ jsx("span", { children: question.question })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Your Answer" }),
        /* @__PURE__ */ jsxs(
          SliderPrimitive.Root,
          {
            className: "relative my-4 flex w-full select-none items-center",
            value: [(_c = (_b = (_a = question == null ? void 0 : question.answer) == null ? void 0 : _a.answer) == null ? void 0 : _b.selfAnswer) == null ? void 0 : _c.value],
            min: 1,
            max: 5,
            step: 1,
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1", children: question.answers.map((stop) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "z-50 h-3 w-1 rounded bg-gray-400"
                },
                "self" + stop
              )) }),
              /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative -z-20 h-1 w-full rounded bg-gray-200", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full" }) }),
              /* @__PURE__ */ jsx(
                SliderPrimitive.Thumb,
                {
                  className: "absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none",
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      className: "size-6",
                      viewBox: "0 0 17 17",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsx(
                          "rect",
                          {
                            x: "1",
                            y: "1",
                            width: "14.5584",
                            height: "15",
                            rx: "7.27922",
                            fill: "#F3F0FF"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "rect",
                          {
                            x: "1",
                            y: "1",
                            width: "14.5584",
                            height: "15",
                            rx: "7.27922",
                            stroke: "#692EB7",
                            strokeWidth: "2"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "circle",
                          {
                            cx: "8.2793",
                            cy: "8.5",
                            r: "4.5",
                            fill: "#682EB8"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "flex w-full justify-between", children: answers.map((answer) => /* @__PURE__ */ jsx("li", { children: answer.answer }, answer.answer)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "Seeking Answer" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { className: "space-x-2", htmlFor: "", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                disabled: true,
                checked: question.answer.answer.isOkayWithAll
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Okay With All" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(
          SliderPrimitive.Root,
          {
            className: "relative my-4 flex w-full select-none items-center",
            value: [(_f = (_e = (_d = question == null ? void 0 : question.answer) == null ? void 0 : _d.answer) == null ? void 0 : _e.seekAnswer) == null ? void 0 : _f.value],
            min: 1,
            max: 5,
            step: 1,
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1", children: question.answers.map((stop, index) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "z-50 h-3 w-1 rounded bg-gray-400"
                },
                "seek" + index
              )) }),
              /* @__PURE__ */ jsx(
                SliderPrimitive.Track,
                {
                  className: "relative -z-20 h-1 w-full rounded " + (((_h = (_g = question.answer) == null ? void 0 : _g.answer) == null ? void 0 : _h.isOkayWithAll) ? "bg-gray-500" : "bg-gray-200"),
                  children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full" })
                }
              ),
              !question.answer.answer.isOkayWithAll && /* @__PURE__ */ jsx(
                SliderPrimitive.Thumb,
                {
                  className: "absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none",
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      className: "size-6",
                      viewBox: "0 0 17 17",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsx(
                          "rect",
                          {
                            x: "1",
                            y: "1",
                            width: "14.5584",
                            height: "15",
                            rx: "7.27922",
                            fill: "#F3F0FF"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "rect",
                          {
                            x: "1",
                            y: "1",
                            width: "14.5584",
                            height: "15",
                            rx: "7.27922",
                            stroke: "#692EB7",
                            strokeWidth: "2"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "circle",
                          {
                            cx: "8.2793",
                            cy: "8.5",
                            r: "4.5",
                            fill: "#682EB8"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "flex w-full justify-between", children: answers.map((answer) => /* @__PURE__ */ jsx("li", { children: answer.answer }, answer.answer)) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { children: [
        "Multiplier :",
        " ",
        question.answer.answer.seekAnswer.multiplier
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "my-8 flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Tags:" }),
        /* @__PURE__ */ jsx("ul", { className: "flex items-center space-x-2", children: question.tags.map((tag, index) => /* @__PURE__ */ jsx(
          "li",
          {
            className: "rounded-full bg-bpurple-600 px-4 py-2 text-white",
            children: tag
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-between space-x-4", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("question-single-answer", question.id),
            children: /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                className: "px-12",
                variant: "secondary",
                children: "Edit"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "px-12", children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("answers.destroy", question.answer.id),
            method: "delete",
            children: "Clear"
          }
        ) }) })
      ] }) })
    ] })
  ] });
};
export {
  Show as default
};
