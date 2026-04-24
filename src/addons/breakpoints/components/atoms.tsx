import { BrowserIcon, DiamondIcon, MobileIcon, TabletIcon, WatchIcon } from "@storybook/icons"
import type { ReactNode } from "react"
import type { Viewport } from "../types"
import { styled } from "storybook/theming"

export const iconsMap: Record<NonNullable<Viewport["type"]>, React.ReactNode> = {
    desktop: <BrowserIcon />,
    mobile: <MobileIcon />,
    tablet: <TabletIcon />,
    watch: <WatchIcon />,
    other: <DiamondIcon />,
}

export const ViewportControls = styled.div({
    display: "flex",
    gap: 6,
})

export const ViewportDimensions = styled.div({
    display: "flex",
    gap: 2,
})

export const Dimensions = styled.div(({ theme }) => ({
    display: "flex",
    gap: 2,
    marginLeft: 20,
    fontFamily: theme.typography.fonts.mono,
    fontSize: theme.typography.size.s1 - 1,
    fontWeight: theme.typography.weight.regular,
    color: theme.color.inverseText,
}))

export const Wrapper = styled.div<{ after?: ReactNode, before?: ReactNode }>(
    ({ after, before, theme }) => ({
        "position": "relative",
        "display": "flex",
        "alignItems": "center",
        "width": "100%",
        "height": 32,
        "paddingInline": 9,
        "fontSize": theme.typography.size.s1,
        "color": theme.color.inverseText,
        "background": theme.input.background,
        "boxShadow": `${theme.input.border} 0 0 0 1px inset`,
        "borderRadius": theme.input.borderRadius,
        "svg": {
            display: "block",
        },
        "input": {
            "width": "100%",
            "height": "100%",
            "minHeight": "100%",
            "flex": "1 1 auto",
            "paddingInline": 0,
            "fontSize": "inherit",
            "background": "transparent",
            "border": "none",
            "boxShadow": "none",
            "color": theme.input.color,
            "&:focus, &:focus-visible": {
                boxShadow: "none",
                outline: "none",
            },
        },
        "input:disabled": {
            background: "transparent",
        },
        "input + div": {
            paddingInline: 0,
            fontSize: "inherit",
        },
        "&:has(input:focus-visible)": {
            outline: `2px solid ${theme.color.secondary}`,
            outlineOffset: -2,
        },
        "&:has(input:disabled)": {
            background: theme.base === "light" ? theme.color.lighter : theme.input.background,
            cursor: "not-allowed",
        },
        ...(after && { paddingRight: 2 }),
        ...(before && { paddingLeft: 2 }),
    }),
)
