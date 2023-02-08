import React, {useEffect, useState} from "react";
import {DefaultProps, IconName, ViewPropsType} from "../../types/helpers";
import {IconBase} from "../../lib/ui/IconBase";

export type InputProps = {
    value: string | number
    type?: 'text' | 'number'
    icon?: IconName
    view?: Extract<ViewPropsType, 'base' | 'flat'>
    disabled?: boolean
    placeholder?: string
} & InputHandlers & DefaultProps

export type InputHandlers = {
    inputHandler: (value: InputProps['value']) => void
}

export default function Input(props: InputProps) {
    const [value, setValue] = useState(props.value)
    const [isFocus, setIsFocus] = useState(false)

    const classes = (): string => {
        const classes = [
            'input',
            `input--view-${props.view || 'base'}`
        ]

        if (props.disabled) {
            classes.push('is-disabled')
        }

        if (String(value).length > 0) {
            classes.push('is-filled')
        }

        if (isFocus) {
            classes.push('is-focus')
        }

        if (typeof props.icon !== "undefined") {
            classes.push('is-icon')
        }

        if (typeof props.className !== "undefined") {
            classes.push(props.className)
        }

        return classes.join(' ')
    }

    const onChange = () => {
        setIsFocus(false)
        props.inputHandler(value)
    }

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value

        if (props.type === 'number') {
            const regExp = new RegExp(/^\d+$/)

            if (regExp.test(newValue) || newValue.length === 0) {
                setValue(newValue)
            }
        } else {
            setValue(newValue)
        }
    }

    useEffect(() => {
        if (props.value !== value) {
            setValue(props.value)
        }
    }, [props.value])

    return <div className={classes()}>
        {props.icon && (<IconBase className="input__icon" name={props.icon} />)}
        <input
            value={value}
            placeholder={props.placeholder}
            className="input__main"

            onFocus={() => setIsFocus(true)}
            onChange={(event) => onInput(event)}
            onBlur={() => onChange()} />
    </div>
}