import type { Meta, StoryObj } from "@storybook/react-vite"
import type { BaseProps } from "@/types/com"
import type { DEFAULT_COMPONENT_STATE } from "@/const/state"
import type { FC } from "react"
import type { KeyOf } from "@/types/util"
import { deepMerge } from "@/util/merge"
import { unit } from "@/assets/tokens"

export function generateStateStory<T extends BaseProps>(
    meta: Meta<T>,
    state?: "all" | "idle" | KeyOf<typeof DEFAULT_COMPONENT_STATE>,
): StoryObj<typeof meta> {
    return {
        render: state === "all"
            ? (args: T) => {
                const Component = meta.component as FC<T>
                return (
                    <div style={{
                        display: "grid",
                        height: "100%",
                        width: "max-content",
                        gridAutoFlow: "column",
                        gridAutoColumns: "1fr",
                        gridTemplateRows: "max-content max-content",
                        gap: unit(4),
                        padding: unit(4),
                        overflow: "visible",
                    }}
                    >
                        <label className="prose"><span>Idle</span></label>
                        <Component {...args} />
                        <label className="prose"><span>Selected</span></label>
                        <Component {...args} stateProps={{ stateOverride: { selected: true } }} />
                        <label className="prose"><span>Hover</span></label>
                        <Component {...args} stateProps={{ stateOverride: { hover: true } }} />
                        <label className="prose"><span>Active</span></label>
                        <Component {...args} stateProps={{ stateOverride: { active: true } }} />
                        <label className="prose"><span>Highlighted</span></label>
                        <Component {...args} stateProps={{ stateOverride: { highlighted: true } }} />
                        <label className="prose"><span>Focus Within</span></label>
                        <Component {...args} stateProps={{ stateOverride: { focusWithin: true } }} />
                        <label className="prose"><span>Focus</span></label>
                        <Component {...args} stateProps={{ stateOverride: { focus: true } }} />
                        <label className="prose"><span>Pressed</span></label>
                        <Component {...args} stateProps={{ stateOverride: { pressed: true } }} />
                        <label className="prose"><span>Disabled</span></label>
                        <Component {...args} stateProps={{ stateOverride: { disabled: true } }} />
                    </div>
                )
            }
            : meta.render,
        args: state && !["all", "idle"].includes(state)
            ? deepMerge(meta.args, {
                stateProps: {
                    stateOverride: { [state]: true },
                },
            })
            : meta.args,
    } as StoryObj<typeof meta>
}
