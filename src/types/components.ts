export interface FontTypeConfig {
    fontSize?: number // --font-size
    letterSpacing?: number // --font-spacing
    lineHeight?: number // --font-line-height
    fontUnit?: string // --font-unit
}

export interface FontFaceConfig {
    fontFamily?: string // --font-family
    fontWeight?: string // --font-weight
    fontStyle?: string // --font-style
}

export interface FontMetricsConfig {
    ascent?: number // --fm-ascent
    capHeight?: number // --fm-cap-height
    exHeight?: number // --fm-ex-height
    descent?: number // --fm-descent
    lineGap?: number // --fm-line-gap
    size?: number // --fm-size
}
