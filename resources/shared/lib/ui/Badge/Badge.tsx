import React from "react";
import {DefaultProps, ViewPropsType} from "../../../types/helpers";

export type BadgeProps = {
    view?: Extract<ViewPropsType, 'warning' | 'success'>
} & DefaultProps

export default function Badge(props: BadgeProps) {
    const classes = () =>
        `badge badge--view-${props.view || 'success'} ${props.className}`

    return <span className={classes()}>
        {props.children}
    </span>
}