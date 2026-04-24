import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview"
import * as breakpointTool from "@/addons/breakpoints/preview"
import * as projectAnnotations from "./preview"
import * as reactMetaState from "@/addons/state/preview"
import { setProjectAnnotations } from "@storybook/react-vite"

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations, reactMetaState, breakpointTool])
