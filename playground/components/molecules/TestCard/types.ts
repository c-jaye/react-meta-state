import type { BaseProps } from "@/types/com"

export interface TestCardProps extends BaseProps<"div", never, {}> {
    // title: string
    caption: string
    description?: string
    imgSrc?: string
    logoSrc?: string
    buttons?: {
        variant: "primary" | "secondary" | "tertiary"
        label: string
        to: string
    }[]
}
