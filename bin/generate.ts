/* eslint-disable import-x/no-nodejs-modules */

import { entriesOf, isObj, isString } from "../src/util/helpers"
import type { Obj } from "../src/types/util"
import type { Tokens } from "@/assets/tokens"
import { fileURLToPath } from "url"
import { toJson } from "../src/util/parse"
import { writeFile } from "fs/promises"

export function buildScssMap(obj: Obj, name = "", spaces = 4, indent = 0): string {
    const ind = " ".repeat((indent + 1) * spaces)
    return entriesOf(obj).reduce((x, [k, v]) => {
        const key = /[ ]/u.test(k) ? `"${k}"` : k
        if (isObj(v)) {
            return `${x}${ind}${key}: ${buildScssMap(v, "", spaces, indent + 1)},\n`
        }
        const value = isString(v) ? v : toJson(v)
        const quoted = /^[0-9]+\/[0-9]+$/u.test(value)
            ? `"${value}"`
            : value
        return `${x}${ind}${key}: ${quoted},\n`
    }, name ? `$const-${name}: (\n` : "(\n") + " ".repeat(indent * spaces) + (indent ? ")" : ");" + "\n")
}

export async function buildTokens(tokens: Tokens, spaces = 4) {
    const useSassMap = "@use \"sass:map\";\n\n"

    const files: string[] = []

    for (const [k, v] of entriesOf(tokens)) {
        const { file, data } = v as { file: string, data: Obj }
        const path = fileURLToPath(import.meta.resolve(`../src/assets/scss/tokens/_${file}.scss`))
        const content = useSassMap + buildScssMap(data, k, spaces)
        await writeFile(path, content)
        files.push(content)
    }

    return files
}

export async function loadTokens(): Promise<Tokens> {
    const path = `${fileURLToPath(import.meta
        .resolve("../src/assets/tokens.ts"))}?v=${Date.now()}`

    const module = await import(path) as { default: Tokens }

    return module.default
}

void loadTokens().then(buildTokens)
