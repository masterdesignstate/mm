import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-B89jR5wg.js";
import { Head, Link } from "@inertiajs/react";
import "./TextInput-DHOftoRI.js";
import "./TextArea-DD9TRCA-.js";
import { registerPlugin } from "react-filepond";
import "react";
/* empty css                                       */
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Ray } from "node-ray/web";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
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
const ProfileAttribute = ({ label, attribute }) => {
  return /* @__PURE__ */ jsxs("div", { className: "inline-block", children: [
    /* @__PURE__ */ jsx("div", { className: "text-sm", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-bpurple-500 text-lg", children: attribute })
  ] });
};
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
Ray.useDefaultSettings();
function MyProfile({ auth, profile, questions }) {
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      children: [
        /* @__PURE__ */ jsx(Head, { title: "My Profile" }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 lg:px-0 flex items-center justify-between my-16", children: [
          /* @__PURE__ */ jsx("span", {}),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("on-boarding"), children: /* @__PURE__ */ jsx("button", { className: "bg-bpurple-500 text-white rounded-full  px-4 py-2", children: "Edit Profile" }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "flex items-center justify-center  max-w-4xl mx-auto my-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center space-y-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-bpurple-500", children: auth.user.name }),
            /* @__PURE__ */ jsx("div", { className: "w-full px-4 lg:px-0 lg:w-[300px]", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 9 / 16, children: /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-300 h-64 rounded-lg" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "block w-full " })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2 px-4 lg:px-0", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ProfileAttribute, { label: "Username", attribute: profile.uname }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ProfileAttribute, { label: "Zip", attribute: profile.zip }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ProfileAttribute, { label: "Age", attribute: profile.age }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ProfileAttribute, { label: "Motto", attribute: profile.tag_line }) }),
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Gender" }),
              /* @__PURE__ */ jsx("div", { className: "text-bpurple-500 text-lg", children: questions[1].answer.answer })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Relationship Preference" }),
              /* @__PURE__ */ jsx("div", { className: "text-bpurple-500 text-lg", children: questions[0].answer.answer })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ProfileAttribute, { label: "Bio", attribute: profile.bio }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-start" })
          ] }) })
        ] }) })
      ]
    }
  );
}
export {
  MyProfile as default
};
