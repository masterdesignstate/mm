import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { H as Header } from "./Header-BGDA6pVl.js";
import { F as Footer } from "./Footer-CXNlU36s.js";
import "./Dropdown-BfUgSuEe.js";
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption } from "@headlessui/react";
import { useState, useEffect } from "react";
import { ArrowDown01Icon } from "@hugeicons/react";
import "./ApplicationLogo-BiY3mFu2.js";
function Questions({ q_tags, questions }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [query, setQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  useEffect(() => {
    if (selectedTag != null) {
      filterQuestions();
    }
  }, [selectedTag]);
  function filterQuestions() {
    const qs = questions.filter((question) => {
      return question.tags.includes(selectedTag);
    });
    console.log(qs);
    setFilteredQuestions(qs);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Terms of Service" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl px-4 lg:px-0 mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-head font-black text-7xl text-center uppercase text-bpurple-600 pt-16 max-w-4xl mx-auto", children: "Explore All Questions That Define Your Match" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-center text-xl mt-4", children: "Discover how compatible you are with others by answering these insightful questions. Your answers help us connect you with people who truly align with your values, preferences, and personality." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl px-4 mx-auto lg:px-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-16 grid grid-cols-5 gap-4 lg:grid-cols-5 items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "col-span-2", children: "Questions" }),
        /* @__PURE__ */ jsx("span", { children: "Sort by Q #" }),
        /* @__PURE__ */ jsx("span", { children: "Sort by # of Answers" }),
        /* @__PURE__ */ jsx("span", { className: "relative", children: /* @__PURE__ */ jsx(
          Combobox,
          {
            as: "div",
            value: selectedTag,
            onChange: setSelectedTag,
            onClose: () => setQuery(""),
            children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                ComboboxInput,
                {
                  className: "rounded-full w-full",
                  displayValue: (tag) => tag,
                  placeholder: "Search Tags",
                  onChange: (event) => setQuery(event.target.value)
                }
              ),
              /* @__PURE__ */ jsx(ComboboxButton, { className: "group absolute inset-y-0 right-0 px-2.5", children: /* @__PURE__ */ jsx(ArrowDown01Icon, { className: "size-4 fill-white/60 group-data-[hover]:fill-white" }) }),
              /* @__PURE__ */ jsx(ComboboxOptions, { anchor: "bottom", className: "border bg-white w-56 rounded-lg border-gray-600", children: q_tags.map((tag, index) => /* @__PURE__ */ jsx(
                ComboboxOption,
                {
                  value: tag,
                  className: " data-[focus]:bg-bpurple-500 data-[focus]:text-white w-full px-4 py-1",
                  children: tag
                },
                index
              )) })
            ] })
          }
        ) })
      ] }),
      filteredQuestions.length > 0 && filteredQuestions.map((question, index) => /* @__PURE__ */ jsxs("div", { className: "lg:grid grid-cols-4 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative border rounded-full py-2 px-4 border-gray-700 col-span-3 space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            index + 1,
            ". ",
            question.question,
            " ",
            question.is_mandatory ? "*" : ""
          ] }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "bg-bpurple-100 border border-gray-700 rounded-full px-2 py-1 absolute right-0 size-8 flex items-center justify-center  top-0 -translate-y-1/2 text-xs",
              children: question.answers.length
            }
          )
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 lg:mt-0 grid grid-cols-3 space-x-2", children: question.tags.map((tag, index2) => /* @__PURE__ */ jsx("li", { className: "rounded-full px-4 py-2 border border-gray-700 text-center", children: tag }, index2)) })
      ] }, index)),
      filteredQuestions.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center font-bold text-2xl py-4", children: "No Questions found for this Tag" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-bpurple-500 px-4 py-2 rounded-full mx-auto text-white",
            onClick: () => {
              setQuery("");
              setSelectedTag(null);
              setFilteredQuestions(questions);
            },
            children: "Show All Questions"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Questions as default
};
