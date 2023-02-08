import React, {useEffect, useState} from "react";
import {DefaultProps, IconName} from "../../types/helpers";
import {Button} from "../../lib/ui/Button";
import {Input, InputProps} from "../Input";

export type InputNumberProps = {
    min?: number
    value: number
    max: number
    iconLeft?: IconName
    iconRight?: IconName
} & InputNumberHandlers & DefaultProps

export type InputNumberHandlers = {
    changeHandler: (value: InputNumberProps['value']) => void
}

type ChangeOperation = 'minus' | 'plus' | 'input'
type ButtonOperation = Exclude<ChangeOperation, 'input'>

export default function InputNumber(props: InputNumberProps) {
    const [value, setValue] = useState(props.value)

    const onChange = (operation?: ChangeOperation, inputValue?: InputProps['value']) => {
        let newValue = value

        if (operation === 'minus') {
            newValue--
        } else if (operation === 'plus') {
            newValue++
        } else {
            newValue = Number(inputValue)
        }

        const valid = validate(newValue)

        setValue(valid)
        props.changeHandler(valid)
    }

    const validate = (newValue: InputNumberProps['value']) => {
        if (!isValid(newValue)) {
            const min = props.min ?? 0

            return newValue - min < props.max - newValue ?
                min : props.max
        }

        return newValue
    }

    const isValid = (newValue: InputNumberProps['value']) => {
        const min = props.min ?? 0

        return min <= newValue && newValue <= props.max
    }


    const isButtonDisabled = (operation: ButtonOperation) => {
        if (operation === 'minus' && typeof props.min !== 'undefined') {
            return value === props.min
        }
        if (operation === 'plus' && typeof props.max !== 'undefined') {
            return value === props.max
        }

        return false
    }

    const buttonMinus = (
        <Button
            iconLeft={props.iconLeft || 'minus'}
            disabled={isButtonDisabled('minus')}
            className={`input-number__button input-number__button--minus`}
            ariaLabel="minus"

            clickHandler={() => onChange('minus')}
        />
    )

    const buttonPlus = (
        <Button
            iconLeft={props.iconRight || 'plus'}
            disabled={isButtonDisabled('plus')}
            className={`input-number__button input-number__button--plus`}
            ariaLabel="minus"

            clickHandler={() => onChange('plus')}
        />
    )

    const input = (
        <Input
            value={String(value)}
            view="flat"
            type="number"
            className="input-number__value"

            inputHandler={(value) => onChange('input', value)}
        />
    )

    useEffect(() => {
        if (props.value !== value) {
            setValue(props.value)
        }
    }, [props.value])

    return (
        <div className="input-number">
            {buttonMinus}
            {input}
            {buttonPlus}
        </div>
    )
}

