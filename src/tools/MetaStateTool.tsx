import { ADDON_ID, DEFAULT_COMPONENT_STATE, TOOL_ID } from "@/const/state"
import { type API, useGlobals } from "storybook/manager-api"
import { entriesOf, keysOf } from "@/util/helpers"
import { memo, useCallback, useEffect, useMemo } from "react"
import { ButtonIcon } from "@storybook/icons"
import type { ComponentState } from "@/types/com"
import { Select } from "storybook/internal/components"

export const MetaStateTool = memo(({ api }: { api: API }) => {
    const [globals, updateGlobals] = useGlobals()

    const data = useMemo(() => globals[TOOL_ID] as ComponentState ?? {}, [globals])
    const options = useMemo(() => keysOf(DEFAULT_COMPONENT_STATE)
        .map(k => ({ title: k, value: k })), [])

    const updateState = useCallback((state: Partial<ComponentState> = {}) => {
        updateGlobals({ [TOOL_ID]: state })
    }, [updateGlobals])

    useEffect(() => {
        void api.setAddonShortcut(ADDON_ID, {
            label: "Meta States",
            defaultShortcut: ["alt", "M"],
            actionName: "outline",
            showInMenu: true,
            action: () => updateState({}),
        })
    }, [api, updateState])

    return (
        <Select
            key={TOOL_ID}
            resetLabel="Reset meta states"
            onReset={updateState}
            icon={<ButtonIcon />}
            ariaLabel="Meta States"
            tooltip="Apply meta states"
            options={options}
            value={keysOf(data).filter(x => !!data[x])}
            multiSelect
            onChange={(selected) => {
                updateState(entriesOf(DEFAULT_COMPONENT_STATE).reduce((v, [k]) => ({ ...v, [k]: selected.includes(k) }), {}))
            }}
        />
    )
})
