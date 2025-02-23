import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
import { P as PrimaryButton } from "./PrimaryButton-DDF1xnxF.js";
import { T as TextInput } from "./TextInput-BDR5dPTB.js";
import { G as GuestLayout } from "./GuestLayout-C_qIVlTu.js";
import { useForm, Head } from "@inertiajs/react";
import "react";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Grid-pbLu9vEv.js";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 text-center  dark:text-gray-400 max-w-xl", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600 dark:text-green-400", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-96 mx-auto", children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
export {
  ForgotPassword as default
};
