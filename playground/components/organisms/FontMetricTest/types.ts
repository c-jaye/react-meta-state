import type { FontFaceConfig, FontMetricsConfig, FontTypeConfig } from "@/types/components"
import type { BaseProps } from "@/types"

export interface FontMetricsProps extends
    BaseProps<"div", never, {}>,
    FontTypeConfig,
    FontFaceConfig,
    FontMetricsConfig
{
    adjusted?: boolean
    padded?: boolean
    text?: string

    showMetrics?: boolean
    showBackground?: boolean
    showAscent?: boolean
    showCapHeight?: boolean
    showExHeight?: boolean
    showBaseline?: boolean
    showDescent?: boolean
}
