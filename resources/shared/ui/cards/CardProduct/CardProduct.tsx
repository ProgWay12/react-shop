import React, { useState } from "react"
import { Button, ButtonProps } from "../../../lib/ui/Button"
import { DefaultProps } from "../../../types/helpers"
import { IconBase } from "../../../lib/ui/IconBase"
import { InputNumber, InputNumberProps } from "../../InputNumber"

export type CardProductProps = {
    image: string
    title: string
    price: string
    rating: string
    view?: 'base' | 'cart'
    size?: 'l' | 's'
    value?: InputNumberProps['value']
    rest?: InputNumberProps['max']
} & DefaultProps & CardProductHandlers

export type CardProductHandlers = {
    clickHandler: () => void
    changeHandler?: InputNumberProps['changeHandler']
}

export default function CardProduct(props: CardProductProps) {
    const [value, setValue] = useState(props.value)

    const classes = (): string => {
        const classes: string[] = [
            'card-product',
            `card-product--view-${props.view || 'base'}`,
            `card-product--size-${props.size || 'l'}`
        ]

        if (props.className) {
            classes.push(props.className)
        }

        return classes.join(' ')
    }

    const onChange = (newValue: InputNumberProps['value']) => {
        console.log(newValue)
        setValue(newValue)
        props.changeHandler(newValue)
    }

    const button = () => {
        const view: ButtonProps['view'] = props.view === 'base' ?
            'secondary' : 'flat'
        
        return (
            <Button 
                view={view}
                ariaLabel="В корзину"
                className="card-product__button"
                clickHandler={props.clickHandler}
            >В корзину</Button>
        )
    }

    const inputNumber = () => {
        return (
            <InputNumber
                className="card-product__counter"
                value={value}
                max={props.rest}
                changeHandler={(newValue) => onChange(newValue)}
            />
        )
    }

    const actions = (
        <div className="card-product__actions">
            {button()}
            {props.view === 'cart' && (
                inputNumber()
            )}
        </div>
    )

    const isBottomActions = props.view === 'cart' && props.size === 's'

    return (
        <article className={classes()}>
            <div className="card-product__container">
                <div className="card-product__wrapper">
                    <img 
                        className="card-product__image" 
                        src={props.image} 
                        alt="продукт"
                    />
                    <div className="card-product__rating">
                        {props.rating}
                    </div>
                </div>
                <div className="card-product__main">
                    <div className="card-product__info">
                        <h3 className="card-product__title">{props.title}</h3>
                        <p className="card-product__price">
                            <span>{props.price}</span>
                            <IconBase className="card-product__income" name="income" />
                        </p>
                    </div>
                    {!isBottomActions && actions}
                </div>
            </div>
            {isBottomActions && actions}
        </article>
    )
}