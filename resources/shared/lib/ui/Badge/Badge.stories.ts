import {Badge, BadgeProps} from "./index";
import {selectControl} from "../../../../../.storybook/libs/stories-utils";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'shared/lib/Badge',
    component: Badge,
    argTypes: {
        view: selectControl([
            'success',
            'warning'
        ])
    }
}

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => Badge(args)

export const Default = Template.bind({})

Default.args = {
    children: 1
}