import type { Meta } from "@storybook/react-vite"
import { generateStateStory } from "@/configs/storyTools"

import TestCard from "."

const meta: Meta<typeof TestCard> = {
    title: "Components/Molecules/TestCard",
    component: TestCard,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        title: "Spaces Flex",
        caption: "KITCHEN, BATHROOM",
        description: "Achieve your full creative and business potential with Spaces Flex. From inspiring designs to efficient project quotation, transform every aspect of your customer journey.",
        imgSrc: "https://www.cyncly.com/siteassets/assets/cyncly/homepage/bath-showroom.jpg",
        logoSrc: "https://www.cyncly.com/siteassets/assets/cyncly/homepage/spacesflex-icon-1.png",
        buttons: [
            { variant: "primary", label: "Request a demo", to: "https://spaces.cyncly.com/spaces-flex-demo.html" },
            { variant: "tertiary", label: "Product details", to: "https://www.cyncly.com/products/spaces-flex" },
        ],
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
