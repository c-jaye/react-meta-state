import { fileURLToPath } from "node:url"

export function previewAnnotations(entry = []) {
    return [...entry, fileURLToPath(import.meta.resolve("../../dist/addon/preview.mjs"))]
}

export function managerEntries(entry = []) {
    return [...entry, fileURLToPath(import.meta.resolve("../../dist/addon/manager.mjs"))]
}
