import React from "react";
import {DefaultProps, IconName} from "../../types/helpers";
import {IconBase} from "../../lib/ui/IconBase";
import {Badge} from "../../lib/ui/Badge";

export type CartProps = {
    view?: 'base' | 'small',
    counter: number,
    icon?: IconName
    href: string
} & DefaultProps

export default function Cart(props: CartProps) {
    const classes = `cart ${props.className}`

    const counterText = props.counter > 10 ? '...' : props.counter

    const basePart = <div className="cart__content">
        <p className="cart__title">Корзина</p>
        {props.icon && (
            <IconBase className="cart__icon--content" name={props.icon}/>
        )}
    </div>

    return <a className={classes} href={props.href}>
        <div className="cart__main">
            <IconBase className="cart__icon cart__icon--cart" name="cart" />
            <Badge
                className="cart__counter"
                view="warning"
            >{counterText}</Badge>
        </div>
        {props.view === 'base' && basePart}
    </a>
}