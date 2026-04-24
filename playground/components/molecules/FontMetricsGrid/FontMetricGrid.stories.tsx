import type { Meta, StoryObj } from "@storybook/react-vite"
import { fontFaceArgTypes, fontMetricsArgTypes, fontTypeArgTypes } from "~/util/storyArgTypes"
import { LOREM_IPSUM } from "@/const/strings"

import FontMetricGrid, { type FontMetricGridProps } from "."

const meta: Meta<FontMetricGridProps> = {
    title: "Type/FontMetricGrid",
    component: FontMetricGrid,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        adjusted: {
            control: "boolean",
            type: "boolean",
        },
        padded: {
            control: "boolean",
            type: "boolean",
        },
        text: {
            control: "text",
            type: "string",
        },
        showMetrics: {
            control: "boolean",
            type: "boolean",
        },
        showBackground: {
            control: "boolean",
            type: "boolean",
        },
        showAscent: {
            control: "boolean",
            type: "boolean",
        },
        showCapHeight: {
            control: "boolean",
            type: "boolean",
        },
        showExHeight: {
            control: "boolean",
            type: "boolean",
        },
        showBaseline: {
            control: "boolean",
            type: "boolean",
        },
        showDescent: {
            control: "boolean",
            type: "boolean",
        },
        ...fontTypeArgTypes,
        ...fontFaceArgTypes,
        ...fontMetricsArgTypes,
    },
    args: {
        adjusted: true,
        padded: true,
        text: LOREM_IPSUM,

        fontSize: 64,
        letterSpacing: 0,
        lineHeight: 1,
        fontUnit: "1px",

        fontFamily: "Open Sans",
        fontWeight: "600",
        fontStyle: "normal",

        ascent: 106.884766,
        capHeight: 71.386719,
        exHeight: 53.515625,
        descent: 29.296875,
        lineGap: 0,
        size: 100,

        showMetrics: true,
        showBackground: true,
        showAscent: false,
        showCapHeight: true,
        showExHeight: true,
        showBaseline: true,
        showDescent: false,
    } as const,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
