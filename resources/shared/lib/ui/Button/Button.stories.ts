import { ComponentStory} from '@storybook/react';
import {Button, ButtonProps} from "./index";
import {booleanControl} from "../../../../../.storybook/libs/stories-utils";

export default {
    title: 'shared/lib/Button',
    component: Button,
    argTypes: {
        loading: booleanControl()
    }
}

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => Button(args)

export const Default = Template.bind({})

Default.args = {
    iconLeft: 'placeholder',
    children: 'Text'
}

const IconOnlyTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => Button(args)

export const IconOnly = IconOnlyTemplate.bind({})

IconOnly.args = {
    iconLeft: 'placeholder'
}