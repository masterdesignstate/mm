import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { P as ProfileAttribute } from "./ProfileAttribute-CbvoMSDV.js";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ray } from "node-ray/web";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Cancel01Icon, FavouriteIcon } from "@hugeicons/react";
import { B as Button } from "./Button-BR5pHvwW.js";
import { G as GoBack } from "./GoBack-DouR9b2L.js";
import { C as Checkbox } from "./Checkbox-B9Eitb6d.js";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "@radix-ui/react-slot";
function MyProfile({
  profile,
  answers,
  lastActivity,
  tags,
  match
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { csrf_token } = usePage().props;
  ray(profile);
  ray(answers).color("orange");
  useState();
  const stops = [1, 2, 3, 4, 5];
  const [reRender, setReRender] = useState(false);
  useEffect(() => {
  }, [reRender]);
  const like = async (profile2) => {
    profile2.like_from_current_user = { response: "positive" };
    const res = await fetch(route("profile-responses.store"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrf_token
        // Add CSRF token to headers
      },
      body: JSON.stringify({
        profile: profile2,
        response: "positive"
      })
    });
    const data = await res.json();
    console.log(data);
    profile2.like_from_current_user = data;
    setReRender(true);
  };
  const unlike = (profile2) => {
    router.delete(
      route("profile-responses.destroy", profile2.like_from_current_user),
      {
        onSuccess: () => {
          profile2.like_from_current_user = null;
          setReRender(false);
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "My Profile" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto mt-8 px-8", children: /* @__PURE__ */ jsx(GoBack, {}) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-5xl items-center justify-between px-4 lg:-mt-16 lg:px-0", children: /* @__PURE__ */ jsx("span", {}) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto my-16 flex max-w-4xl items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl text-bpurple-500", children: profile.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
          "Last Active : ",
          lastActivity
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-bc-600 w-full overflow-hidden rounded-xl border-8 px-4 lg:w-[300px] lg:px-0", children: /* @__PURE__ */ jsx(
          AspectRatio,
          {
            ratio: 9 / 16,
            className: "bg-green-300",
            children: /* @__PURE__ */ jsx("div", { className: "h-full w-full overflow-hidden bg-gray-300", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: profile.dp,
                alt: "Image",
                className: "h-full w-full object-cover"
              }
            ) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "!my-8 mx-auto block w-[80%]", children: /* @__PURE__ */ jsxs("ul", { className: "flex w-full justify-between", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("h5", { className: "text-bpurple-500", children: "Overall" }),
            /* @__PURE__ */ jsxs("span", { className: "text-2xl text-bpurple-600", children: [
              match.overall,
              " %"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("h5", { className: "text-bpurple-500", children: "You Seek" }),
            /* @__PURE__ */ jsxs("span", { className: "text-2xl text-bpurple-600", children: [
              match.you_seek,
              " %"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("h5", { className: "text-bpurple-500", children: "They Seek" }),
            /* @__PURE__ */ jsxs("span", { className: "text-2xl text-bpurple-600", children: [
              match.they_seek,
              " %"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex w-full justify-between space-x-4", children: [
          profile.like_from_current_user && profile.like_from_current_user.response === "negative" ? /* @__PURE__ */ jsx("li", { className: "flex items-center justify-center rounded-full border border-gray-300 p-4 text-bpurple-500", children: /* @__PURE__ */ jsx(Cancel01Icon, { size: 28 }) }) : /* @__PURE__ */ jsx("li", { className: "flex items-center justify-center rounded-full border border-gray-300 p-4 text-bpurple-500", children: /* @__PURE__ */ jsx(Cancel01Icon, { size: 28 }) }),
          profile.like_from_current_user && profile.like_from_current_user.response === "positive" ? /* @__PURE__ */ jsx(
            "li",
            {
              onClick: () => unlike(profile),
              className: "cursor-pointer flex items-center justify-center rounded-full border border-gray-300 bg-bpurple-500 p-4 text-white",
              children: /* @__PURE__ */ jsx(FavouriteIcon, { size: 28 })
            }
          ) : /* @__PURE__ */ jsx(
            "li",
            {
              onClick: () => like(profile),
              className: "cursor-pointer flex items-center justify-center rounded-full border border-gray-300 p-4 text-bpurple-500",
              children: /* @__PURE__ */ jsx(FavouriteIcon, { size: 28 })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", { className: "block w-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2 px-4 lg:px-0", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Username",
            attribute: profile.uname
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-48", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            ProfileAttribute,
            {
              label: "Age",
              attribute: profile.age
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            ProfileAttribute,
            {
              label: "Zip",
              attribute: profile.zip
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Mutual Questions",
            attribute: profile.common_question_count
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Questions Answered",
            attribute: profile.questions_answered
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Motto",
            attribute: profile.tag_line
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Gender" }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative my-4 flex w-full select-none items-center",
              value: [
                (_c = (_b = (_a = answers[1]) == null ? void 0 : _a.answer) == null ? void 0 : _b.selfAnswer) == null ? void 0 : _c.value
              ],
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
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "text-bc-200", children: "Relationship Preference" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
              /* @__PURE__ */ jsx(
                Checkbox,
                {
                  disabled: true,
                  checked: (_e = (_d = answers[0]) == null ? void 0 : _d.answer) == null ? void 0 : _e.isOkayWithAll
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-bc-200", children: "Okay with All" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative my-4 flex w-full select-none items-center",
              value: [
                (_h = (_g = (_f = answers[0]) == null ? void 0 : _f.answer) == null ? void 0 : _g.selfAnswer) == null ? void 0 : _h.value
              ],
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
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Bio",
            attribute: profile.bio
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "!mt-4 flex items-center justify-start space-x-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "!py-7 text-xl",
              size: "lg",
              variant: "secondary",
              children: "Message"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              asChild: true,
              className: "!py-7 text-xl",
              size: "lg",
              children: /* @__PURE__ */ jsx(Link, { href: route("compare", profile), children: "Compare Answers" })
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  MyProfile as default
};
