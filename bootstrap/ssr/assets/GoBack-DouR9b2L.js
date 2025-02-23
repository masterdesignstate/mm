import { jsx } from "react/jsx-runtime";
import "react";
import { ArrowLeft01Icon } from "@hugeicons/react";
import "@inertiajs/react";
const GoBack = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: () => window.history.back(), className: "size-10 border rounded-full border-gray-300  flex items-center justify-center", children: /* @__PURE__ */ jsx(ArrowLeft01Icon, {}) }) });
};
export {
  GoBack as G
};
