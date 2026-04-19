import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import DropdownListItem from "."

const meta = {
    title: "Components/Atoms/DropdownListItem",
    component: DropdownListItem,
    args: {
        label: "Dropdown List Item",
        value: "",
    },
    render: (args) => {
        const [value, setValue] = useState("")
        return (
            <div style={{ display: "grid", gap: "10px", overflow: "visible" }}>
                <DropdownListItem
                    {...args}
                    value="1"
                    label={`${args.label} 1`}
                    selected={value === "1"}
                    onClick={() => setValue("1")}
                />
                <DropdownListItem
                    {...args}
                    value="2"
                    label={`${args.label} 2`}
                    selected={value === "2"}
                    onClick={() => setValue("2")}
                />
                <DropdownListItem
                    {...args}
                    value="3"
                    label={`${args.label} 3`}
                    selected={value === "3"}
                    onClick={() => setValue("3")}
                />
            </div>
        )
    },
} satisfies Meta<typeof DropdownListItem>

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
