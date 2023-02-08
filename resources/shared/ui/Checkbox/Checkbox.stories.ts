import {Checkbox, CheckboxProps} from "./index";
import {ComponentStory} from "@storybook/react";

export default {
    title: "shared/Checkbox",
    component: Checkbox
}

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => Checkbox(args)

export const Default = Template.bind({})

Default.args = {
    value: false,
    name: 'test',
    children: "test",
    changeHandler: () => console.log(123)
}