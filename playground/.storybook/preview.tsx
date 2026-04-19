import type { Preview } from "@storybook/react-vite"
import { StrictMode } from "react"

import "../../src/assets/scss/global.scss"

const preview: Preview = {
    parameters: {
        backgrounds: {
            options: {
                light: { name: "Light", value: "#fff" },
                dark: { name: "Dark", value: "#000" },
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: "todo",
        },
        initialGlobals: {
            backgrounds: { value: "light" },
        },
    },
    decorators: [
        (Story) => {
            return (
                <StrictMode>
                    <div data-theme="dark">
                        <Story />
                    </div>
                </StrictMode>
            )
        },
    ],
}

export default preview
