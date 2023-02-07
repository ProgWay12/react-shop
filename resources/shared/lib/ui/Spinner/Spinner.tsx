import React from "react";
import {DefaultProps, ViewPropsType} from "../../../types/helpers";

export type SpinnerProps = {
    view?: Extract<ViewPropsType, 'brand' | 'secondary' | 'flat' | 'flat-brand' | 'critical'>
} & DefaultProps

export default function Spinner(props: SpinnerProps) {
    const svgAttrs = () => {
        const mapColors = {
            brand: 'rgba(255, 255, 255, 1)',
            secondary: 'rgba(76, 125, 100, 0.1)',
            flatBrand: 'rgba(76, 125, 100, 1)',
            flat: 'rgba(152, 160, 179, 1)',
            critical: 'rgba(229, 42, 25, 1)'
        }

        const currentView = props.view === 'flat-brand' ? 'flatBrand' : props.view

        return {
            color: mapColors[currentView ?? 'brand'],
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
            viewBox: `0 0 200 200`,
            width: '200',
            height: '200',
        }
    }

    const gradientsId = {
        a: `spinner-base-a`,
        b: `spinner-base-b`,
    }

    return (
        <div className={`spinner ${props.className}`}>
            <svg
                {...svgAttrs()}
            >
                <defs>
                    <linearGradient id={gradientsId.a}>
                        <stop
                            offset="0%"
                            stopOpacity="0"
                            stopColor="currentColor"
                        />
                        <stop
                            offset="100%"
                            stopOpacity="0.8"
                            stopColor="currentColor"
                        />
                    </linearGradient>
                </defs>
                <g strokeWidth="15">
                    <path
                        stroke={`url(#${gradientsId.a})`}
                        d="M15 100a85 85 0 0 1 170 0"
                    />
                    <path
                        stroke={`url(#${gradientsId.b})`}
                        d="M185 100a85 85 0 0 1-170 0"
                    />
                </g>
            </svg>
        </div>
    )
}