import type { BaseProps } from "@/types/com"
import type { DropdownListItemProps } from "~/DropdownListItem/types"

export interface DropdownListProps extends BaseProps<"div", "onChange", {}> {
    items?: DropdownListItemProps[]
    value?: string
    onSelection?: (value?: string) => void
}
