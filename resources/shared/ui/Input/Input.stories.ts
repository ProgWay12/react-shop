import {Input, InputProps} from "./index";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'shared/Input',
    component: Input
}

const Template: ComponentStory<typeof Input> = (args: InputProps) => Input(args)

export const Default = Template.bind({})

Default.args = {
    value: "",
    inputHandler: (value: string) => console.log(value)
}