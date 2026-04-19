import type { ComponentState } from "@/types/com"

export const ADDON_ID = "react-meta-state"
export const TOOL_ID = `${ADDON_ID}/tool`
export const PANEL_ID = `${ADDON_ID}/panel`
export const TAB_ID = `${ADDON_ID}/tab`

export const EVENTS = {
    RESULT: `${ADDON_ID}/result`,
    REQUEST: `${ADDON_ID}/request`,
}

export const DEFAULT_COMPONENT_STATE: ComponentState = {
    selected: false,
    hover: false,
    focusWithin: false,
    focus: false,
    pressed: false,
    active: false,
    highlighted: false,
    disabled: false,
}

export const THEME = {
    Light: "light",
    Dark: "dark",
    Cyncly: "cyncly",
} as const
