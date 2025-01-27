import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
const TextArea = forwardRef(function TextArea2({ className = "", isFocused = false, ...props }, ref) {
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
    "textarea",
    {
      ...props,
      className: "rounded-full py-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  " + className,
      ref: localRef
    }
  );
});
export {
  TextArea as T
};
