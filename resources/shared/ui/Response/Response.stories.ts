import { ComponentStory } from '@storybook/react'
import {Response, ResponseProps} from './index'

export default {
    title: "shared/Reponse",
    component: Response
}

const Template: ComponentStory<typeof Response> = (args: ResponseProps) => Response(args)

export const Default = Template.bind({})

Default.args = {
    icon: "check",
    title: "Title",
    description: "text",
    button: {
        iconLeft: 'check',
        text: "button",
        ariaLabel: "text",
        clickHandler: () => console.log("click")
    }
}