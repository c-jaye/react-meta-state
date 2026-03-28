import type { Preview } from "@storybook/react-vite"
import { StrictMode } from "react"

import "../assets/scss/main.scss"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: "todo",
        },
    },
    decorators: [
        (Story) => {
            return (
                <StrictMode>
                    <Story />
                </StrictMode>
            )
        },
    ],
}

export default preview
