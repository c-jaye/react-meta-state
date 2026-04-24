import { STATE_ADDON_ID, STATE_TOOL_ID } from "@/const/state"
import { addons, types } from "storybook/manager-api"
import { StateTool } from "./components/StateTool"
import { renderLabel } from "./manager-helpers"

export default addons.register(STATE_ADDON_ID, (api) => {
    addons.add(STATE_TOOL_ID, {
        type: types.TOOL,
        title: "React Meta State",
        match: ({ viewMode }) => viewMode === "story",
        render: () => <StateTool api={api} />,
    })

    addons.setConfig({
        sidebar: { renderLabel },
    })
})
