import React from "react"
import { IconBase } from "../../lib/ui/IconBase"
import { IconName } from "../../types/helpers"

export type CardRadioProps = {
    checked: boolean
    title: string
    description?: string
    icon: IconName
}

export default function CardRadio(props: CardRadioProps) {
    const classes = (): string => {
        const classes: string[] = [
            'card-radio'
        ]

        if (props.checked) {
            classes.push('is-checked')
        }

        return classes.join(' ')
    }

    const icon = (
        <IconBase 
            className="card-radio__icon"
            name={props.icon}
        />
    )

    const main = (
        <div className="card-radio__main">
            <h3 className="card-radio__title">{props.title}</h3>
            {props.description && (
                <p className="card-radio__description">
                    {props.description}{props.description}
                </p>
            )}
        </div>
    )

    return (
        <article className={classes()}>
            {icon}
            {main}
        </article>
    )
}