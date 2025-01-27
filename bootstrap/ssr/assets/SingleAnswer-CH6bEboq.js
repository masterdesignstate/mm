import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-B89jR5wg.js";
import { Head, Link, router } from "@inertiajs/react";
import { ray, Ray } from "node-ray/web";
import { useState, useEffect } from "react";
import { CircleIcon } from "@hugeicons/react";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
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
function SingleAnswer({ auth, question, errors }) {
  const [answer, setAnswer] = useState("");
  ray(question);
  useEffect(() => {
  }, []);
  const submit = () => {
    router.post(route("question-single-answer", question.id), {
      question_id: question.id,
      answer
    });
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      children: [
        /* @__PURE__ */ jsx(Head, { title: question.question }),
        /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto mt-8 px-4 lg:px-0", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-bpurple-500 font-black text-2xl", children: [
              question.is_mandatory && /* @__PURE__ */ jsx("span", { children: "Required  " }),
              "Question"
            ] }),
            question.is_mandatory && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Please complete theses questions to view your potential matches." }) }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-2xl", children: question.question }),
            /* @__PURE__ */ jsx(InputError, { message: errors.answer })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold mb-8 text-xl" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center group cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center",
                    children: /* @__PURE__ */ jsx(
                      CircleIcon,
                      {
                        size: "24",
                        variant: "solid",
                        className: "text-bpurple-500 group-hover:block hidden"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => setAnswer(question.descriptor1),
                    className: "py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500" + (answer === question.descriptor1 ? " bg-bpurple-500 text-white" : ""),
                    children: question.descriptor1
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex space-x-4 items-center group cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center",
                        children: /* @__PURE__ */ jsx(
                          CircleIcon,
                          {
                            size: "24",
                            variant: "solid",
                            className: "text-bpurple-500 group-hover:block hidden"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        onClick: () => setAnswer(question.descriptor2),
                        className: "py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500" + (answer === question.descriptor2 ? " bg-bpurple-500 text-white" : ""),
                        children: question.descriptor2 ? question.descriptor2 : ""
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center group cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "group-hover:text-bpurple-500 hover:font-bold size-4 flex justify-center items-center",
                    children: /* @__PURE__ */ jsx(
                      CircleIcon,
                      {
                        size: "24",
                        variant: "solid",
                        className: "text-bpurple-500 group-hover:block hidden"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => setAnswer(question.descriptor3),
                    className: "py-2 px-4 rounded-full w-full border group-hover:bg-bpurple-500 group-hover:text-white transition-all duration-500" + (answer === question.descriptor3 ? " bg-bpurple-500 text-white" : ""),
                    children: question.descriptor3
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-[80%] bg-gray-800 w-px ml-2 -translate-x-1/2 left-0  absolute top-0" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxs("ul", { className: "flex space-x-2 items-center group cursor-pointer", children: [
              /* @__PURE__ */ jsx("li", { children: "Tags:" }),
              question.tags.length > 0 && question.tags.map((tag, index) => /* @__PURE__ */ jsx(
                "li",
                {
                  className: "rounded-full px-4 py-1 bg-bpurple-400 text-white text-sm",
                  children: tag
                },
                index
              ))
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              !question.is_mandatory ? /* @__PURE__ */ jsx(Link, { href: route("all-questions"), children: /* @__PURE__ */ jsx("button", { className: "bg-white border  px-8 py-2 rounded-full", children: "Go Back" }) }) : /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("button", { onClick: submit, className: "bg-bpurple-500 text-white px-8 py-2 rounded-full", children: "Submit" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  SingleAnswer as default
};
