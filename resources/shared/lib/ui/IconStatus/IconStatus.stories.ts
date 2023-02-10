import { ComponentStory } from "@storybook/react";
import IconStatus, { IconStatusProps } from "./IconStatus";

export default {
    title: 'shared/lib/IconStatus',
    component: IconStatus
}

const Template: ComponentStory<typeof IconStatus> = (args: IconStatusProps) => IconStatus(args)

export const Default = Template.bind({})

Default.args = {
    name: 'check'
}