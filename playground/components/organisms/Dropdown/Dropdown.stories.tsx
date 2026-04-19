import type { Meta, StoryObj } from "@storybook/react-vite"
import tokens, { unit } from "@/assets/tokens"

import Dropdown from "."

const meta = {
    title: "Components/Organisms/Dropdown",
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
            <div style={{
                display: "grid",
                gap: "24px",
                gridAutoFlow: "column",
                overflow: "visible",
            }}
            >
                <Dropdown {...args} />
                <Dropdown {...args} />
            </div>
        )
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const All: Story = {
    render: (args) => {
        return (
            <div style={{
                display: "grid",
                height: "100%",
                width: "max-content",
                gridAutoFlow: "column",
                gridAutoColumns: "1fr",
                gridTemplateRows: "max-content max-content",
                gap: unit(4),
                padding: unit(4),
                overflow: "visible",
                background: tokens.themes.data.dark["fg-idle"],
            }}
            >
                <label className="prose"><span>Idle</span></label>
                <Dropdown {...args} />
                <label className="prose"><span>Selected</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { selected: true } }} />
                <label className="prose"><span>Hover</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { hover: true } }} />
                <label className="prose"><span>Active</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { active: true } }} />
                <label className="prose"><span>Highlighted</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { highlighted: true } }} />
                <label className="prose"><span>Focus Within</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { focusWithin: true } }} />
                <label className="prose"><span>Focus</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { focus: true } }} />
                <label className="prose"><span>Pressed</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { pressed: true } }} />
                <label className="prose"><span>Disabled</span></label>
                <Dropdown {...args} stateProps={{ stateOverride: { disabled: true } }} />
            </div>
        )
    },
}

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
