import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { Head, Link, router } from "@inertiajs/react";
import { ray, Ray } from "node-ray/web";
import { useState, useEffect } from "react";
import { CircleIcon } from "@hugeicons/react";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
import { I as InputLabel } from "./InputLabel-N-vb9U_3.js";
import { T as TextInput } from "./TextInput-BDR5dPTB.js";
import { C as Checkbox } from "./Checkbox-B9Eitb6d.js";
import { G as GoBack } from "./GoBack-DouR9b2L.js";
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
Ray.useDefaultSettings({ host: "127.0.0.1" });
function SingleAnswer({
  auth,
  question,
  errors,
  percentage = 0
}) {
  const [selfAnswer, setSelfAnswer] = useState(null);
  const [seekAnswer, setSeekAnswer] = useState(null);
  const [isSeekingQuestion, setIsSeekingQuestion] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [isOkayWithAll, setIsOkayWithAll] = useState(false);
  const [skipSelf, setSkipSelf] = useState(question.meta.skip_self);
  const [skipSeeking, setSkipSeeking] = useState(question.meta.skip_seeking);
  const [multiplier, setMultiplier] = useState(5);
  ray(question).color("green");
  ray("Skip Self " + skipSelf, "Skip Seeking " + skipSeeking).color("orange");
  useEffect(() => {
    if (skipSelf) {
      setIsSeekingQuestion(true);
    }
    if (skipSeeking) {
      setIsSeekingQuestion(false);
    }
  }, []);
  const submit = () => {
    let data = null;
    if (Array.isArray(seekAnswer)) {
      data = {
        selfAnswer,
        seekAnswer: {
          answers: seekAnswer,
          value: 6,
          multiplier
        },
        isOkayWithAll
      };
    } else {
      data = {
        selfAnswer,
        seekAnswer: {
          ...seekAnswer,
          multiplier
        },
        isOkayWithAll
      };
    }
    console.log(seekAnswer);
    router.post(route("question-single-answer", question.id), {
      question_id: question.id,
      answer: data
    });
    setIsSeekingQuestion(false);
    setIsRequired(false);
    setIsOkayWithAll(false);
    setSeekAnswer(null);
    setSelfAnswer(null);
    setSkipSeeking(false);
    setSkipSelf(false);
  };
  const handleIsOkayWithAll = (e) => {
    if (e.target.checked) {
      setIsOkayWithAll(e.target.checked);
      setSeekAnswer(question.answers);
    } else {
      setIsOkayWithAll(e.target.checked);
      setSeekAnswer(null);
    }
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: question.question }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto my-8 px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-5xl px-4 lg:-mt-8 lg:px-0", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-black text-bpurple-500", children: [
          Boolean(question.is_mandatory) && /* @__PURE__ */ jsx("span", { children: "Required  " }),
          "Question"
        ] }),
        Boolean(question.is_mandatory) && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Please complete theses questions to view your potential matches." }),
          /* @__PURE__ */ jsxs("div", { className: "mb-8 mt-2 w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-2", children: [
              /* @__PURE__ */ jsx("h2", { children: "Completed" }),
              /* @__PURE__ */ jsxs("h3", { children: [
                percentage,
                " %"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-4 w-[100%] rounded-full border border-gray-300", children: /* @__PURE__ */ jsx(
              "div",
              {
                style: { width: `${percentage}%` },
                className: "h-full rounded-full bg-gradient-to-r from-bpurple-500 to-bpurple-600"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 flex items-center space-x-2 text-2xl", children: [
          /* @__PURE__ */ jsx("span", { className: "flex size-6 items-center justify-center rounded-full border border-gray-500 text-sm", children: question.question_number ? question.question_number : question.id }),
          /* @__PURE__ */ jsx("span", { children: question.question })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 flex items-center justify-between space-x-2 text-sm", children: !isSeekingQuestion ? "Your Answer" : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { children: "Seeking Answer" }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                name: "isRequired",
                className: "size-6 checked:bg-bpurple-500 checked:focus:bg-bpurple-500",
                checked: isRequired,
                onChange: (e) => setIsRequired(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Is Required ?" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(InputError, { message: errors.answer })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative space-y-4", children: [
          question.answers.length > 0 && question.answers.map((ans, index) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "group flex cursor-pointer items-center space-x-4",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "flex size-4 items-center justify-center hover:font-bold group-hover:text-bpurple-500", children: /* @__PURE__ */ jsx(
                    CircleIcon,
                    {
                      size: "24",
                      variant: "solid",
                      className: "hidden text-bpurple-500 group-hover:block"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      onClick: () => isSeekingQuestion ? setSeekAnswer(ans) : setSelfAnswer(ans),
                      className: "w-full rounded-full border px-4 py-2 transition-all duration-500 group-hover:bg-bpurple-500 group-hover:text-white" + (!isSeekingQuestion ? selfAnswer === ans ? " bg-bpurple-500 text-white" : "" : seekAnswer === ans || (seekAnswer == null ? void 0 : seekAnswer.length) > 0 ? " bg-bpurple-500 text-white" : ""),
                      children: ans.answer
                    }
                  )
                ]
              },
              index
            ),
            question.answers.length === 2 && index === 0 && /* @__PURE__ */ jsx(
              "div",
              {
                className: "group flex cursor-pointer items-center space-x-4",
                children: /* @__PURE__ */ jsx("div", { className: "w-full mt-4 ml-8", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-full rounded-full border px-4 py-2 transition-all duration-500 bg-bc-50 cursor-not-allowed ",
                    children: "Optional"
                  }
                ) })
              },
              index
            )
          ] })),
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 ml-2 h-[80%] w-px -translate-x-1/2 bg-gray-800" })
        ] }),
        isSeekingQuestion && /* @__PURE__ */ jsxs("div", { className: "mt-8 w-full", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "multiplier",
              value: /* @__PURE__ */ jsxs("span", { children: [
                "Multiplier:",
                /* @__PURE__ */ jsx("small", { className: "ml-2 text-sm text-gray-500", children: "Enter value between 1 to 10. Default is 5" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "multiplier",
              type: "number",
              name: "multiplier",
              max: 10,
              min: 1,
              value: multiplier,
              className: "mt-1 block w-full border-gray-100",
              isFocused: true,
              onChange: (e) => setMultiplier(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.multiplier,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "my-8 flex items-center justify-between space-x-2", children: [
          /* @__PURE__ */ jsxs("ul", { className: "group flex cursor-pointer items-center space-x-2", children: [
            /* @__PURE__ */ jsx("li", { children: "Tags:" }),
            question.tags.length > 0 && question.tags.map((tag, index) => /* @__PURE__ */ jsx(
              "li",
              {
                className: "rounded-full bg-bpurple-400 px-4 py-1 text-sm text-white",
                children: tag
              },
              index
            ))
          ] }),
          isSeekingQuestion && /* @__PURE__ */ jsx("span", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                name: "isOkayWithAll",
                className: "size-6 checked:bg-bpurple-500 checked:focus:bg-bpurple-500",
                checked: isOkayWithAll,
                onChange: (e) => handleIsOkayWithAll(e)
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Is Okay with All ?" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          !question.is_mandatory ? /* @__PURE__ */ jsx(Link, { href: route("all-questions"), children: /* @__PURE__ */ jsx("button", { className: "rounded-full border bg-white px-8 py-2", children: "Go Back" }) }) : /* @__PURE__ */ jsx("span", {}),
          !isSeekingQuestion ? !skipSeeking ? /* @__PURE__ */ jsx(
            "button",
            {
              disabled: !selfAnswer,
              onClick: () => setIsSeekingQuestion(true),
              className: "rounded-full bg-bpurple-500 px-8 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black",
              children: "Next"
            }
          ) : /* @__PURE__ */ jsx(
            "button",
            {
              disabled: !selfAnswer,
              onClick: submit,
              className: "rounded-full bg-bpurple-500 px-8 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black",
              children: "Submit"
            }
          ) : /* @__PURE__ */ jsxs("div", { className: "space-x-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "rounded-full border bg-white px-8 py-2",
                onClick: () => setIsSeekingQuestion(false),
                children: "Go Back"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                disabled: !(isOkayWithAll || seekAnswer),
                onClick: submit,
                className: "rounded-full bg-bpurple-500 px-8 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black",
                children: "Submit"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  SingleAnswer as default
};
