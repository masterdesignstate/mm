import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { c as cn, A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { FilterHorizontalIcon, ArrowDown01Icon, FavouriteIcon, Chatting01Icon, Home09Icon } from "@hugeicons/react";
import { T as TextInput } from "./TextInput-BDR5dPTB.js";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { B as Button } from "./Button-BR5pHvwW.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { ray } from "node-ray/web";
import { G as GoBack } from "./GoBack-DouR9b2L.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "@radix-ui/react-slot";
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const PotentialMatches = ({ profiles }) => {
  ray(profiles).color("white");
  const { csrf_token } = usePage().props;
  const [matchProfiles, setMatchProfiles] = useState(profiles);
  const [searchString, setSearchString] = useState("");
  const [agePreference, setAgePreference] = useState([18, 80]);
  const [distancePreference, setDistancePreference] = useState([10, 80]);
  const [matchPercentage, setMatchPercentage] = useState([10, 100]);
  useEffect(() => {
    const newProfiles = profiles.filter((profile) => {
      return profile.overAllMatch >= matchPercentage[0] && profile.overAllMatch <= matchPercentage[1] && profile.age >= agePreference[0] && profile.age <= agePreference[1];
    });
    const searchProfile = newProfiles.filter((profile) => {
      return new RegExp(searchString, "i").test(profile.name);
    });
    setMatchProfiles(searchProfile);
  }, [matchPercentage, agePreference, searchString]);
  const resetAll = () => {
    setMatchProfiles(profiles);
    setAgePreference([18, 80]);
    setMatchPercentage([0, 100]);
    setSearchString("");
  };
  const like = async (profile) => {
    const allProfiles = [...matchProfiles];
    allProfiles.forEach((pro, index) => {
      if (pro.id === profile.id) {
        pro.like_from_current_user = { response: "positive" };
      }
    });
    setMatchProfiles(allProfiles);
    const res = await fetch(route("profile-responses.store"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrf_token
        // Add CSRF token to headers
      },
      body: JSON.stringify({
        profile,
        response: "positive"
      })
    });
    const data = await res.json();
    console.log(data);
    const newProfiles = [...matchProfiles];
    newProfiles.forEach((pro, index) => {
      if (pro.id === profile.id) {
        pro.like_from_current_user = data;
      }
    });
  };
  const unlike = (profile) => {
    router.delete(
      route("profile-responses.destroy", profile.like_from_current_user.id),
      {
        onSuccess: () => {
          const allProfiles = [...matchProfiles];
          allProfiles.forEach((pro, index) => {
            if (pro.id === profile.id) {
              pro.like_from_current_user = null;
            }
          });
          setMatchProfiles(allProfiles);
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Potential Matches" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto my-8 px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl gap-12 px-4 lg:-mt-16 lg:grid lg:grid-cols-7 lg:px-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 mb-8 flex flex-col space-y-3 lg:mb-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 rounded-lg bg-bpurple-500 px-4 py-4 text-white", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FilterHorizontalIcon, {}) }),
          /* @__PURE__ */ jsx("h3", { children: "Filter the Matches" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          TextInput,
          {
            value: searchString,
            onChange: (e) => setSearchString(e.target.value),
            className: "w-full rounded-lg",
            placeholder: "Search by Name/User/Motto/Bio"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h5", { children: "Compatibility Type" }) }),
          /* @__PURE__ */ jsx("div", { children: "Reset" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between space-x-2 rounded-lg bg-bpurple-50 px-4 py-2", children: [
          /* @__PURE__ */ jsx("div", { children: "Overall" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ArrowDown01Icon, {}) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex space-x-2 rounded-lg bg-bpurple-50 px-4 py-2", children: "You Seek" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex space-x-2 rounded-lg bg-bpurple-50 px-4 py-2", children: "They Seek" }) }),
        /* @__PURE__ */ jsx("div", { className: "block py-4", children: /* @__PURE__ */ jsxs("label", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("span", { children: "Age Preference" }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative flex w-full touch-none select-none items-center",
              value: agePreference,
              onValueChange: setAgePreference,
              min: 18,
              max: 80,
              step: 1,
              children: [
                agePreference.map((value, index) => /* @__PURE__ */ jsxs(
                  SliderPrimitive.Thumb,
                  {
                    className: "relative z-50 block",
                    children: [
                      /* @__PURE__ */ jsxs(
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
                      ),
                      /* @__PURE__ */ jsx("span", { className: "absolute left-0", children: value })
                    ]
                  },
                  index
                )),
                /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative -z-10 h-1 w-full bg-gray-300", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute -z-10 h-full bg-bpurple-500" }) })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "block py-4", children: /* @__PURE__ */ jsxs("label", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("span", { children: "Distance" }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative flex w-full touch-none select-none items-center",
              value: distancePreference,
              onValueChange: setDistancePreference,
              min: 0,
              max: 100,
              step: 1,
              children: [
                agePreference.map((value, index) => /* @__PURE__ */ jsx(
                  SliderPrimitive.Thumb,
                  {
                    className: "z-50 block",
                    children: /* @__PURE__ */ jsxs(
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
                    )
                  },
                  index
                )),
                /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative -z-10 h-1 w-full bg-gray-300", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute -z-10 h-full bg-bpurple-500" }) })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "block py-4", children: /* @__PURE__ */ jsxs("label", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("span", { children: "Match Percentage" }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative flex w-full touch-none select-none items-center",
              value: matchPercentage,
              onValueChange: setMatchPercentage,
              min: 0,
              max: 100,
              step: 1,
              children: [
                matchPercentage.map((value, index) => /* @__PURE__ */ jsxs(
                  SliderPrimitive.Thumb,
                  {
                    className: "relative z-50 block",
                    children: [
                      /* @__PURE__ */ jsxs(
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
                      ),
                      /* @__PURE__ */ jsx("span", { className: "absolute left-0", children: value })
                    ]
                  },
                  index
                )),
                /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative -z-10 h-1 w-full bg-gray-300", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute -z-10 h-full bg-bpurple-500" }) })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "!mt-8 flex justify-between", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h5", { children: "Tags" }) }),
          /* @__PURE__ */ jsx("div", { children: "Reset" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between space-x-2 rounded-lg bg-bpurple-50 px-4 py-2", children: [
          /* @__PURE__ */ jsx("div", { children: "Active" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ArrowDown01Icon, {}) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "!mt-6 space-x-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: resetAll,
              size: "lg",
              variant: "secondary",
              className: "rounded-full text-lg",
              children: "Reset All"
            }
          ),
          /* @__PURE__ */ jsx(Button, { size: "lg", className: "rounded-full text-lg", children: "Apply Filters" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-5", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl text-bpurple-500", children: "Your Matches" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4", children: matchProfiles && matchProfiles.map((profile, index) => /* @__PURE__ */ jsx("li", { className: "text-white", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex h-96 w-auto flex-col items-center justify-between overflow-hidden rounded-3xl border-4 border-bpurple-500 bg-[url(${profile.dp})] relative bg-cover bg-center text-white`,
            style: profile.dp && {
              backgroundImage: `url(${profile.dp})`
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10 h-full w-full cursor-pointer bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  className: "relative z-20 h-full w-full",
                  href: route("profile", profile),
                  children: /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full flex-col items-center justify-between overflow-hidden", children: [
                    /* @__PURE__ */ jsxs("div", { className: "rounded-b-2xl bg-bpurple-500 px-4 py-1 font-bold", children: [
                      profile.overAllMatch,
                      " %"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
                      profile.name,
                      ",",
                      profile.age
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 z-50 translate-y-1/2 p-2", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col space-y-2 *:rounded-full *:p-2", children: [
                profile.like_from_current_user && profile.like_from_current_user.response === "positive" ? /* @__PURE__ */ jsx(
                  "li",
                  {
                    className: "cursor-pointer !text-red-600",
                    onClick: () => unlike(profile),
                    children: /* @__PURE__ */ jsx(
                      FavouriteIcon,
                      {
                        variant: "solid"
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsx(
                  "li",
                  {
                    className: "cursor-pointer",
                    onClick: () => like(profile),
                    children: /* @__PURE__ */ jsx(
                      FavouriteIcon,
                      {
                        variant: "stroke"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-center", children: [
                  /* @__PURE__ */ jsx(Chatting01Icon, {}),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: profile.common_question_count })
                ] }) }),
                /* @__PURE__ */ jsx("li", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx(Home09Icon, { variant: "stroke" }) })
              ] }) })
            ]
          }
        ) }, index)) })
      ] })
    ] })
  ] });
};
export {
  PotentialMatches as default
};
