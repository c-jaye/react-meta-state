import type { JSONPrimitive, LabelValue } from "@/types/util"
import type { BaseProps } from "@/types/com"
import type { DropdownListItemProps } from "~/DropdownListItem"

export interface DropdownProps<T extends JSONPrimitive = JSONPrimitive> extends BaseProps<"div", never, {}> {
    items?: DropdownListItemProps<T>[]
    value?: T | null
    onSelection?: (item: LabelValue<T> | null) => void
}
