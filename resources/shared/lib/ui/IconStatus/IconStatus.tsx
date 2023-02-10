import React from "react"
import { DefaultProps, IconName } from "../../../types/helpers"
import { IconBase } from "../IconBase"

export type IconStatusProps = {
    name: IconName
} & DefaultProps

export default function IconStatus(props: IconStatusProps) {
    const classes = (): string => {
        const classes: string[] = [
            'icon-status'
        ]

        if (props.className) {
            classes.push(props.className)
        }

        return classes.join(' ')
    }
    
    const icon = (
        <IconBase className="icon-status__icon" name={props.name} />
    )

    return (
        <div className={classes()}>
            <div className="icon-status__main">
                {icon}
            </div>
        </div>
    )
}