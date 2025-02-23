import { jsxs, jsx } from "react/jsx-runtime";
import { C as Checkbox } from "./Checkbox-B9Eitb6d.js";
import { I as InputError } from "./InputError-2JjWc6nJ.js";
import { I as InputLabel } from "./InputLabel-N-vb9U_3.js";
import { T as TextInput } from "./TextInput-BDR5dPTB.js";
import { G as GuestLayout } from "./GuestLayout-C_qIVlTu.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Grid-pbLu9vEv.js";
function Login({ status, canResetPassword, showLogin = false }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const [showForm, setShowForm] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password")
    });
  };
  useEffect(() => {
  }, []);
  if (!showForm)
    return /* @__PURE__ */ jsxs(GuestLayout, { children: [
      /* @__PURE__ */ jsx(Head, { title: "Login" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "mb-8 px-2 text-center font-head text-6xl font-bold uppercase", children: [
          "Love is a Formula – ",
          /* @__PURE__ */ jsx("br", {}),
          "Start Solving Yours Today!"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "w-96", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "w-full rounded-full bg-bpurple-500 py-4 text-white",
              onClick: () => setShowForm(true),
              children: "Login with Email"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "my-4 text-center", children: [
            "Don’t have an account?",
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("register"),
                className: "ml-2 text-pink-400",
                children: "Sign Up"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative my-8", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-0 -mt-3 w-10 -translate-x-1/2 bg-white text-center", children: "Or" }),
            /* @__PURE__ */ jsx("hr", { className: "border-gray-400" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: route("facebook.auth"),
                className: "flex w-full items-center justify-center space-x-4 rounded-full bg-[#1877F2] py-4 text-white",
                children: [
                  /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      width: "24",
                      height: "25",
                      viewBox: "0 0 24 25",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsx(
                          "rect",
                          {
                            width: "24",
                            height: "24",
                            transform: "translate(0 0.5)",
                            fill: "#1877F2"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M23.5 12.5699C23.5 6.2186 18.3513 1.06988 12 1.06988C5.64872 1.06988 0.5 6.2186 0.5 12.5699C0.5 18.3099 4.70538 23.0674 10.2031 23.9302V15.8941H7.2832V12.5699H10.2031V10.0363C10.2031 7.1541 11.92 5.56207 14.5468 5.56207C15.805 5.56207 17.1211 5.78668 17.1211 5.78668V8.61675H15.671C14.2424 8.61675 13.7969 9.50322 13.7969 10.4127V12.5699H16.9863L16.4765 15.8941H13.7969V23.9302C19.2946 23.0674 23.5 18.3099 23.5 12.5699Z",
                            fill: "white"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: "Continue with Facebook" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: route("google.auth"),
                className: "flex w-full items-center justify-center space-x-4 rounded-full bg-white py-4 shadow",
                children: [
                  /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      width: "25",
                      height: "24",
                      viewBox: "0 0 25 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsx(
                          "rect",
                          {
                            width: "24",
                            height: "24",
                            transform: "translate(0.5)",
                            fill: "white"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23.54 12.2613C23.54 11.4459 23.4668 10.6618 23.3309 9.90906H12.5V14.3575H18.6891C18.4225 15.795 17.6123 17.0129 16.3943 17.8284V20.7138H20.1109C22.2855 18.7118 23.54 15.7636 23.54 12.2613Z",
                            fill: "#4285F4"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.5 23.4998C15.605 23.4998 18.2081 22.47 20.1109 20.7137L16.3943 17.8282C15.3645 18.5182 14.0472 18.9259 12.5 18.9259C9.50474 18.9259 6.96951 16.903 6.06519 14.1848H2.22314V17.1644C4.11542 20.9228 8.00451 23.4998 12.5 23.4998Z",
                            fill: "#34A853"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.06523 14.1851C5.83523 13.4951 5.70455 12.7581 5.70455 12.0001C5.70455 11.2422 5.83523 10.5051 6.06523 9.81512V6.83557H2.22318C1.44432 8.38807 1 10.1444 1 12.0001C1 13.8558 1.44432 15.6122 2.22318 17.1647L6.06523 14.1851Z",
                            fill: "#FBBC05"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.5 5.07386C14.1884 5.07386 15.7043 5.65409 16.8961 6.79364L20.1945 3.49523C18.2029 1.63955 15.5997 0.5 12.5 0.5C8.00451 0.5 4.11542 3.07705 2.22314 6.83545L6.06519 9.815C6.96951 7.09682 9.50474 5.07386 12.5 5.07386Z",
                            fill: "#EA4335"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: "Continue with Google" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] });
  else
    return /* @__PURE__ */ jsxs(GuestLayout, { children: [
      /* @__PURE__ */ jsx(Head, { title: "Log in" }),
      status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-center text-4xl font-bold uppercase", children: "Login" }),
      /* @__PURE__ */ jsx("div", { className: "h-2 w-96" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "E-mail" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              className: "mt-1 block w-full",
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "password",
              name: "password",
              type: "password",
              value: data.password,
              className: "mt-1 block w-full",
              autoComplete: "current-password",
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 block", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              name: "remember",
              checked: data.remember,
              onChange: (e) => setData("remember", e.target.checked)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600 dark:text-gray-400", children: "Remember me" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "rounded-md text-sm text-blue-500 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800",
            children: "Forgot password?"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-full rounded-full bg-bpurple-500 py-4 text-white",
            disabled: processing,
            children: "Login"
          }
        ) })
      ] })
    ] });
}
export {
  Login as default
};
