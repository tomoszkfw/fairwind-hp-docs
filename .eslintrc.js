/** @type {import('eslint').Linter.Config}*/

module.exports = {
    plugins: ["import", "unused-imports", "tailwindcss"],
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "next/core-web-vitals",
        "plugin:tailwindcss/recommended",
        "prettier",
    ],
    rules: {
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "error",
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
                "newlines-between": "always",
                alphabetize: { order: "asc", caseInsensitive: true },
            },
        ],
    },
    root: true,
    ignorePatterns: [
        ".eslintrc.js",
        "next.config.mjs",
        "out/*",
        "export-images.config.js",
    ],
    settings: {
        tailwindcss: {
            callees: ["clsx", "twMerge", "cn"],
        },
    },
};
