import type { API_HashEntry } from "storybook/internal/types"
import { STATE_ADDON_ID } from "@/const/state"

export function renderLabel(item: API_HashEntry) {
    if (item.type !== "story" && item.type !== "docs") {
        return
    }

    if (item.title.startsWith(STATE_ADDON_ID)) {
        return (
            <span>
                🌟
                {item.name}
            </span>
        )
    }
}
