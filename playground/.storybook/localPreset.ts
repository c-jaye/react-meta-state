// eslint-disable-next-line import-x/no-nodejs-modules
import { fileURLToPath } from "node:url"

export function previewAnnotations(entry = []) {
    return [
        ...entry,
        fileURLToPath(import.meta.resolve("../../dist/addons/state/preview.mjs")),
        fileURLToPath(import.meta.resolve("../../dist/addons/breakpoints/preview.mjs")),
    ]
}

export function managerEntries(entry = []) {
    return [
        ...entry,
        fileURLToPath(import.meta.resolve("../../dist/addons/state/manager.mjs")),
        fileURLToPath(import.meta.resolve("../../dist/addons/breakpoints/manager.mjs")),
    ]
}
