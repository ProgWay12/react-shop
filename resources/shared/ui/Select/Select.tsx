import React, {useState} from "react";
import {DefaultProps} from "../../types/helpers";
import {IconBase} from "../../lib/ui/IconBase";
import {Transition} from "../../lib/ui/Transition";

export type SelectOption = {
    id: number
    text: string
}

export type SelectProps = {
    value: SelectOption['id']
    list: SelectOption[]
} & DefaultProps & SelectHandlers

export type SelectHandlers = {
    changeHandler: (id: SelectOption['id']) => void
}

export default function Select(props: SelectProps) {
    const [value, setValue] = useState(props.value)
    const [isShow, setIsShow] = useState(false)

    /* FUNCTIONS */

    const getActiveOption = () => {
        return props.list.find(option => option.id === value).text
    }

    const classes = () => {
        const classes: string[] = [
            'select'
        ]

        if (isShow) {
            classes.push('is-active')
        }

        return classes.join(' ')
    }

    const optionClasses = (id: SelectOption['id']) => {
        const classes: string[] = [
            'select__option'
        ]

        if (id === value) {
            classes.push('select__option--active')
        }

        return classes.join(' ')
    }

    const onOptionClick = (id: SelectOption['id']) => {
        setValue(id)
        setIsShow(false)
        props.changeHandler(id)
    }

    /* TEMPLATE */

    const main = (
        <div
            className="select__main"

            onClick={() => setIsShow(!isShow)}
        >
            <Transition
                animationKey={value}
                animationName="fade"
                className="select__title-wrapper"
            >
                <div className="select__title">{getActiveOption()}</div>
            </Transition>
            <IconBase name="arrow-bottom" className="select__arrow"/>
        </div>
    )

    const option = (elem: SelectOption) => (
        <div
            key={elem.id}
            className={optionClasses(elem.id)}
            onClick={() => onOptionClick(elem.id)}
        >
            {elem.text}
        </div>
    )

    const dropdown =
        <Transition
            animationKey={isShow}
            className="select__wrapper"
            animationName="fade-top"
        >
            {isShow && (
                <div className="select__dropdown">
                    {props.list.map(elem => option(elem))}
                </div>
            )}
        </Transition>

    return (
        <div className={classes()}>
            {main}
            {dropdown}
        </div>
    )
}