import type { Meta, StoryObj } from "@storybook/react-vite"

import DropdownList from "."

const meta = {
    title: "Components/Molecules/DropdownList",
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
        stateProps: { stateOverride: { active: true } },
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

export const Idle: Story = {}

export const Selected: Story = {
    args: {
        stateProps: { stateOverride: { selected: true } },
    },
}

export const Hover: Story = {
    args: {
        stateProps: { stateOverride: { hover: true } },
    },
}

export const Active: Story = {
    args: {
        stateProps: { stateOverride: { active: true } },
    },
}

export const Highlighted: Story = {
    args: {
        stateProps: { stateOverride: { highlighted: true } },
    },
}

export const FocusWithin: Story = {
    args: {
        stateProps: { stateOverride: { focusWithin: true } },
    },
}

export const Focus: Story = {
    args: {
        stateProps: { stateOverride: { focus: true } },
    },
}

export const Pressed: Story = {
    args: {
        stateProps: { stateOverride: { pressed: true } },
    },
}

export const Disabled: Story = {
    args: {
        stateProps: { stateOverride: { disabled: true } },
    },
}
