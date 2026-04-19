import type { Meta } from "@storybook/react-vite"
import { generateStateStory } from "@/configs/storyTools"
import { useState } from "react"

import DropdownListItem from "."

const meta: Meta<typeof DropdownListItem> = {
    title: "Components/Atoms/DropdownListItem",
    component: DropdownListItem,
    parameters: {
        layout: "fullscreen",
    },
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
}

export default meta

export const All = generateStateStory(meta, "all")
export const Idle = generateStateStory(meta, "idle")
export const Selected = generateStateStory(meta, "selected")
export const Hover = generateStateStory(meta, "hover")
export const Active = generateStateStory(meta, "active")
export const Highlighted = generateStateStory(meta, "highlighted")
export const FocusWithin = generateStateStory(meta, "focusWithin")
export const Focus = generateStateStory(meta, "focus")
export const Pressed = generateStateStory(meta, "pressed")
export const Disabled = generateStateStory(meta, "disabled")
