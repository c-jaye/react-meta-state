/* eslint-disable import-x/no-nodejs-modules */
import { entriesOf, isObj, isString } from "../../src/util/helpers"
import type { Obj } from "@/types/util"
import type { Tokens } from "@/assets/tokens"
import type { ViteDevServer } from "vite"
import { defineMain } from "@storybook/react-vite/node"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { mergeConfig } from "vite"
import { toJson } from "../../src/util/parse"
import tsconfigPaths from "vite-tsconfig-paths"
import { writeFile } from "fs/promises"

export async function buildTokens(tokens: Tokens, spaces = 4) {
    const buildScssMap = (obj: Obj, name = "", indent = 0): string => {
        const ind = " ".repeat((indent + 1) * spaces)
        return entriesOf(obj).reduce((x, [k, v]) => {
            const key = /[ ]/u.test(k) ? `"${k}"` : k
            if (isObj(v)) {
                return `${x}${ind}${key}: ${buildScssMap(v, "", indent + 1)},\n`
            }
            const value = isString(v) ? v : toJson(v)
            const quoted = /^[0-9]+\/[0-9]+$/u.test(value)
                ? `"${value}"`
                : value
            return `${x}${ind}${key}: ${quoted},\n`
        }, name ? `$const-${name}: (\n` : "(\n") + " ".repeat(indent * spaces) + (indent ? ")" : ");" + "\n")
    }

    const useSassMap = "@use \"sass:map\";\n\n"

    for (const [k, v] of entriesOf(tokens)) {
        const { file, data } = v as { file: string, data: Obj }
        const path = fileURLToPath(import.meta.resolve(`../../src/assets/scss/tokens/_${file}.scss`))
        await writeFile(path, useSassMap + buildScssMap(data, k))
    }
}

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

                            const path = `${fileURLToPath(import.meta
                                .resolve("../../src/assets/tokens.ts"))}?v=${Date.now()}`

                            void import(path).then((module: { default: Tokens }) => {
                                void buildTokens(module.default, 4)
                            })
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
