import React from "react";

interface ButtonProps {
    text: string;
    route?: string;
    isFilled?: boolean;
    isBold?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    route = "/",
    isFilled = false,
    isBold = false
}) => {
    return (
        <button
        >
            {text}
        </button>
    );
};

export default Button;
