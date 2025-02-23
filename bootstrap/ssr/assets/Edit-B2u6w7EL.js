import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./DeleteUserForm-XE97NKWN.js";
import UpdatePasswordForm from "./UpdatePasswordForm-D3KYblpC.js";
import "./TextInput-BDR5dPTB.js";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@hugeicons/react";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "./InputError-2JjWc6nJ.js";
import "./InputLabel-N-vb9U_3.js";
import "./PrimaryButton-DDF1xnxF.js";
function Edit({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Settings" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Settings" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
