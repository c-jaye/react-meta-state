import type { Obj } from "@/types/util"

export interface Aspect {
    ratio: string
    unit: string
}
export type Theme = Obj<string>

export interface Font {
    family: string
    weight: string
    style: string
    ascent: number
    capHeight: number
    exHeight: number
    descent: number
    lineGap: number
    size: number
}

export interface Tokens extends Obj {
    aspects: { file: string, data: Obj<Aspect> }
    themes: { file: string, data: Obj<Theme> }
    fonts: { file: string, data: Obj<Font> }
}

export const aspects = {
    narrow: {
        ratio: "9/64",
        unit: "1lvh",
    },
    square: {
        ratio: "2/3",
        unit: "1.1lvh",
    },
    wide: {
        ratio: "4/3",
        unit: "1.2lvh",
    },
} as const satisfies Obj<Aspect>

export const themes = {
    light: {
        "bg-idle": "#ddd",
        "bg-selected": "#bbb",
        "bg-pressed": "#aaa",
        "bg-highlighted": "#888",
        "bg-disabled": "#666",
        "shadow-active": "#000",
        "fg-idle": "#444",
        "fg-hover": "#000",
        "fg-inverse": "#ccc",
        "border-focus-within": "#0a0",
        "outline-focus": "#a00",
        "accent1": "#f00",
        "accent2": "#ff0",
        "accent3": "#0f0",
        "accent4": "#00f",
        "accent5": "#f0f",
    },
    dark: {
        "bg-idle": "#111",
        "bg-selected": "#333",
        "bg-pressed": "#444",
        "bg-highlighted": "#666",
        "bg-disabled": "#000",
        "shadow-active": "#fff",
        "fg-idle": "#999",
        "fg-hover": "#fff",
        "fg-inverse": "#333",
        "border-focus-within": "#0aa",
        "outline-focus": "#0aa",
        "accent1": "#f00",
        "accent2": "#ff0",
        "accent3": "#0f0",
        "accent4": "#00f",
        "accent5": "#f0f",
    },
    cyncly: {
        "bg-stone": "#f9f6f4",
        "bg-blue": "#292bff",
        "bg-blue-hover": "#0002d6",
        "border-light": "#ebe6e7",
        "text-primary": "#000000",
        "text-inverse": "#ffffff",
        "bg-shadow": "#00000033",
        "outline-focus": "#292bff",
    },
} as const satisfies Obj<Theme>

export const fonts = {
    OpenSansBold: {
        family: "Open Sans",
        weight: "600",
        style: "normal",
        ascent: 106.884766,
        capHeight: 71.386719,
        exHeight: 53.515625,
        descent: 29.296875,
        lineGap: 0,
        size: 100,
    },
} as const satisfies Obj<Font>

export default {
    aspects: { file: "aspect", data: aspects },
    themes: { file: "theme", data: themes },
    fonts: { file: "type", data: fonts },
} as const satisfies Tokens

export function unit(value: number) {
    return `calc(var(--aspect-unit) * ${value})`
}
