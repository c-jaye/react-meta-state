import type { Meta, StoryObj } from "@storybook/react-vite"

import TestCard from "."

const meta = {
    title: "Components/Molecules/TestCard",
    component: TestCard,
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
} satisfies Meta<typeof TestCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
