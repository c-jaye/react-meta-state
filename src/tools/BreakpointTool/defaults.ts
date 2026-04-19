import type { ViewportMap, ViewportState } from "./types.ts"

export const VIEWPORT_MIN_WIDTH = 40
export const VIEWPORT_MIN_HEIGHT = 40
export const VIEWPORT_MAX_WIDTH = 800
export const VIEWPORT_MAX_HEIGHT = 400
export const DEFAULT_METRICS = {
    width: "100%",
    height: "100%",
    w: 0,
    h: 0,
}

export const DEFAULT_VIEWPORT: ViewportState = {
    name: "Responsive",
    type: "other",
    metrics: DEFAULT_METRICS,
    isRotated: false,
    isLocked: false,
} as const

export const VIEWPORTS = {
    "Narrow": {
        name: "Narrow",
        metrics: {
            width: "180px",
            height: "540px",
            w: 1,
            h: 3,
        },
        type: "mobile",
    },
    "Square": {
        name: "Square",
        metrics: {
            width: "360px",
            height: "540px",
            w: 2,
            h: 3,
        },
        type: "tablet",
    },
    "Wide": {
        name: "Wide",
        metrics: {
            width: "720px",
            height: "540px",
            w: 4,
            h: 3,
        },
        type: "desktop",
    },
    "Ultrawide": {
        name: "Ultrawide",
        metrics: {
            width: "1620px",
            height: "540px",
            w: 3,
            h: 1,
        },
        type: "other",
    },
    "Small mobile": {
        name: "Small mobile",
        metrics: {
            height: "568px",
            width: "320px",
            h: 0,
            w: 0,
        },
        type: "mobile",
    },
    "Large mobile": {
        name: "Large mobile",
        metrics: {
            height: "896px",
            width: "414px",
            h: 0,
            w: 0,
        },
        type: "mobile",
    },
    "Tablet": {
        name: "Tablet",
        metrics: {
            height: "1112px",
            width: "834px",
            h: 0,
            w: 0,
        },
        type: "tablet",
    },
    "Desktop": {
        name: "Desktop",
        metrics: {
            height: "1024px",
            width: "1280px",
            h: 0,
            w: 0,
        },
        type: "desktop",
    },
} as const satisfies ViewportMap
