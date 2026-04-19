import type { Meta, StoryObj } from "@storybook/react-vite"

import TestLayout from "."

const meta: Meta<typeof TestLayout> = {
    title: "Breakpoints/TestLayout",
    component: TestLayout,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        unitNarrow: {
            control: "text",
            type: "string",
        },
        unitSquare: {
            control: "text",
            type: "string",
        },
        unitWide: {
            control: "text",
            type: "string",
        },
    },
    args: {
        unitNarrow: "1lvh",
        unitSquare: "1.1lvh",
        unitWide: "1.2lvh",
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
