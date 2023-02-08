import React from "react";

export {}

declare global {

    type PartialRecord<K extends keyof any, T> = {
        [P in K]?: T
    }

    type argumentControlType = 'text' | 'select' | 'boolean' | 'array'

    interface argumentTypes {
        control: {
            type: argumentControlType
            options?: (string | boolean | null | number)[]
        }
        action?: string
        defaultValue?: string | boolean | null | number | []
        table?: {
            type: {
                summary: string
            }
        }
        description?: string
    }

    interface Stories {
        title: string
        component: typeof React.Component
        argTypes: Record<string, argumentTypes>
    }

    type TemplateFn = (args: any, context: Stories) => void


}