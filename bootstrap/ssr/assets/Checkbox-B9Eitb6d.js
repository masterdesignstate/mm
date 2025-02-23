import { jsx } from "react/jsx-runtime";
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 size-6 text-bc-600 shadow-sm focus:ring-bc-600 " + className
    }
  );
}
export {
  Checkbox as C
};
