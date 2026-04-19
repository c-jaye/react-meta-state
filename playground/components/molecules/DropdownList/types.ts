import type { JSONPrimitive, LabelValue } from "@/types/util"
import type { BaseProps } from "@/types/com"
import type { DropdownListItemProps } from "~/DropdownListItem/types"

export interface DropdownListProps<T extends JSONPrimitive = JSONPrimitive> extends BaseProps<"div", "onChange", {}> {
    items?: DropdownListItemProps<T>[]
    value?: T | null
    onSelection?: (value: LabelValue<T> | null) => void
    onSearch?: (term: string) => void
}
