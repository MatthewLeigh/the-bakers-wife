import React from 'react'

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({
    text
}) => {
    return (
        <div>{text}</div>
    )
}

export default Title