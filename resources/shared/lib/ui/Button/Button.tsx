import React, {useEffect, useState} from "react";
import {DefaultProps, IconName, TagPropsType, ViewPropsType} from "../../../types/helpers";
import {IconBase} from "../IconBase";
import {useRef} from "react";
import Spinner from "../Spinner/Spinner";
import getOptionsByTag from "../../utils/getOptionsByTag";
import {Transition} from "../Transition";

export type ButtonProps = {
    tag?: Extract<TagPropsType, 'button' | 'a'>
    view?: Extract<ViewPropsType, 'brand' | 'secondary' | 'flat' | 'flat-brand' | 'critical'>
    loading?: boolean
    disabled?: boolean
    href?: string
    iconLeft?: IconName
    iconRight?: IconName
    ariaLabel: string
} & ButtonHandlers & DefaultProps

export type ButtonHandlers = {
    clickHandler: () => void
}

export default function Button(props: ButtonProps): JSX.Element {
    const [width, setWidth] = useState(null)

    const buttonRef = useRef(null)

    let timeout = {} as ReturnType<typeof setTimeout>
    let timeoutDelay = 300

    useEffect(() => {
        clearTimeout(timeout)

        if (props.loading) {
            setWidth(buttonRef.current.clientWidth)
        } else {
            timeout = setTimeout(() => {
                setWidth(null)
            }, timeoutDelay)
        }
    }, [props.loading])

    const classes = () => {
        const classes = [
            'button',
            `button--view-${props.view || 'brand'}`
        ]

        if (props.loading) {
            classes.push('is-loading')
        }

        if (props.disabled) {
            classes.push('is-disabled')
        }

        if (typeof props.children === 'undefined') {
            classes.push('is-icon-only')
        }

        return classes.join(' ')
    }

    const buttonIcon = (icon: IconName) => <IconBase className="button__icon" name={icon}></IconBase>
    const buttonMain = <div className="button__main">
        {props.children}
    </div>

    const buttonContent = <div className="button__content">
        {props.iconLeft ? buttonIcon(props.iconLeft) : null}
        {props.children ? buttonMain : null}
        {props.iconRight ? buttonIcon(props.iconRight) : null}
    </div>

    const buttonSpinner = <Spinner className="button__spinner" view={props.view}></Spinner>

    const buttonTransition =
        <Transition
            animationKey={props.loading === true}
            animationName="fade"
        >
            {!props.loading ? buttonContent : buttonSpinner}
        </Transition>

    const attrs = () => {
        return{
            className: classes(),
            ref: buttonRef,
            ...props.tag === 'a' && getOptionsByTag('a', props.href),
            ...props.tag === 'button' && getOptionsByTag('button'),
            ...props.tag === 'button' && {
                'aria-label': props.ariaLabel
            },
            disabled: props.disabled,
            style: {
                width
            }
        }
    }

    return props.tag === "a"
        ? (<a {...attrs()}>{buttonTransition}</a>)
        : (<button {...attrs()} onClick={() => props.clickHandler()}>{buttonTransition}</button>)
}