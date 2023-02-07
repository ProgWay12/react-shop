import React from "react";
import {DefaultProps, IconName} from "../../../types/helpers";

export type IconBaseProps = {
    name: IconName
} & DefaultProps

export default function IconBase(props: IconBaseProps) {
    const classes = `icon-base icon-base--${props.name} ${props.className ?? ''}`

    return <i className={classes}></i>
}