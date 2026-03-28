import { useCallback, useEffect, useState } from "react"
import type { DropdownListProps } from "./types"
import classNames from "classnames"
import useComponentState from "@/hooks/useComponentState"

import DropdownListItem from "~/DropdownListItem"

import scss from "./dropdown-list.module.scss"

export const DropdownList = ({
    items = [],
    value,
    onKeyDown,
    onSelection: _onSelection,
    stateProps,
    className,
    children,
    ...props
}: DropdownListProps) => {
    const { ref } = useComponentState(stateProps)

    const { ref: itemRef, refs: itemRefs } = useComponentState()

    const [selectedValue, setSelectedValue] = useState<string | undefined>(value)
    const [highlightedValue, setHighlightedValue] = useState<string | undefined>(value)

    const onSelection = useCallback((value?: string) => {
        setHighlightedValue(value)
        setSelectedValue(value)
        _onSelection?.(value)
    }, [_onSelection])

    const onKey = useCallback((ev: React.KeyboardEvent<HTMLDivElement>) => {
        if (["ArrowUp", "ArrowDown"].includes(ev.key)) {
            const index = highlightedValue ? Math.max(items.findIndex(x => x.value === highlightedValue), 0) : 0
            const offset = ev.key === "ArrowUp" ? -1 : 1
            const value = items[Math.min(Math.max(index + offset, 0), items.length - 1)].value
            setHighlightedValue(value)
            itemRefs.current[value]!.scrollIntoView({ inline: "center", block: "center", behavior: "smooth" })
            ev.preventDefault()
        }
        if (["Enter", " "].includes(ev.key)) {
            onSelection?.(highlightedValue)
            ev.preventDefault()
        }
        onKeyDown?.(ev)
    }, [highlightedValue, items, itemRefs, onSelection, onKeyDown])

    useEffect(() => {
        setSelectedValue(value)
        setHighlightedValue(value ?? "")
    }, [value])

    return (
        <div
            {...props}
            ref={ref}
            className={classNames(scss.dropdownList, className)}
            tabIndex={-1}
            onKeyDown={onKey}
        >
            {children ?? items.map(({ value: v, ...props }) => (
                <DropdownListItem
                    {...props}
                    className={classNames(scss.dropdownListItem)}
                    key={v}
                    value={v}
                    selected={v === selectedValue}
                    onSelection={onSelection}
                    stateProps={{
                        ref: el => itemRef(el, v),
                        stateOverride: {
                            highlighted: { default: v === highlightedValue && v !== selectedValue },
                        },
                    }}
                />
            ))}
        </div>
    )
}
