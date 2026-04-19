export interface CanvasMetrics {
    size: number
    height: number
    ascent: number
    descent: number
    modifier: number
}

export interface FullCanvasMetrics extends CanvasMetrics {
    heightActual: number
    ascentActual: number
    descentActual: number
    modifierActual: number
}

export interface Metrics {
    ascent: number
    capHeight: number
    exHeight: number
    descent: number
    lineGap: number
    size: number
}

export interface FullMetrics {
    family: string
    weight: string
    canvasMixed: CanvasMetrics
    canvasCap: CanvasMetrics
    canvasEx: CanvasMetrics
    fontFace: FontFace
    opentype: opentype.Font
    final: Metrics
}
