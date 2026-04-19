/* eslint-disable import-x/no-nodejs-modules */
import { URL, fileURLToPath } from "node:url"
import { copyFile, mkdir, rm } from "node:fs/promises"
import { defineBuildConfig } from "unbuild"
import { exec } from "child_process"
import { glob } from "tinyglobby"

export default defineBuildConfig([{
    failOnWarn: false,
    hooks: {
        async "build:done"() {
            const unnecessaryFiles = await glob("dist/**/*.d.(c)?ts")
            for (const file of unnecessaryFiles) {
                await rm(file)
            }

            const scssFiles = await glob("src/assets/scss/**/*.scss")
            const assetRoot = "dist/scss"
            for (const file of scssFiles) {
                const targetPath = `${assetRoot}/${file.replace("src/assets/scss/", "")}`
                await mkdir(targetPath.split("/").slice(0, -1).join("/"), { recursive: true })
                await copyFile(file, targetPath)
            }

            await copyFile("package.json", "dist/package.json")

            exec("npx eslint dist --fix")
        },
    },
    alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    entries: [{
        input: "src/hooks/index.ts",
        name: "index",
        declaration: true,
    }, {
        input: "src/tools/BreakpointTool/index.ts",
        name: "addons/breakpoints/index",
        declaration: true,
    }, {
        input: "src/tools/BreakpointTool/preview.tsx",
        name: "addons/breakpoints/preview",
        declaration: true,
    }, {
        input: "src/tools/BreakpointTool/manager.tsx",
        name: "addons/breakpoints/manager",
        declaration: true,
    }, {
        input: "src/tools/StateTool/index.ts",
        name: "addons/state/index",
        declaration: true,
    }, {
        input: "src/tools/StateTool/preview.tsx",
        name: "addons/state/preview",
        declaration: true,
    }, {
        input: "src/tools/StateTool/manager.tsx",
        name: "addons/state/manager",
        declaration: true,
    }],
    outDir: "dist",
    externals: [
        "ast-types",
        "react",
        "react-dom",
        "@storybook/icons",
    ],
    rollup: {
        esbuild: {
            jsx: "automatic",
        },
        emitCJS: true,
        inlineDependencies: true,
    },
    declaration: "compatible",
}])
