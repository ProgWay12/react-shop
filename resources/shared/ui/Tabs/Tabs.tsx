import React, {useEffect, useRef, useState} from "react";
import {Transition} from "../../lib/ui/Transition";
import {DefaultProps} from "../../types/helpers";

export type TabOption = {
    id: number | string
    text: string
}

export type TabsProps = {
    value: TabOption['id']
    list: TabOption[]
} & DefaultProps & TabsHandlers

export type TabsHandlers = {
    changeHandler: (id: TabOption['id']) => void
}

export default function Tabs(props: TabsProps) {
    const listRef = useRef([])
    const [value, setValue] = useState(props.value)
    const [isToggle, setIsToggle] = useState(false)
    const [toggleStyles, setToggleStyles] = useState({
        transform: null as null | string
    })

    let timeout = {} as ReturnType<typeof setTimeout>

    const toggle = <Transition animationName="fade" animationKey={isToggle}>
        {isToggle && (<div className="tabs__toggle" style={toggleStyles}/>)}
    </Transition>

    const list = <div className="tabs__list">
        {props.list.map(tab => (
            <button
                key={tab.id}
                className={`${tab.id === value && 'is-active'} tabs__option`}
                type="button"
                role="button"
                ref={option => listRef.current.push(option)}

                onClick={() => tabClick(tab.id)}
            >
                {tab.text}
            </button>
        ))}
    </div>

    const tabClick = (id: TabOption['id']) => {
        setValue(id)
        props.changeHandler(id)
        calculateToggleStyles(id)
    }

    const calculateToggleStyles = (id: TabsProps['value']) => {
        clearTimeout(timeout)
        const index = props.list.findIndex(item => item.id === id)
        const currentItem = listRef.current[index]
        const parentItem = listRef.current[0].parentNode

        if (currentItem && parentItem) {
            const offsetTop =
                Math.floor(currentItem.getBoundingClientRect().top) -
                Math.floor(parentItem.getBoundingClientRect().top)

            setToggleStyles({
                transform: `translate(0, ${offsetTop}px)`
            })
            setIsToggle(true)
        }
    }

    useEffect(() => {
        calculateToggleStyles(props.value)
    }, [props.value])

    return <div className='tabs'>
        {toggle}
        {list}
    </div>
}