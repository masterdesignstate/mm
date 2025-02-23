import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, [isFocused]);
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      ...props,
      className: "rounded-full py-4 px-6 text-sm text-bc-200 border-gray-300  focus:border-bc-600 focus:ring-bc-600  " + className,
      ref: localRef
    }
  );
});
export {
  TextInput as T
};
