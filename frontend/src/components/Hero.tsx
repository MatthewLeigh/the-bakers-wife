import React from 'react'

interface HeroProps {
    image: string;
    title: string;
    subtitle?: string;
    isSubtitleButton?: boolean;
    buttonRoute?: string;
}

const Title: React.FC<HeroProps> = ({
    image,
    title,
    subtitle,
    isSubtitleButton = false,
    buttonRoute
}) => {
    return (
        <div>{title}</div>
    )
}

export default Title