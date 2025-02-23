import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-CpbTzD9X.js";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { P as ProfileAttribute } from "./ProfileAttribute-CbvoMSDV.js";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ray } from "node-ray/web";
import { C as Checkbox } from "./Checkbox-B9Eitb6d.js";
import Lightbox from "yet-another-react-lightbox";
import { Zoom, Fullscreen } from "yet-another-react-lightbox/plugins";
import "./ApplicationLogo-BiY3mFu2.js";
import "./Dropdown-BfUgSuEe.js";
import "@headlessui/react";
import "./Grid-pbLu9vEv.js";
import "./Footer-TPpfWWn9.js";
import "@hugeicons/react";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
function MyProfile({ auth, profile, questions, gallery }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  ray(profile);
  const stops = [1, 2, 3, 4, 5];
  useState(3);
  const [showLightbox, setShowLightbox] = useState(false);
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "My Profile" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto my-8 flex max-w-5xl items-center justify-between px-4 lg:px-0", children: [
      /* @__PURE__ */ jsx("span", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("on-boarding"), children: /* @__PURE__ */ jsx("button", { className: "rounded-full bg-bpurple-500 px-4 py-2 text-white", children: "Edit Profile" }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto my-8 flex max-w-4xl items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "grid w-full gap-8 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-bc-600 font-medium text-2xl ", children: auth.user.name }),
        /* @__PURE__ */ jsx("div", { className: "w-full  lg:w-[300px] lg:px-0", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 9 / 16, className: "bg-bc-50", children: /* @__PURE__ */ jsx("div", { className: " w-full h-full rounded-lg bg-gray-300", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: profile.dp,
            alt: "Image",
            className: "h-full rounded-md object-cover"
          }
        ) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "h-24  lg:w-[300px]", children: [
          /* @__PURE__ */ jsx(
            Lightbox,
            {
              open: showLightbox,
              plugins: [Zoom, Fullscreen],
              close: () => setShowLightbox(false),
              slides: [
                { src: profile.dp }
              ]
            }
          ),
          /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-4 gap-2 w-full", onClick: () => setShowLightbox(true), children: gallery !== null ? Array.from({ length: 4 }, (_, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "w-16 h-20 bg-bc-50 rounded" }) }, i)) : /* @__PURE__ */ jsx("li", {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2 px-4 lg:px-0", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Username",
            attribute: profile.uname
          }
        ) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ProfileAttribute,
          {
            label: "Zip",
            attribute: profile.zip
          }
        ) }),
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
                (_d = (_c = (_b = (_a = questions[1]) == null ? void 0 : _a.answer) == null ? void 0 : _b.answer) == null ? void 0 : _c.selfAnswer) == null ? void 0 : _d.value
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
            /* @__PURE__ */ jsxs("div", { className: "space-x-2 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx(Checkbox, { disabled: true, checked: (_g = (_f = (_e = questions[0]) == null ? void 0 : _e.answer) == null ? void 0 : _f.answer) == null ? void 0 : _g.isOkayWithAll }),
              /* @__PURE__ */ jsx("span", { className: "text-bc-200", children: "Okay with All" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            SliderPrimitive.Root,
            {
              className: "relative my-4 flex w-full select-none items-center",
              value: [
                (_k = (_j = (_i = (_h = questions[0]) == null ? void 0 : _h.answer) == null ? void 0 : _i.answer) == null ? void 0 : _j.seekAnswer) == null ? void 0 : _k.value
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
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-start" })
      ] }) })
    ] }) })
  ] });
}
export {
  MyProfile as default
};
