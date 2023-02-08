import {InputNumber, InputNumberProps} from "./index";
import {numberControl} from "../../../../.storybook/libs/stories-utils";
import {ComponentStory} from "@storybook/react";

export default {
    title: "shared/InputNumber",
    component: InputNumber,
    argTypes: {
        min: numberControl(),
        max: numberControl()
    }
}

const Template: ComponentStory<typeof InputNumber> =
    (args: InputNumberProps) => InputNumber(args)

export const Default = Template.bind({})

Default.args = {
    value: 0,
    min: 0,
    max: 10,
    changeHandler: (value: number) => console.log(value)
}