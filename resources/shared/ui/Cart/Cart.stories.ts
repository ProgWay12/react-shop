import {Cart, CartProps} from "./index";
import {selectControl} from "../../../../.storybook/libs/stories-utils";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'shared/Cart',
    component: Cart,
    argTypes: {
        view: selectControl([
            'base',
            'small'
        ])
    }
}
const Template: ComponentStory<typeof Cart> = (args: CartProps) => Cart(args)

export const Default = Template.bind({})

Default.args = {
    counter: 1,
    view: 'base',
    href: 'https://css-tricks.com/animating-between-views-in-react/'
}
