import type { JSONPrimitive, LabelValue } from "@/types/util"
import type { BaseProps } from "@/types/com"

export interface DropdownListItemProps<T extends JSONPrimitive = JSONPrimitive> extends BaseProps<"div", never, {}> {
    value: T | null
    label: string
    selected?: boolean
    onSelection?: (value: LabelValue<T> | null) => void
}
