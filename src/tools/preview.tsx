import type { ProjectAnnotations, Renderer } from "storybook/internal/types"
import { useEffect, useMemo } from "react"
import type { ComponentState } from "@/hooks"
import { TOOL_ID } from "@/const/state"
import { toJson } from "@/util/parse"

const preview: ProjectAnnotations<Renderer> = {
    decorators: [
        (Story, { globals, canvasElement }) => {
            const canvas = canvasElement as ParentNode

            const data = useMemo(() => globals[TOOL_ID] as ComponentState ?? {}, [globals])

            useEffect(() => {
                canvas.querySelectorAll("[data-rms]").forEach((el) => {
                    el.setAttribute("data-rms", toJson(data))
                })
            }, [data, canvas])

            return <Story />
        },
    ],
    initialGlobals: {
        [TOOL_ID]: {},
    },
}

export default preview
