import { ComponentStory } from "@storybook/react";
import {Breadcrumb, BreadcrumbProps} from "./index";

export default {
    title: "shared/Breadcrumb",
    component: Breadcrumb
}

const Template: ComponentStory<typeof Breadcrumb> = (args: BreadcrumbProps) => Breadcrumb(args)

export const Default = Template.bind({})

Default.args = {
    children: "text"
}