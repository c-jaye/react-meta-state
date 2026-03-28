import type { DropdownListItemProps } from "./types"
import classNames from "classnames"
import useComponentState from "@/hooks/useComponentState"
import { useEffect } from "react"

import scss from "./dropdown-list-item.module.scss"

export const DropdownListItem = ({
    label,
    value,
    selected,
    onSelection,
    stateProps,
    className,
    ...props
}: DropdownListItemProps) => {
    const { ref, updateState } = useComponentState(stateProps)

    useEffect(() => updateState({ selected }), [selected, updateState])

    return (
        <div
            {...props}
            ref={ref}
            className={classNames(scss.dropdownListItem, className)}
            onClick={(ev) => {
                onSelection?.(value)
                props.onClick?.(ev)
            }}
        >
            <span className={classNames(scss.text)}>
                {label}
            </span>
        </div>
    )
}
