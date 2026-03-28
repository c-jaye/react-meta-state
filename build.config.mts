import { URL, fileURLToPath } from "node:url"
import { copyFile, rm } from "node:fs/promises"
import { defineBuildConfig } from "unbuild"
import { exec } from "child_process"
import { glob } from "tinyglobby"

export default defineBuildConfig([{
    hooks: {
        async "build:done"() {
            const files = await glob("dist/**/*.d.(c)?ts")
            for (const file of files) {
                await rm(file)
            }
            exec("npx eslint dist --fix")
            await copyFile("package.json", "dist/package.json")
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
        input: "src/tools/index.ts",
        name: "addon/index",
        declaration: true,
    }, {
        input: "src/tools/preview.tsx",
        name: "addon/preview",
        declaration: true,
    }, {
        input: "src/tools/manager.tsx",
        name: "addon/manager",
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
