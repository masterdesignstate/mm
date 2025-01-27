import { jsxs, jsx } from "react/jsx-runtime";
import "react";
const PageHead = ({ heading, description, children }) => {
  return /* @__PURE__ */ jsxs("section", { className: "max-w-7xl px-4 lg:px-0 mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-head font-black text-7xl text-center uppercase text-bpurple-600 pt-16", children: heading }),
    /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-center text-xl mt-4", children: description }),
    children
  ] });
};
export {
  PageHead as P
};
