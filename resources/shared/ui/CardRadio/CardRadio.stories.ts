import { booleanControl } from "../../../../.storybook/libs/stories-utils";
import {CardRadio, CardRadioProps} from "./index";
import { ComponentStory } from "@storybook/react";

export default {
    title: "shared/CardRadio",
    component: CardRadio,
    argTypes: {
        checked: booleanControl()
    }
}

const Template: ComponentStory<typeof CardRadio> = (args: CardRadioProps) => CardRadio(args)

export const Default = Template.bind({})

Default.args = {
    title: "title",
    icon: "placeholder",
    description: "text"
}