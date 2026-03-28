import { ADDON_ID } from "@/const/state"
import type { API_HashEntry } from "storybook/internal/types"

export function renderLabel(item: API_HashEntry) {
    if (item.type !== "story" && item.type !== "docs") {
        return
    }

    if (item.title.startsWith(ADDON_ID)) {
        return (
            <span>
                🌟
                {item.name}
            </span>
        )
    }
}
