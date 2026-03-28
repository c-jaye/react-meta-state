import { defineMain } from "@storybook/react-vite/node"
import { mergeConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const config = defineMain({
    stories: [
        "../**/*.stories.@(ts|tsx)",
    ],
    addons: [
        "@chromatic-com/storybook",
        "@storybook/addon-vitest",
        "@storybook/addon-designs",
        "@storybook/addon-a11y",
        "storybook-addon-pseudo-states",
        import.meta.resolve("./localPreset.ts"),
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {
            strictMode: true,
        },
    },
    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
        enableCrashReports: false,
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    viteFinal: config => mergeConfig(config, {
        plugins: [
            tsconfigPaths(),
        ],
        optimizeDeps: {
            exclude: ["ast-types"],
            include: ["react", "react-dom"],
        },
    }),
})

export default config
