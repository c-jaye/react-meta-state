import { ADDON_ID, TOOL_ID } from "@/const/state"
import { addons, types } from "storybook/manager-api"
import { MetaStateTool } from "./MetaStateTool"
import { renderLabel } from "./manager-helpers"

addons.register(ADDON_ID, (api) => {
    addons.add(TOOL_ID, {
        type: types.TOOL,
        title: "React Meta State",
        match: ({ viewMode }) => viewMode === "story",
        render: () => <MetaStateTool api={api} />,
    })

    addons.setConfig({
        sidebar: { renderLabel },
    })
})
