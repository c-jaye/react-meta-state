import type { Preview } from "@storybook/react-vite"
import { StrictMode } from "react"
import tokens from "@/assets/tokens"

import "@/assets/scss/global.scss"

const preview: Preview = {
    parameters: {
        backgrounds: {
            options: {
                light: {
                    name: "Light",
                    value: tokens.themes.data.light["bg-idle"],
                },
                dark: {
                    name: "Dark",
                    value: tokens.themes.data.dark["bg-idle"],
                },
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
            backgrounds: {
                value: "light",
            },
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
