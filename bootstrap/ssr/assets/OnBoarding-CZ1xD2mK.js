import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { useForm, Head } from "@inertiajs/react";
import { I as InputLabel } from "./InputLabel-N-vb9U_3.js";
import { T as TextInput } from "./TextInput-BDR5dPTB.js";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
import { T as TextArea } from "./TextArea-DGWF_tBU.js";
import { useEffect, useState } from "react";
import { Ray } from "node-ray/web";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ImageUploadIcon, Image01Icon, Cancel01Icon } from "@hugeicons/react";
import { B as Button } from "./Button-BR5pHvwW.js";
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
import "@radix-ui/react-slot";
Ray.useDefaultSettings();
function OnBoarding({ auth, profile }) {
  var _a;
  const { data, setData, post, progress, processing, errors, reset } = useForm({
    uname: profile.uname ?? "",
    tag_line: profile.tag_line ?? "",
    date_of_birth: profile.date_of_birth ?? "1993-08-01",
    zip: profile.zip ?? "",
    bio: profile.bio ?? "",
    dp: null
  });
  useEffect(() => {
    console.log(data.dp);
  }, [data.dp]);
  useState([]);
  const [dpUrl, setDpUrl] = useState("");
  const [uploadDp, setUploadDp] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    post(route("on-boarding"), {});
  };
  const handleDpChange = (e) => {
    setData("dp", e.target.files[0]);
    setDpUrl(URL.createObjectURL(e.target.files[0]));
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx("div", { className: "my-8 container mx-auto  px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto my-8 flex max-w-4xl items-center justify-center", children: /* @__PURE__ */ jsx("form", { onSubmit: submit, className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid w-full gap-8 px-4 lg:grid-cols-2 lg:px-0 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-bpurple-500", children: auth.user.name }),
        /* @__PURE__ */ jsx("div", { className: "relative w-full rounded-lg", children: !uploadDp ? /* @__PURE__ */ jsxs(AspectRatio, { ratio: 1, children: [
          /* @__PURE__ */ jsx("div", { className: "flex w-full items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: profile.dp,
              alt: "Image",
              className: "rounded-md object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-0 top-0 flex size-12 items-center justify-center rounded-full bg-bpurple-500 text-white",
              onClick: () => setUploadDp(true),
              children: /* @__PURE__ */ jsx(ImageUploadIcon, { size: 24 })
            }
          )
        ] }) : /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-span-full", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "cover-photo",
                className: "block text-sm/6 font-medium text-gray-900",
                children: "Display Picture"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              ((_a = data == null ? void 0 : data.dp) == null ? void 0 : _a.name) ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: dpUrl,
                  className: "mx-auto size-48 text-gray-300"
                }
              ) : /* @__PURE__ */ jsx(
                Image01Icon,
                {
                  "aria-hidden": "true",
                  className: "mx-auto size-12 text-gray-300"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex text-sm/6 text-gray-600", children: [
                /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: "file-upload",
                    className: "focus-within:outline-hidden relative cursor-pointer rounded-md bg-white font-semibold text-bpurple-600 focus-within:ring-2 focus-within:ring-bpurple-600 focus-within:ring-offset-2 hover:text-bpurple-500",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: "Upload a file" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          id: "file-upload",
                          name: "file-upload",
                          className: "sr-only",
                          type: "file",
                          onChange: (e) => handleDpChange(
                            e
                          )
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "pl-1", children: "or drag and drop" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs/5 text-gray-600", children: "PNG, JPG, GIF up to 10MB" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-0 top-0 mt-2 flex size-12 items-center justify-center rounded-full bg-red-800 text-white",
              onClick: () => setUploadDp(false),
              children: /* @__PURE__ */ jsx(Cancel01Icon, { size: 24 })
            }
          ),
          progress && /* @__PURE__ */ jsxs(
            "progress",
            {
              className: "rounded-full bg-bpurple-500",
              value: progress.percentage,
              max: "100",
              children: [
                progress.percentage,
                "%"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "block w-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "uname",
              value: "Username"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "uname",
              type: "text",
              name: "uname",
              value: data.uname,
              className: "mt-1 px-6 block w-full",
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => setData("uname", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.uname,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "motto", value: "Motto" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "motto",
              type: "text",
              name: "tag_line",
              value: data.tag_line,
              className: "mt-1 block w-full",
              autoComplete: "tag_line",
              isFocused: true,
              onChange: (e) => setData("tag_line", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.tag_line,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "age", value: "Date of Birth" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "age",
              type: "date",
              min: "0",
              name: "age",
              value: data.date_of_birth,
              className: "mt-1 block w-full",
              autoComplete: "age",
              isFocused: true,
              onChange: (e) => setData("date_of_birth", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.date_of_birth,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "zip", value: "Zip" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "zip",
              type: "number",
              min: "0",
              name: "zip",
              value: data.zip,
              className: "mt-1 block w-full",
              autoComplete: "zip",
              isFocused: true,
              onChange: (e) => setData("zip", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.zip,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "bio", value: "Bio" }),
          /* @__PURE__ */ jsx(
            TextArea,
            {
              id: "bio",
              name: "bio",
              cols: 14,
              className: "mt-1 rounded-3xl px-6 min-h-24 py-4 text-sm text-bc-200 block w-full resize-none",
              autoComplete: "bio",
              isFocused: true,
              value: data.bio,
              onChange: (e) => setData("bio", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.bio,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "!mt-6 flex items-center justify-start", children: /* @__PURE__ */ jsx(
          Button,
          {
            className: "px-12 text-xl bg-bpurple-500 py-6 text-white",
            disabled: processing,
            children: "Submit"
          }
        ) })
      ] }) })
    ] }) }) })
  ] });
}
export {
  OnBoarding as default
};
