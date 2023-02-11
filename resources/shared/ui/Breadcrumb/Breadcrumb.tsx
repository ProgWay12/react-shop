import React from "react";
import { DefaultProps } from "../../types/helpers";
import { IconBase } from "../../lib/ui/IconBase";

export type BreadcrumbProps = {
    href: string
} & DefaultProps

export default function Breadcrumb(props: BreadcrumbProps) {
    const classes = () => {
        const classes: string[] = [
            'breadcrumb'
        ]

        if (props.className) {
            classes.push(props.className)
        }

        return classes.join(' ')
    }

    return (
        <a href={props.href} className={classes()}>
            <IconBase className="breadcrumb__icon" name="arrow-left" />
            <span className="breadcrumb__title">{props.children}</span>
        </a>
    )
}