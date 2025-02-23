import { jsxs, jsx } from "react/jsx-runtime";
import "react";
const ProfileAttribute = ({ label, attribute, className }) => {
  const toSentenceCase = (str) => {
    if (typeof str !== "string" || str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return /* @__PURE__ */ jsxs("div", { className: "inline-block " + className, children: [
    /* @__PURE__ */ jsx("div", { className: "text-bc-200", children: label }),
    /* @__PURE__ */ jsx("div", { className: "text-bc-600 text-xl leading-6", children: toSentenceCase(attribute) })
  ] });
};
export {
  ProfileAttribute as P
};
