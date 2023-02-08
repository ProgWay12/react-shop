import {Select, SelectProps} from "./index";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'shared/Select',
    component: Select
}

const Template: ComponentStory<typeof Select> = (args: SelectProps) => Select(args)

export const Default = Template.bind({})

Default.args = {
    value: 1,
    list: [
        {
            id: 1,
            text: "first"
        },
        {
            id: 2,
            text: "second"
        },
        {
            id: 3,
            text: "third"
        }
    ],
    changeHandler: (id: number) => console.log(id)
}