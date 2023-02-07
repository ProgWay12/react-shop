import React, {useRef} from "react";
// @ts-ignore
import {SwitchTransition, CSSTransition} from "react-transition-group"
import {DefaultProps} from "../../../types/helpers";


export type TransitionFadeProps = {
    animationKey: unknown
} & DefaultProps

export default function TransitionFade(props: TransitionFadeProps) {
    const nodeRef = useRef(null)

    return <SwitchTransition mode="out-in">
        <CSSTransition
            key={props.animationKey}
            classNames="fade"
            nodeRef={nodeRef}
            timeout={300}
        >
            <div ref={nodeRef} className="button__container">
                <>
                    {props.children}
                </>
            </div>
        </CSSTransition>
    </SwitchTransition>
}