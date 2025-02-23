import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { c as cn, A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { useForm, Head } from "@inertiajs/react";
import * as React from "react";
import { useState } from "react";
import { AddCircleIcon, CancelCircleIcon } from "@hugeicons/react";
import { I as InputLabel } from "./InputLabel-N-vb9U_3.js";
import { T as TextInput } from "./TextInput-BDR5dPTB.js";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
import { T as TextArea } from "./TextArea-DGWF_tBU.js";
import { Ray } from "node-ray/web";
import { C as Checkbox } from "./Checkbox-B9Eitb6d.js";
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
const PageHead = ({ heading, description, children }) => {
  return /* @__PURE__ */ jsxs("section", { className: "max-w-7xl px-4 lg:px-0 mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-head font-black text-7xl text-center uppercase text-bpurple-600 pt-16", children: heading }),
    /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-center text-xl mt-4", children: description }),
    children
  ] });
};
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0 dark:text-neutral-400",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
Ray.useDefaultSettings();
function MyQuestions({ questions, tags }) {
  const { data, setData, post, processing, errors, setError, reset } = useForm({
    question: "",
    answers: [{ value: 1, answer: "" }, { value: 5, answer: "" }],
    q_tags: []
  });
  const [createQuestion, setCreateQuestion] = useState(false);
  const [myQuestions, setMyQuestions] = useState(questions);
  useState(false);
  const [currentTags, setCurrentTags] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    post(route("my-questions-create"), {
      onSuccess: () => {
        reset("question", "answers", "q_tags");
        setCreateQuestion(false);
      }
    });
  };
  const handleAnswerChange = (e, index) => {
    let newAnswers = [...data.answers];
    newAnswers[e.target.dataset.index] = {
      answer: e.target.value,
      value: e.target.dataset.value
    };
    setData("answers", newAnswers);
    setError("question", "");
  };
  const handleNew = () => {
    if (data.answers.length >= 3 || data.answers.length <= 0) {
      setError(
        "question",
        "Limit reached. Max 3 Items Allowed & Min 2 items required"
      );
    } else {
      let ans = [...data.answers];
      ans.push({
        value: null,
        answer: null
      });
      setData("answers", ans);
      setError("question", "");
    }
  };
  const handleRemove = (e, answer) => {
    const answers = [...data.answers];
    const remaining = answers.filter((ans) => ans !== answer);
    setData("answers", remaining);
  };
  const handleChecked = (e) => {
    let tg = e.target.value;
    if (e.target.checked) {
      setCurrentTags([...currentTags, tg]);
      setData("q_tags", [...currentTags]);
    } else {
      setCurrentTags(
        currentTags.filter((item) => {
          return item !== tg;
        })
      );
      setData("q_tags", [...currentTags]);
    }
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "My Questions" }),
    /* @__PURE__ */ jsx(
      PageHead,
      {
        heading: "My Questions",
        description: "How does it work? Create personalized questions to help your matches better connect with you. Add a question, choose tags, set answer options, and prioritize its importance. Your matches will answer these questions, making connections more meaningful and tailored to your preferences. "
      }
    ),
    !createQuestion && /* @__PURE__ */ jsxs("section", { className: "mx-auto my-16 max-w-7xl px-4 lg:px-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-5xl items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Questions" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-gray-500",
            onClick: () => setCreateQuestion(true),
            children: /* @__PURE__ */ jsx(
              AddCircleIcon,
              {
                className: "text-bpurple-500",
                size: 36,
                variant: "solid"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Table, { className: "mx-auto my-4 max-w-5xl", children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "Q#" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Questions Statement" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Tags" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Is Approved ?" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Date of Creation" })
        ] }) }),
        /* @__PURE__ */ jsxs(TableBody, { children: [
          myQuestions.map((question, index) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "", children: index + 1 }),
            /* @__PURE__ */ jsx(TableCell, { className: "", children: question.question }),
            /* @__PURE__ */ jsx(TableCell, { className: "", children: /* @__PURE__ */ jsx("ul", { className: "flex items-center justify-center space-x-2", children: question.tags.map((tag, index2) => /* @__PURE__ */ jsx(
              "li",
              {
                className: "rounded-full bg-bpurple-100 px-2 py-1",
                children: tag
              },
              index2
            )) }) }),
            /* @__PURE__ */ jsx(TableCell, { className: "", children: question.is_approved === null && "Not Yet" }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: question.human_date })
          ] }, index)),
          myQuestions.length === 0 && /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
            TableCell,
            {
              colSpan: 5,
              className: "py-4 text-center text-xl font-bold text-gray-500",
              children: "You have created no questions so far."
            }
          ) })
        ] })
      ] })
    ] }),
    createQuestion && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: "mx-auto my-16 max-w-5xl px-4 lg:px-0", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "ml-auto",
          onClick: () => setCreateQuestion(false),
          children: /* @__PURE__ */ jsx(
            CancelCircleIcon,
            {
              className: "text-red-700",
              variant: "solid",
              size: 36
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "question",
              value: "Question"
            }
          ),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            TextArea,
            {
              id: "question",
              name: "question",
              className: "mt-1 block w-full",
              autoComplete: "question",
              cols: "20",
              value: data.question,
              onChange: (e) => setData("question", e.target.value)
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "mt-4 flex space-x-2",
              onClick: () => handleNew(),
              children: [
                /* @__PURE__ */ jsx(
                  AddCircleIcon,
                  {
                    variant: "solid",
                    size: 24
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: "Add Answer" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.question,
              className: "mt-2"
            }
          )
        ] }),
        data.answers.map((answer, index) => /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "descriptor" + index,
              value: "Descriptor " + (index + 1)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "answer" + index,
                type: "text",
                name: "descriptor" + index,
                value: answer.answer,
                "data-value": answer.value,
                "data-old": answer.answer,
                "data-index": index,
                className: "mt-1 block w-full",
                autoComplete: "descriptor1",
                isFocused: true,
                onChange: (e) => {
                  handleAnswerChange(e);
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "flex w-24 justify-center text-center text-red-700",
                "data-awr": "12",
                onClick: (e, index2) => {
                  handleRemove(e, answer);
                },
                children: /* @__PURE__ */ jsx(
                  CancelCircleIcon,
                  {
                    size: 24,
                    variant: "solid"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.answers,
              className: "mt-2"
            }
          )
        ] }) }, index)),
        /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx("ul", { className: "flex items-center justify-start space-x-4", children: tags.map((tag, index) => /* @__PURE__ */ jsx(
            "li",
            {
              className: "flex items-center",
              children: /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-1", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    name: "tags[]",
                    id: `tag${tag}`,
                    value: tag,
                    onChange: (e) => handleChecked(e)
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: tag })
              ] })
            },
            index
          )) }),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.q_tags,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex items-center justify-between", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "rounded-full bg-bpurple-500 px-8 py-4 text-white",
            disabled: processing,
            children: "Submit"
          }
        ) })
      ] })
    ] }) })
  ] });
}
export {
  MyQuestions as default
};
