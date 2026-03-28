import { useEffect, useState } from "react"
import type { DropdownProps } from "./types"
import classNames from "classnames"
import useComponentState from "@/hooks/useComponentState"

import DropdownList from "~/DropdownList"

import scss from "./dropdown.module.scss"

export const Dropdown = ({
    items = [],
    value,
    stateProps,
    className,
    ...props
}: DropdownProps) => {
    const { ref, state, updateState } = useComponentState({
        ...stateProps,
        onStateChange: (s, k) => {
            if (!s.focusWithin) {
                updateState({ active: false })
            }
            updateButtonState({ disabled: s.disabled })
            stateProps?.onStateChange?.(s, k)
        },
    })

    const { ref: buttonRef, updateState: updateButtonState } = useComponentState({
        onStateChange: ({ disabled }) => updateState({ disabled }),
    })

    const [selectedValue, setSelectedValue] = useState<string | undefined>(value)

    useEffect(() => setSelectedValue(value), [value])

    return (
        <div
            {...props}
            ref={ref}
            className={classNames(scss.dropdown, className)}
        >
            <button
                ref={buttonRef}
                className={classNames(scss.button)}
                tabIndex={state.default?.active ? -1 : 0}
                onClick={() => updateState({ active: !state.default?.active })}
            >
                {items.find(item => item.value === selectedValue)?.label}
            </button>
            <DropdownList
                value={selectedValue}
                items={items}
                onSelection={(v) => {
                    setSelectedValue(v)
                    updateState({ active: false })
                    updateButtonState({ focus: true })
                }}
                onKeyDown={(ev) => {
                    if (ev.key !== "Escape") return
                    updateState({ active: false })
                    updateButtonState({ focus: true })
                    ev.preventDefault()
                }}
                stateProps={{
                    stateOverride: {
                        active: { default: state.default?.active },
                        focus: { default: state.default?.active },
                        disabled: { default: state.default?.disabled },
                    },
                }}
            />
        </div>
    )
}
