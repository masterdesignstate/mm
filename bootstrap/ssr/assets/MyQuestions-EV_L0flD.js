import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c as cn, A as AuthenticatedLayout } from "./AuthenticatedLayout-B89jR5wg.js";
import { useForm, Head } from "@inertiajs/react";
import * as React from "react";
import { useState } from "react";
import { AddCircleIcon, CancelCircleIcon } from "@hugeicons/react";
import { I as InputLabel } from "./InputLabel-DDs2XNYP.js";
import { T as TextInput } from "./TextInput-DHOftoRI.js";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
import { T as TextArea } from "./TextArea-DD9TRCA-.js";
import { ray, Ray } from "node-ray/web";
import "clsx";
import { P as PageHead } from "./PageHead-CD_eXurH.js";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-CXNlU36s.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "tailwind-merge";
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
  const { data, setData, post, processing, errors, reset } = useForm({
    question: "",
    descriptor1: "",
    descriptor2: "",
    descriptor3: "",
    tags: []
  });
  const [createQuestion, setCreateQuestion] = useState(false);
  const [myQuestions, setMyQuestions] = useState(questions);
  const [lockDescriptor, setLockDescriptor] = useState(false);
  useState([]);
  ray(questions);
  const submit = (e) => {
    e.preventDefault();
    post(route("my-questions-create"), {
      onFinish: () => {
        reset("question", "descriptor1", "descriptor2", "descriptor3");
        setCreateQuestion(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      children: [
        /* @__PURE__ */ jsx(Head, { title: "My Questions" }),
        /* @__PURE__ */ jsx(
          PageHead,
          {
            heading: "My Questions",
            description: "How does it work? Create personalized questions to help your matches better connect with you. Add a question, choose tags, set answer options, and prioritize its importance. Your matches will answer these questions, making connections more meaningful and tailored to your preferences. "
          }
        ),
        !createQuestion && /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto my-16 px-4 lg:px-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center max-w-5xl mx-auto justify-between", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Questions" }),
            /* @__PURE__ */ jsx("button", { className: "text-gray-500", onClick: () => setCreateQuestion(true), children: /* @__PURE__ */ jsx(
              AddCircleIcon,
              {
                className: "text-bpurple-500",
                size: 36,
                variant: "solid"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(Table, { className: "max-w-5xl mx-auto my-4", children: [
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
                /* @__PURE__ */ jsx(TableCell, { className: "", children: /* @__PURE__ */ jsx("ul", { className: "flex space-x-2 items-center justify-center", children: question.tags.map((tag, index2) => /* @__PURE__ */ jsx(
                  "li",
                  {
                    className: "bg-bpurple-100 px-2 py-1 rounded-full",
                    children: tag
                  },
                  index2
                )) }) }),
                /* @__PURE__ */ jsx(TableCell, { className: "", children: question.is_approved === null && "Not Yet" }),
                /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: question.human_date })
              ] }, index)),
              myQuestions.length === 0 && /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, className: "py-4 text-xl font-bold text-center text-gray-500", children: "You have created no questions so far." }) })
            ] })
          ] })
        ] }),
        createQuestion && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto my-16 px-4 lg:px-0", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "ml-auto",
              onClick: () => setCreateQuestion(false),
              children: /* @__PURE__ */ jsx(CancelCircleIcon, { className: "text-red-700", variant: "solid", size: 36 })
            }
          ) }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "question", value: "Question" }),
              /* @__PURE__ */ jsx(
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
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.question, className: "mt-2" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                /* @__PURE__ */ jsx(InputLabel, { htmlFor: "descriptor1", value: "Descriptor 1" }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "descriptor1",
                    type: "text",
                    name: "descriptor1",
                    value: data.descriptor1,
                    className: "mt-1 block w-full",
                    autoComplete: "descriptor1",
                    isFocused: true,
                    onChange: (e) => setData("descriptor1", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.descriptor1, className: "mt-2" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                /* @__PURE__ */ jsx(InputLabel, { htmlFor: "descriptor2", value: "Descriptor 2" }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "descriptor2",
                    type: "text",
                    disabled: lockDescriptor,
                    name: "descriptor2",
                    placeholder: "Optional",
                    value: data.descriptor2,
                    className: "mt-1 block w-full",
                    autoComplete: "descriptor2",
                    isFocused: true,
                    onChange: (e) => setData("descriptor2", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.descriptor2, className: "mt-2" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                /* @__PURE__ */ jsx(InputLabel, { htmlFor: "descriptor3", value: "Descriptor 3" }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "descriptor3",
                    type: "text",
                    name: "descriptor3",
                    value: data.descriptor3,
                    className: "mt-1 block w-full",
                    autoComplete: "descriptor3",
                    isFocused: true,
                    onChange: (e) => setData("descriptor3", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.descriptor3, className: "mt-2" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(InputError, { message: errors.descriptor3, className: "mt-2" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("button", { className: "bg-black text-white px-8 py-4 rounded-full", type: "button", children: "Add Tag" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "bg-bpurple-500 text-white px-8 py-4 rounded-full",
                  disabled: processing,
                  children: "Submit"
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  MyQuestions as default
};
