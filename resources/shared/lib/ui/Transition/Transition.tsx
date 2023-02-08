import React, {useRef} from "react";
// @ts-ignore
import {SwitchTransition, CSSTransition} from "react-transition-group"
import {DefaultProps} from "../../../types/helpers";


export type TransitionProps = {
    animationKey: unknown
    animationName: string
} & DefaultProps

export default function Transition(props: TransitionProps) {
    const nodeRef = useRef(null)

    const classes = typeof props.className === "undefined" ?
        'transition' : props.className

    return <SwitchTransition mode="out-in">
        <CSSTransition
            key={props.animationKey}
            classNames={props.animationName}
            nodeRef={nodeRef}
            timeout={300}
        >
            <div ref={nodeRef} className={classes}>
                <>
                    {props.children}
                </>
            </div>
        </CSSTransition>
    </SwitchTransition>
}