import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "MatchMatical";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": () => import("./assets/About-D89fCBDZ.js"), "./Pages/AllQuestions.jsx": () => import("./assets/AllQuestions-Bijvol-g.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-BCtfE48o.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-Diu8wTCj.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-C5y1hmaF.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-Dta0pSd6.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-P3DA9o9X.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-RGd9OGtC.js"), "./Pages/Blog.jsx": () => import("./assets/Blog-Dk4PJfRN.js"), "./Pages/Chat.jsx": () => import("./assets/Chat-BDDWRWpJ.js"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-DE4pt_PB.js"), "./Pages/Home.jsx": () => import("./assets/Home-2tR-9j6n.js"), "./Pages/MandatoryQuestions.jsx": () => import("./assets/MandatoryQuestions-DNhWCU1v.js"), "./Pages/MyProfile.jsx": () => import("./assets/MyProfile-C6zBmjS0.js"), "./Pages/MyQuestions.jsx": () => import("./assets/MyQuestions-EV_L0flD.js"), "./Pages/OnBoarding.jsx": () => import("./assets/OnBoarding-CEPijTBk.js"), "./Pages/PotentialMatches.jsx": () => import("./assets/PotentialMatches-D7w6DqW_.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-BHQ5d-BY.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-11aivKpd.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-D9e74OCq.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-DFqdHEkq.js"), "./Pages/Questions.jsx": () => import("./assets/Questions-8VpASfCb.js"), "./Pages/SingleAnswer.jsx": () => import("./assets/SingleAnswer-CH6bEboq.js"), "./Pages/Tos.jsx": () => import("./assets/Tos-Cn6jRVRv.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-ByNhCfvu.js") })
  ),
  setup({ el, App, props }) {
    createRoot(el).render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#692EB7"
  }
});
