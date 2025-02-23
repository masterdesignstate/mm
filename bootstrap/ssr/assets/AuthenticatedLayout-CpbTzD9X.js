import { jsx, jsxs } from "react/jsx-runtime";
import { A as ApplicationLogo } from "./ApplicationLogo-BiY3mFu2.js";
import { D as Dropdown } from "./Dropdown-BfUgSuEe.js";
import { Link, usePage } from "@inertiajs/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { g as grid } from "./Grid-pbLu9vEv.js";
import { F as Footer } from "./Footer-TPpfWWn9.js";
import { Notification02Icon } from "@hugeicons/react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as ToastPrimitives from "@radix-ui/react-toast";
function NavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-bpurple-400 text-gray-900 focus:border-bpurple-500 dark:border-indigo-600 dark:text-gray-100" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300") + className,
      children
    }
  );
}
function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${active ? "border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800 dark:border-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 dark:focus:border-indigo-300 dark:focus:bg-indigo-900 dark:focus:text-indigo-200" : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:border-gray-600 dark:focus:bg-gray-700 dark:focus:text-gray-200"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`,
      children
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-neutral-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    children,
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Close,
      {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800",
        children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ]
      }
    )
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-neutral-950 dark:text-neutral-50", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === toastId || toastId === void 0 ? {
          ...t,
          open: false
        } : t)
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({
  ...props
}) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-neutral-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-neutral-800",
  {
    variants: {
      variant: {
        default: "border bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",
        destructive: "destructive group border-red-500 bg-red-500 text-neutral-50 dark:border-red-900 dark:bg-red-900 dark:text-neutral-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-neutral-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-neutral-50 group-[.destructive]:focus:ring-red-500 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:focus:ring-neutral-300 dark:group-[.destructive]:border-neutral-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-neutral-50 dark:group-[.destructive]:focus:ring-red-900",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-neutral-950/50 opacity-0 transition-opacity hover:text-neutral-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-neutral-50/50 dark:hover:text-neutral-50",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
function AuthenticatedLayout({ header, children }) {
  var _a;
  const user = usePage().props.auth.user;
  usePage().props.auth.display_pic;
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  useEffect(() => {
    Echo.channel("notifications").listen(
      "NotificationReceived",
      (event) => {
        console.log(event.message);
        const data = event.message;
        const message = event.message.message;
        if (data.to_user_id === user.id) {
          toast({
            title: "Notification Received",
            description: message,
            action: /* @__PURE__ */ jsx(ToastAction, { altText: "View Profile", children: /* @__PURE__ */ jsx(Link, { href: data.profile_url, children: "View Profile" }) })
          });
        }
      }
    );
    return () => {
      Echo.channel("notifications").stopListening("NotificationReceived");
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex min-h-screen flex-col bg-repeat",
      style: { backgroundImage: `url(${grid})` },
      children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Toaster, {}),
          /* @__PURE__ */ jsxs("nav", { className: "border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800", children: [
            /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex h-16 justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "ws-auto block h-8 fill-current text-gray-800 dark:text-gray-200" }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: [
                /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    href: route("my-profile"),
                    active: route().current("my-profile"),
                    children: "My Profile"
                  }
                ),
                /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    href: route("matches"),
                    active: route().current("matches"),
                    children: "Potential Matches"
                  }
                ),
                /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    href: route("all-questions"),
                    active: route().current(
                      "all-questions"
                    ),
                    children: "Questions"
                  }
                ),
                /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    href: route("chat"),
                    active: route().current("chat"),
                    children: "Chat"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "hidden sm:ms-6 sm:flex sm:items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "relative flex", children: /* @__PURE__ */ jsxs(Sheet, { children: [
                  /* @__PURE__ */ jsx(SheetTrigger, { children: /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "relative rounded-full border border-bpurple-500 p-2",
                      onClick: () => setShowingNavigationDropdown(
                        !showingNavigationDropdown
                      ),
                      children: [
                        /* @__PURE__ */ jsx(Notification02Icon, { className: "text-bpurple-500" }),
                        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 -mt-2 w-full -translate-x-1/2 rounded-full bg-white p-1 text-xs", children: "23" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(SheetContent, { className: "w-[400px] sm:w-[540px]", children: /* @__PURE__ */ jsxs(SheetHeader, { children: [
                    /* @__PURE__ */ jsx(SheetTitle, { children: "Notifications" }),
                    /* @__PURE__ */ jsx(SheetDescription, { children: "All the important notifications for your profile will appear here." })
                  ] }) })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                  /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      className: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "flex size-10 items-center justify-center rounded-full border border-gray-400 bg-gray-500", children: ((_a = user == null ? void 0 : user.profile) == null ? void 0 : _a.dp) && /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: user.profile.dp,
                            alt: "Dp",
                            className: "size-10 rounded-full object-cover object-center"
                          }
                        ) }),
                        /* @__PURE__ */ jsx(
                          "svg",
                          {
                            className: "-me-0.5 ms-2 h-4 w-4",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /* @__PURE__ */ jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        )
                      ]
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
                    /* @__PURE__ */ jsx(
                      Dropdown.Link,
                      {
                        href: route("profile.edit"),
                        children: "Settings"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Dropdown.Link,
                      {
                        href: route("logout"),
                        method: "post",
                        as: "button",
                        children: "Log Out"
                      }
                    )
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "-me-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setShowingNavigationDropdown(
                    (previousState) => !previousState
                  ),
                  className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400",
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      className: "h-6 w-6",
                      stroke: "currentColor",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M4 6h16M4 12h16M4 18h16"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            className: showingNavigationDropdown ? "inline-flex" : "hidden",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                          }
                        )
                      ]
                    }
                  )
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1 pb-3 pt-2", children: [
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("my-profile"),
                        active: route().current("my-profile"),
                        children: "My Profile"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("matches"),
                        active: route().current("matches"),
                        children: "Potential Matches"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("all-questions"),
                        active: route().current("all-questions"),
                        children: "All Questions"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("chat"),
                        active: route().current("chat"),
                        children: "Chat"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pb-1 pt-4 dark:border-gray-600", children: [
                    /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-800 dark:text-gray-200", children: user.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-500", children: user.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
                      /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
                      /* @__PURE__ */ jsx(
                        ResponsiveNavLink,
                        {
                          method: "post",
                          href: route("logout"),
                          as: "button",
                          children: "Log Out"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow dark:bg-gray-800", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8", children: header }) })
        ] }),
        /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
        /* @__PURE__ */ jsx(Footer, {})
      ]
    }
  );
}
export {
  AuthenticatedLayout as A,
  cn as c
};
