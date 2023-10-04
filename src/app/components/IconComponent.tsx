"use client"

import { Icon } from "@iconify/react"

interface IconProps {
    icon: string
    color?: string
    className?: string
}

export const IconComponent = ({icon, color, className}: IconProps) => {
    return(
        <>
            <Icon icon={icon} color={color} className={className} />
        </>
    )
}