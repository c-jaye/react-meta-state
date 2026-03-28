import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import DropdownListItem from "."

const meta = {
    title: "Test/DropdownListItem",
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
                    value="1"
                    label={`${args.label} 1`}
                    selected={value === "1"}
                    onClick={() => setValue("1")}
                />
                <DropdownListItem
                    value="2"
                    label={`${args.label} 2`}
                    selected={value === "2"}
                    onClick={() => setValue("2")}
                />
                <DropdownListItem
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

export const Primary: Story = {}
