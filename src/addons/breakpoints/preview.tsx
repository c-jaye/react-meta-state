import type { ProjectAnnotations, Renderer } from "storybook/internal/csf"
import { BREAKPOINT_PARAM_ID } from "@/const/state"
import { DEFAULT_VIEWPORT } from "./defaults"

const preview: ProjectAnnotations<Renderer> = {
    initialGlobals: {
        [BREAKPOINT_PARAM_ID]: DEFAULT_VIEWPORT,
    },
}

export default preview
