import { ComponentStory } from "@storybook/react";
import {CardProduct, CardProductProps} from "./index";
import { selectControl } from "../../../../../.storybook/libs/stories-utils";

export default {
    title: "shared/cards/CardProduct",
    component: CardProduct,
    argTypes: {
        view: selectControl([
            'base',
            'cart'
        ]),
        size: selectControl([
            's',
            'l'
        ])
    }
}

const Template: ComponentStory<typeof CardProduct> = (args: CardProductProps) => CardProduct(args)

export const Default = Template.bind({})

Default.args = {
    title: "Title",
    price: "1000",
    rating: '1.1',
    image: "/public/images/test/test.jpg",
    value: 1,
    rest: 10,
    changeHandler: () => console.log(123),
    clickHandler: () => console.log('click')
}