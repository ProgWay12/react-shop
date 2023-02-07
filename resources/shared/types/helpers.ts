import {ReactNode} from "react";

export type SizePropsType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type ViewPropsType =
    | 'brand'
    | 'secondary'
    | 'base'
    | 'outline'
    | 'surface'
    | 'flat'
    | 'flat-brand'
    | 'critical'
    | 'warning'
    | 'success'
export type DisabledPropsType = boolean | ''
export type TagPropsType = 'div' | 'a' | 'button' | 'label' | 'strong'
export type DirectionPropsType = 'row' | 'column'

export type Maybe<T> = null | undefined | T
export type IconName =
    | 'close'
    | 'edit'
    | 'filter'
    | 'income'
    | 'minus'
    | 'placeholder'
    | 'plus'
    | 'search'
    | 'shop'
    | 'sort'
    | 'sort-vertical'
    | 'trash'
    | 'arrow-bottom'
    | 'arrow-left'
    | 'arrow-top'
    | 'card-bank'
    | 'cart'
    | 'check'

export type DefaultProps = {
    className?: string
    children?: ReactNode
}