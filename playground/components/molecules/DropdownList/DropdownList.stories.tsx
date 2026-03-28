import type { Meta, StoryObj } from "@storybook/react-vite"

import DropdownList from "."

const meta = {
    title: "Test/DropdownList",
    component: DropdownList,
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
    render: args => (
        <div style={{ display: "grid", gap: "10px", overflow: "visible" }}>
            <DropdownList {...args} />
            <DropdownList {...args} />
            <DropdownList {...args} />
        </div>
    ),
} satisfies Meta<typeof DropdownList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
