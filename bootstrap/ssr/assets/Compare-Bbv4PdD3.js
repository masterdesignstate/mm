import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c as cn, A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { Head, Deferred } from "@inertiajs/react";
import * as React from "react";
import { forwardRef, useEffect, useState } from "react";
import { P as ProfileAttribute } from "./ProfileAttribute-CbvoMSDV.js";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ray } from "node-ray/web";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Command as Command$1, useCommandState } from "cmdk";
import { X, Search } from "lucide-react";
import { cva } from "class-variance-authority";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import "./Button-BR5pHvwW.js";
import { G as GoBack } from "./GoBack-DouR9b2L.js";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@hugeicons/react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "@radix-ui/react-slot";
const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
        secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        destructive: "border-transparent bg-red-500 text-neutral-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
        outline: "text-neutral-950 dark:text-neutral-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const DialogPortal = SheetPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(
          SheetPrimitive.Close,
          {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",
            children: [
              /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive.Description.displayName;
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty$1 = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command$1.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty$1.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-neutral-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 dark:text-neutral-50 dark:[&_[cmdk-group-heading]]:text-neutral-400",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-neutral-200 dark:bg-neutral-800", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-neutral-100 data-[selected=true]:text-neutral-900 data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:data-[selected='true']:bg-neutral-800 dark:data-[selected=true]:text-neutral-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
function transToGroupOption(options, groupBy) {
  if (options.length === 0) {
    return {};
  }
  if (!groupBy) {
    return {
      "": options
    };
  }
  const groupOption = {};
  options.forEach((option) => {
    const key = option[groupBy] || "";
    if (!groupOption[key]) {
      groupOption[key] = [];
    }
    groupOption[key].push(option);
  });
  return groupOption;
}
function removePickedOption(groupOption, picked) {
  const cloneOption = JSON.parse(JSON.stringify(groupOption));
  for (const [key, value] of Object.entries(cloneOption)) {
    cloneOption[key] = value.filter(
      (val) => !picked.find((p) => p.value === val.value)
    );
  }
  return cloneOption;
}
function isOptionsExist(groupOption, targetOption) {
  for (const [, value] of Object.entries(groupOption)) {
    if (value.some((option) => targetOption.find((p) => p.value === option.value))) {
      return true;
    }
  }
  return false;
}
const CommandEmpty = forwardRef(({ className, ...props }, forwardedRef) => {
  const render = useCommandState((state) => state.filtered.count === 0);
  if (!render) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: forwardedRef,
      className: cn("py-6 text-center text-sm", className),
      "cmdk-empty": "",
      role: "presentation",
      ...props
    }
  );
});
CommandEmpty.displayName = "CommandEmpty";
const MultipleSelector = React.forwardRef(
  ({
    value,
    onChange,
    placeholder,
    defaultOptions: arrayDefaultOptions = [],
    options: arrayOptions,
    delay,
    onSearch,
    onSearchSync,
    loadingIndicator,
    emptyIndicator,
    maxSelected = Number.MAX_SAFE_INTEGER,
    onMaxSelected,
    hidePlaceholderWhenSelected,
    disabled,
    groupBy,
    className,
    badgeClassName,
    selectFirstItem = true,
    creatable = false,
    triggerSearchOnFocus = false,
    commandProps,
    inputProps,
    hideClearAllButton = false
  }, ref) => {
    const inputRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [onScrollbar, setOnScrollbar] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const [selected, setSelected] = React.useState(value || []);
    const [options, setOptions] = React.useState(
      transToGroupOption(arrayDefaultOptions, groupBy)
    );
    const [inputValue, setInputValue] = React.useState("");
    const debouncedSearchTerm = useDebounce(inputValue, delay || 500);
    React.useImperativeHandle(
      ref,
      () => ({
        selectedValue: [...selected],
        input: inputRef.current,
        focus: () => {
          var _a;
          return (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.focus();
        },
        reset: () => setSelected([])
      }),
      [selected]
    );
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
        setOpen(false);
        inputRef.current.blur();
      }
    };
    const handleUnselect = React.useCallback(
      (option) => {
        const newOptions = selected.filter((s) => s.value !== option.value);
        setSelected(newOptions);
        onChange == null ? void 0 : onChange(newOptions);
      },
      [onChange, selected]
    );
    const handleKeyDown = React.useCallback(
      (e) => {
        const input = inputRef.current;
        if (input) {
          if (e.key === "Delete" || e.key === "Backspace") {
            if (input.value === "" && selected.length > 0) {
              const lastSelectOption = selected[selected.length - 1];
              if (!lastSelectOption.fixed) {
                handleUnselect(selected[selected.length - 1]);
              }
            }
          }
          if (e.key === "Escape") {
            input.blur();
          }
        }
      },
      [handleUnselect, selected]
    );
    useEffect(() => {
      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchend", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchend", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchend", handleClickOutside);
      };
    }, [open]);
    useEffect(() => {
      if (value) {
        setSelected(value);
      }
    }, [value]);
    useEffect(() => {
      if (!arrayOptions || onSearch) {
        return;
      }
      const newOption = transToGroupOption(arrayOptions || [], groupBy);
      if (JSON.stringify(newOption) !== JSON.stringify(options)) {
        setOptions(newOption);
      }
    }, [arrayDefaultOptions, arrayOptions, groupBy, onSearch, options]);
    useEffect(() => {
      const doSearchSync = () => {
        const res = onSearchSync == null ? void 0 : onSearchSync(debouncedSearchTerm);
        setOptions(transToGroupOption(res || [], groupBy));
      };
      const exec = async () => {
        if (!onSearchSync || !open) return;
        if (triggerSearchOnFocus) {
          doSearchSync();
        }
        if (debouncedSearchTerm) {
          doSearchSync();
        }
      };
      void exec();
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus]);
    useEffect(() => {
      const doSearch = async () => {
        setIsLoading(true);
        const res = await (onSearch == null ? void 0 : onSearch(debouncedSearchTerm));
        setOptions(transToGroupOption(res || [], groupBy));
        setIsLoading(false);
      };
      const exec = async () => {
        if (!onSearch || !open) return;
        if (triggerSearchOnFocus) {
          await doSearch();
        }
        if (debouncedSearchTerm) {
          await doSearch();
        }
      };
      void exec();
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus]);
    const CreatableItem = () => {
      if (!creatable) return void 0;
      if (isOptionsExist(options, [{ value: inputValue, label: inputValue }]) || selected.find((s) => s.value === inputValue)) {
        return void 0;
      }
      const Item = /* @__PURE__ */ jsx(
        CommandItem,
        {
          value: inputValue,
          className: "cursor-pointer",
          onMouseDown: (e) => {
            e.preventDefault();
            e.stopPropagation();
          },
          onSelect: (value2) => {
            if (selected.length >= maxSelected) {
              onMaxSelected == null ? void 0 : onMaxSelected(selected.length);
              return;
            }
            setInputValue("");
            const newOptions = [...selected, { value: value2, label: value2 }];
            setSelected(newOptions);
            onChange == null ? void 0 : onChange(newOptions);
          },
          children: `Create "${inputValue}"`
        }
      );
      if (!onSearch && inputValue.length > 0) {
        return Item;
      }
      if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) {
        return Item;
      }
      return void 0;
    };
    const EmptyItem = React.useCallback(() => {
      if (!emptyIndicator) return void 0;
      if (onSearch && !creatable && Object.keys(options).length === 0) {
        return /* @__PURE__ */ jsx(CommandItem, { value: "-", disabled: true, children: emptyIndicator });
      }
      return /* @__PURE__ */ jsx(CommandEmpty, { children: emptyIndicator });
    }, [creatable, emptyIndicator, onSearch, options]);
    const selectables = React.useMemo(
      () => removePickedOption(options, selected),
      [options, selected]
    );
    const commandFilter = React.useCallback(() => {
      if (commandProps == null ? void 0 : commandProps.filter) {
        return commandProps.filter;
      }
      if (creatable) {
        return (value2, search) => {
          return value2.toLowerCase().includes(search.toLowerCase()) ? 1 : -1;
        };
      }
      return void 0;
    }, [creatable, commandProps == null ? void 0 : commandProps.filter]);
    return /* @__PURE__ */ jsxs(
      Command,
      {
        ref: dropdownRef,
        ...commandProps,
        onKeyDown: (e) => {
          var _a;
          handleKeyDown(e);
          (_a = commandProps == null ? void 0 : commandProps.onKeyDown) == null ? void 0 : _a.call(commandProps, e);
        },
        className: cn(
          "h-auto overflow-visible bg-transparent",
          commandProps == null ? void 0 : commandProps.className
        ),
        shouldFilter: (commandProps == null ? void 0 : commandProps.shouldFilter) !== void 0 ? commandProps.shouldFilter : !onSearch,
        filter: commandFilter(),
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "min-h-10 rounded-md border border-input text-base md:text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                {
                  "px-3 py-2": selected.length !== 0,
                  "cursor-text": !disabled && selected.length !== 0
                },
                className
              ),
              onClick: () => {
                var _a;
                if (disabled) return;
                (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.focus();
              },
              children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-wrap gap-1", children: [
                selected.map((option) => {
                  return /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      className: cn(
                        "data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground",
                        "data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground",
                        badgeClassName
                      ),
                      "data-fixed": option.fixed,
                      "data-disabled": disabled || void 0,
                      children: [
                        option.label,
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            className: cn(
                              "ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2",
                              (disabled || option.fixed) && "hidden"
                            ),
                            onKeyDown: (e) => {
                              if (e.key === "Enter") {
                                handleUnselect(option);
                              }
                            },
                            onMouseDown: (e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            },
                            onClick: () => handleUnselect(option),
                            children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3 text-muted-foreground hover:text-foreground" })
                          }
                        )
                      ]
                    },
                    option.value
                  );
                }),
                /* @__PURE__ */ jsx(
                  Command$1.Input,
                  {
                    ...inputProps,
                    ref: inputRef,
                    value: inputValue,
                    disabled,
                    onValueChange: (value2) => {
                      var _a;
                      setInputValue(value2);
                      (_a = inputProps == null ? void 0 : inputProps.onValueChange) == null ? void 0 : _a.call(inputProps, value2);
                    },
                    onBlur: (event) => {
                      var _a;
                      if (!onScrollbar) {
                        setOpen(false);
                      }
                      (_a = inputProps == null ? void 0 : inputProps.onBlur) == null ? void 0 : _a.call(inputProps, event);
                    },
                    onFocus: (event) => {
                      var _a;
                      setOpen(true);
                      (_a = inputProps == null ? void 0 : inputProps.onFocus) == null ? void 0 : _a.call(inputProps, event);
                    },
                    placeholder: hidePlaceholderWhenSelected && selected.length !== 0 ? "" : placeholder,
                    className: cn(
                      "flex-1 bg-transparent outline-none placeholder:text-muted-foreground",
                      {
                        "w-full": hidePlaceholderWhenSelected,
                        "px-3 py-2": selected.length === 0,
                        "ml-1": selected.length !== 0
                      },
                      inputProps == null ? void 0 : inputProps.className
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setSelected(selected.filter((s) => s.fixed));
                      onChange == null ? void 0 : onChange(selected.filter((s) => s.fixed));
                    },
                    className: cn(
                      "absolute right-0 h-6 w-6 p-0",
                      (hideClearAllButton || disabled || selected.length < 1 || selected.filter((s) => s.fixed).length === selected.length) && "hidden"
                    ),
                    children: /* @__PURE__ */ jsx(X, {})
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative", children: open && /* @__PURE__ */ jsx(
            CommandList,
            {
              className: "absolute top-1 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in",
              onMouseLeave: () => {
                setOnScrollbar(false);
              },
              onMouseEnter: () => {
                setOnScrollbar(true);
              },
              onMouseUp: () => {
                var _a;
                (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.focus();
              },
              children: isLoading ? /* @__PURE__ */ jsx(Fragment, { children: loadingIndicator }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                EmptyItem(),
                CreatableItem(),
                !selectFirstItem && /* @__PURE__ */ jsx(CommandItem, { value: "-", className: "hidden" }),
                Object.entries(selectables).map(([key, dropdowns]) => /* @__PURE__ */ jsx(
                  CommandGroup,
                  {
                    heading: key,
                    className: "h-full overflow-auto",
                    children: /* @__PURE__ */ jsx(Fragment, { children: dropdowns.map((option) => {
                      return /* @__PURE__ */ jsx(
                        CommandItem,
                        {
                          value: option.label,
                          disabled: option.disable,
                          onMouseDown: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          },
                          onSelect: () => {
                            if (selected.length >= maxSelected) {
                              onMaxSelected == null ? void 0 : onMaxSelected(selected.length);
                              return;
                            }
                            setInputValue("");
                            const newOptions = [...selected, option];
                            setSelected(newOptions);
                            onChange == null ? void 0 : onChange(newOptions);
                          },
                          className: cn(
                            "cursor-pointer",
                            option.disable && "cursor-default text-muted-foreground"
                          ),
                          children: option.label
                        },
                        option.value
                      );
                    }) })
                  },
                  key
                ))
              ] })
            }
          ) })
        ]
      }
    );
  }
);
MultipleSelector.displayName = "MultipleSelector";
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800", className),
      ...props
    }
  );
}
const Progress = React.forwardRef(({ className, barName, value, ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-neutral-900 transition-all dark:bg-neutral-50 " + barName,
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;
const MatchProgress = ({ value, label }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex text-xl mb-2 font-medium text-bc-600 justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: label }),
      /* @__PURE__ */ jsxs("div", { children: [
        value,
        " %"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Progress, { value, className: "bg-bc-50 h-2 ", barName: "bg-bc-600 rounded-r-full" })
  ] });
};
function MyProfile({
  profile,
  partner,
  answers,
  partner_answers,
  distance,
  match,
  common_question_count
}) {
  var _a, _b, _c, _d, _e, _f;
  ray(match).color("red");
  useState(distance);
  const stops = [1, 2, 3, 4, 5];
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Comparision" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto my-8 px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-4xl items-center justify-center lg:-mt-8 px-4 lg:px-0", children: /* @__PURE__ */ jsxs("div", { className: "grid  w-full gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 flex flex-col items-center justify-center space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl text-bpurple-500", children: profile.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-white", children: "." }),
        /* @__PURE__ */ jsx("div", { className: "w-full lg:w-[300px] lg:px-0", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 9 / 16, className: "bg-bc-50", children: /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-lg bg-gray-300", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: profile.dp,
            alt: "Image",
            className: "h-full rounded-md object-cover"
          }
        ) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "!mt-8", children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Age",
            className: "text-center",
            attribute: profile.age
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Zip",
            className: "text-center",
            attribute: profile.zip
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            className: "text-center",
            label: "Questions Answered",
            attribute: answers.length
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "block w-full" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:-mt-[50%] lg:flex h-full flex-col items-center justify-center space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx(
            ProfileAttribute,
            {
              label: "Distance",
              className: "text-center",
              attribute: ""
            }
          ),
          /* @__PURE__ */ jsx(
            Deferred,
            {
              data: "distance",
              fallback: /* @__PURE__ */ jsx(Skeleton, { className: "h-[20px] w-[100px] rounded-full" }),
              children: distance
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            className: "text-center",
            label: "Mutual Questions",
            attribute: common_question_count
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 flex flex-col items-center justify-center space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl text-bpurple-500", children: partner.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
          "Last Active : ",
          partner.last_login
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full lg:w-[300px] lg:px-0", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 9 / 16, className: "bg-bc-50", children: /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-lg bg-gray-300", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: partner.dp,
            alt: "Image",
            className: "h-full rounded-md object-cover"
          }
        ) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "!mt-8", children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Age",
            className: "text-center",
            attribute: partner.age
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Zip",
            className: "text-center",
            attribute: partner.zip
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            labelClass: "",
            className: "text-center",
            label: "Questions Answered",
            attribute: partner_answers.length
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "block w-full" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-4 lg:px-0", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 space-y-4", children: [
        /* @__PURE__ */ jsx(MatchProgress, { value: match.overall, label: "Overall" }),
        /* @__PURE__ */ jsx(
          MatchProgress,
          {
            value: match.you_seek,
            label: "You Seek"
          }
        ),
        /* @__PURE__ */ jsx(
          MatchProgress,
          {
            value: match.they_seek,
            label: "They Seek"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full space-y-4 px-4 lg:px-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Gender" }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative my-4 flex w-full select-none items-center",
              value: [(_c = (_b = (_a = answers[1]) == null ? void 0 : _a.answer) == null ? void 0 : _b.selfAnswer) == null ? void 0 : _c.value],
              min: 1,
              max: 5,
              step: 1,
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1", children: stops.map((stop) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "z-50 h-3 w-1 rounded bg-gray-400"
                  },
                  stop
                )) }),
                /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative -z-20 h-1 w-full rounded bg-gray-200", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full" }) }),
                /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none", children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    className: "size-6",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "1",
                          y: "1",
                          width: "14.5584",
                          height: "15",
                          rx: "7.27922",
                          fill: "#F3F0FF"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "1",
                          y: "1",
                          width: "14.5584",
                          height: "15",
                          rx: "7.27922",
                          stroke: "#692EB7",
                          strokeWidth: "2"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: "8.2793",
                          cy: "8.5",
                          r: "4.5",
                          fill: "#682EB8"
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "text-lg text-bpurple-500", children: /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("li", { children: "Feminine" }),
            /* @__PURE__ */ jsx("li", { children: "Masculine" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Relationship Preference" }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative my-4 flex w-full select-none items-center",
              value: [(_f = (_e = (_d = answers[0]) == null ? void 0 : _d.answer) == null ? void 0 : _e.selfAnswer) == null ? void 0 : _f.value],
              min: 1,
              max: 5,
              step: 1,
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -z-10 flex w-full -translate-y-1/2 justify-between px-1", children: stops.map((stop) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "z-50 h-3 w-1 rounded bg-gray-400"
                  },
                  stop
                )) }),
                /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative -z-20 h-1 w-full rounded bg-gray-200", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full" }) }),
                /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "absolute block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none", children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    className: "size-6",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "1",
                          y: "1",
                          width: "14.5584",
                          height: "15",
                          rx: "7.27922",
                          fill: "#F3F0FF"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "1",
                          y: "1",
                          width: "14.5584",
                          height: "15",
                          rx: "7.27922",
                          stroke: "#692EB7",
                          strokeWidth: "2"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: "8.2793",
                          cy: "8.5",
                          r: "4.5",
                          fill: "#682EB8"
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "text-lg text-bpurple-500", children: /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("li", { children: "Hookup" }),
            /* @__PURE__ */ jsx("li", { children: "Dating" }),
            /* @__PURE__ */ jsx("li", { children: "Partner" })
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  MyProfile as default
};
