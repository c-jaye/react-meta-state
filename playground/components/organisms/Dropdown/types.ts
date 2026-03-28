import type { BaseProps } from "@/types/com"

export interface DropdownProps extends BaseProps<"div", never, {}> {
    items?: { label: string, value: string }[]
    value?: string
}
