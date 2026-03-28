import type { BaseProps } from "@/types/com"
import type { JSONPrimitive } from "@/types/util"

export interface DropdownListItemProps<T extends JSONPrimitive = string> extends BaseProps<"div", never, {}> {
    value: T
    label: string
    selected?: boolean
    onSelection?: (value: T) => void
}
