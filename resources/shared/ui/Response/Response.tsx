import React from "react"
import { Button, ButtonProps } from "../../lib/ui/Button"
import { IconStatus } from "../../lib/ui/IconStatus"
import { DefaultProps, IconName } from "../../types/helpers"

export type ResponseProps = {
    icon: IconName
    title: string
    description?: string
    button: {
        iconLeft?: ButtonProps['iconLeft']
        text: string
        ariaLabel: ButtonProps['ariaLabel']
        iconRight?: ButtonProps['iconRight']   
        clickHandler: ButtonProps['clickHandler']
    }
} & DefaultProps

export default function Response(props: ResponseProps) {
    const classes = (): string => {
        const classes: string[] = [
            'response'
        ]

        if (props.className) {
            classes.push(props.className)
        }

        return classes.join(' ')
    }

    const iconStatus = (
        <IconStatus 
            name={props.icon} 
            className="response__icon" 
        />
    )
    
    const buttonAttrs: ButtonProps = {
        iconLeft: props.button.iconLeft,
        ariaLabel: props.button.ariaLabel,
        iconRight: props.button.iconRight,
        view: "secondary",
        clickHandler: props.button.clickHandler,
        className: "response__button"
    }

    const button = (
        <Button {...buttonAttrs}>{props.button.text}</Button>
    )

    return (
        <div className={classes()}>
            {iconStatus}
            <p className="response__title">
                {props.title}
            </p>
            {props.description && (
                <p className="response__description">
                    {props.description}
                </p>
            )}
            {button}
        </div>
    )
}