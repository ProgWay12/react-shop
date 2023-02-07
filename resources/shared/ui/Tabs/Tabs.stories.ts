import {Tabs, TabsProps} from "./index";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'shared/Tabs',
    component: Tabs
}

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => Tabs(args)

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
            text: "looooooong"
        }
    ],
    changeHandler: (id: number) => console.log(id)
}