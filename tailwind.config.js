import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import("tailwindcss").Config} */
export default {
    darkMode: ["media"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {

                bc: {
                    50:"#F3F0FF",
                    100:"#B3A2C6",
                    200:"#7E65A2",
                    600:"#692EB7",
                    900:"#100336",
                },

                bpurple: {
                    50: "#F3F0FF",
                    100: "#F7EAF4",
                    300: "#B3A2C6",
                    400: "#7E65A2",
                    500: "#692EB7",
                    600: "#5A3D8B",
                    900: "#100336",
                },
                primary: "#692EB7",
                "primary-foreground": "#fff",


                // background: "hsl(var(--background))",
                // foreground: "hsl(var(--foreground))",
                // card: "hsl(var(--card))",
                // cardForeground: "hsl(var(--card-foreground))",
                // // primary: "hsl(var(--primary))",
                // primaryForeground: "hsl(var(--primary-foreground))",
                // secondary: "hsl(var(--secondary))",
                // secondaryForeground: "hsl(var(--secondary-foreground))",
                // muted: "hsl(var(--muted))",
                // mutedForeground: "hsl(var(--muted-foreground))",
                // accent: "hsl(var(--accent))",
                // accentForeground: "hsl(var(--accent-foreground))",
                // destructive: "hsl(var(--destructive))",
                // destructiveForeground: "hsl(var(--destructive-foreground))",
                // border: "hsl(var(--border))",
                // input: "hsl(var(--input))",
                // ring: "hsl(var(--ring))",



            },
            fontFamily: {
                head: ["Anton", ...defaultTheme.fontFamily.sans],
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },

    plugins: [forms, require("tailwindcss-animate")],
};
