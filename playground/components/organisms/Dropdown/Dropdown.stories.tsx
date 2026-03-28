import type { Meta, StoryObj } from "@storybook/react-vite"

import Dropdown from "."

const meta = {
    title: "Test/Dropdown",
    component: Dropdown,
    args: {
        items: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
            { label: "Option 4", value: "4" },
            { label: "Option 5", value: "5" },
        ],
        value: "2",
    },
    render: (args) => {
        return (
            <div style={{ display: "grid", gap: "24px", gridAutoFlow: "column", overflow: "visible" }}>
                <Dropdown {...args} />
                <Dropdown {...args} />
            </div>
        )
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
