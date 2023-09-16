/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    DEFAULT: "#1D9BF0",
                    glass: "#1D9BF025"
                },
                border: {
                    DEFAULT: "#2f3336"
                },
                background: {
                    DEFAULT: "#000",
                    lighter: "#202327",
                },
                secondary: {
                    DEFAULT: "#202327",
                },
                text: {
                    dark: "#71767b",
                    DEFAULT: "#fff",
                    secondary: "#d6d9db",
                },
            },
            boxShadow: {
                "white-blur":
                    "0px 0px 15px rgba(255, 255, 255, 0.2) ,0px 0px 3px 1px rgba(255, 255, 255, 0.15) ;",
            },
            padding: {
                "x-main" : "16px",
                "y-main" : "12px"
            }
        },
    },
    plugins: [],
};
