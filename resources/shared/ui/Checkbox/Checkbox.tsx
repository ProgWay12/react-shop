import React, {useState} from "react";
import {DefaultProps} from "../../types/helpers";
import {IconBase} from "../../lib/ui/IconBase";

export type CheckboxProps = {
    value: boolean
    name?: string
    disabled?: boolean
} & DefaultProps & CheckboxHandler

export type CheckboxHandler = {
    changeHandler: (value: CheckboxProps['value']) => void
}

export default function Checkbox(props: CheckboxProps) {
    const [value, setValue] = useState(props.value)

    const isChildren = typeof props.children !== 'undefined'

    const classes = () => {
        const classes: string[] = [
            'checkbox'
        ]

        if (value) {
            classes.push('is-active')
        }

        if (isChildren) {
            classes.push(props.className)
        }

        if (props.disabled) {
            classes.push('is-disabled')
        }

        return classes.join(' ')
    }

    const onChange = () => {
        setValue(!value)
        props.changeHandler(!value)
    }

    const checker = (
        <div className="checkbox__checker">
            <IconBase className="checkbox__icon" name="check" />
        </div>
    )

    const input = (
        <input
            // @ts-ignore
            value={value}
            name={props.name}
            disabled={props.disabled}
            type="checkbox"
            className="checkbox__value"

            onChange={() => onChange()}
        />
    )

    const title = (
        <div className="checkbox__title">
            {props.children}
        </div>
    )

    const main = (
        <div className="checkbox__main">
            {checker}
            {isChildren && title}
        </div>
    )
    return <div className={classes()}>
        {input}
        {main}
    </div>
}