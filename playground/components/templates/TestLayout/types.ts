import type { BaseProps } from "@/types/com"

export interface TestLayoutProps extends BaseProps<"div", never, {}> {
    unitNarrow?: string
    unitSquare?: string
    unitWide?: string
}
