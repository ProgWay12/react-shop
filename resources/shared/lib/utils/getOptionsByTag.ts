import {TagPropsType} from "../../types/helpers";


type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T
}

export default function (tag: TagPropsType, href?: string): PartialRecord<TagPropsType, PartialRecord<string, unknown>> {
    const optionsMap: PartialRecord<TagPropsType, PartialRecord<string, unknown>> = {
        button: {
            role: 'button',
            type: 'button'
        },
        a: {
            href,
            ...!(href?.indexOf('tel:') || href?.indexOf('mailto:')) && {
                rel: 'noopener noreferrer',
                target: '_blank'
            }
        }
    }

    return optionsMap[tag] as PartialRecord<TagPropsType, PartialRecord<string, unknown>>
}
