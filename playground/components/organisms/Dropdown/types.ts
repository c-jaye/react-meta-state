import type { BaseProps, JSONPrimitive, LabelValue } from "@/types"
import type { DropdownListItemProps } from "~/components/DropdownListItem"

export interface DropdownProps<T extends JSONPrimitive = JSONPrimitive> extends BaseProps<"div", never, {}> {
    items?: DropdownListItemProps<T>[]
    value?: T | null
    onSelection?: (item: LabelValue<T> | null) => void
}
