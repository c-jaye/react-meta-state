import { BREAKPOINT_ADDON_ID, BREAKPOINT_TOOL_ID } from "@/const/state"
import { addons, types } from "storybook/manager-api"
import { BreakpointTool } from "./components/BreakpointTool"

export default addons.register(BREAKPOINT_ADDON_ID, (api) => {
    addons.add(BREAKPOINT_TOOL_ID, {
        title: "Breakpoint Tool",
        type: types.TOOL,
        match: ({ viewMode, tabId }) => viewMode === "story" && !tabId,
        render: () => <BreakpointTool api={api} />,
    })
})
