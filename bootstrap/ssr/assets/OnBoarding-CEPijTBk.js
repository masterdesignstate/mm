import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-B89jR5wg.js";
import { useForm, Head } from "@inertiajs/react";
import { I as InputLabel } from "./InputLabel-DDs2XNYP.js";
import { T as TextInput } from "./TextInput-DHOftoRI.js";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
import { T as TextArea } from "./TextArea-DD9TRCA-.js";
import { FilePond, registerPlugin } from "react-filepond";
import { useState } from "react";
/* empty css                                       */
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Ray } from "node-ray/web";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-CXNlU36s.js";
import "@hugeicons/react";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
Ray.useDefaultSettings();
function OnBoarding({ auth, profile }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    uname: profile.uname ?? "",
    tag_line: profile.tag_line ?? "",
    age: profile.age ?? "",
    zip: profile.zip ?? "",
    bio: profile.bio ?? ""
  });
  const [dp, setDp] = useState("");
  const [pics, setPics] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    post(route("on-boarding"), {});
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("section", { className: "flex items-center justify-center  max-w-4xl mx-auto my-36", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 w-full px-4 lg:px-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center space-y-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-bpurple-500", children: auth.user.name }),
            /* @__PURE__ */ jsx("div", { className: "w-full  rounded-lg", children: /* @__PURE__ */ jsx(
              FilePond,
              {
                className: "h-96",
                files: dp,
                onupdatefiles: setDp,
                allowMultiple: false,
                server: "/api",
                name: "dp",
                labelIdle: 'Drag & Drop your Profile Pic or <span class="filepond--label-action">Browse</span>'
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "block w-full ", children: /* @__PURE__ */ jsx(
              FilePond,
              {
                files: pics,
                onupdatefiles: setPics,
                allowMultiple: true,
                maxFiles: 5,
                server: "/api",
                name: "dp",
                labelIdle: 'Drag & Drop your Profile Pic or <span class="filepond--label-action">Browse</span>'
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "uname", value: "Username" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "uname",
                  type: "text",
                  name: "uname",
                  value: data.uname,
                  className: "mt-1 block w-full",
                  autoComplete: "username",
                  isFocused: true,
                  onChange: (e) => setData("uname", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.uname, className: "mt-2" })
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
              /* @__PURE__ */ jsx(InputError, { message: errors.tag_line, className: "mt-2" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "age", value: "Age" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "age",
                  type: "number",
                  min: "0",
                  name: "age",
                  value: data.age,
                  className: "mt-1 block w-full",
                  autoComplete: "age",
                  isFocused: true,
                  onChange: (e) => setData("age", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.age, className: "mt-2" })
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
              /* @__PURE__ */ jsx(InputError, { message: errors.zip, className: "mt-2" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "bio", value: "Bio" }),
              /* @__PURE__ */ jsx(
                TextArea,
                {
                  id: "bio",
                  name: "bio",
                  className: "mt-1 block w-full",
                  autoComplete: "bio",
                  isFocused: true,
                  value: data.bio,
                  onChange: (e) => setData("bio", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.bio, className: "mt-2" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-start", children: /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-bpurple-500 text-white min-w-[60%] py-4 rounded-full",
                disabled: processing,
                children: "Submit"
              }
            ) })
          ] }) })
        ] }) })
      ]
    }
  );
}
export {
  OnBoarding as default
};
