import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview"
import * as projectAnnotations from "./preview"
import * as reactMetaState from "../../src/tools/preview.tsx"
import { setProjectAnnotations } from "@storybook/react-vite"

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations, reactMetaState])
