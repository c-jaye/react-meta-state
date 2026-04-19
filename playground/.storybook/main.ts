import { buildTokens, loadTokens } from "../../bin/generate"
import type { ViteDevServer } from "vite"
import { defineMain } from "@storybook/react-vite/node"
import dotenv from "dotenv"
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
    viteFinal: (config) => {
        dotenv.config()
        return mergeConfig(config, {
            plugins: [
                {
                    configureServer(server: ViteDevServer) {
                        const targetFile = "/src/assets/tokens.ts"

                        server.watcher.on("change", (file) => {
                            if (!file.endsWith(targetFile)) return
                            void loadTokens().then(buildTokens)
                        })
                    },
                },
                tsconfigPaths(),
            ],
            optimizeDeps: {
                exclude: ["ast-types"],
                include: ["react", "react-dom", "classnames", "opentype.js"],
            },
            define: {
                "process.env": process.env,
            },
        })
    },
})

export default config
