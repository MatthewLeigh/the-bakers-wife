
// Styling
import styles from "./Button.module.css";

// Props
interface ButtonProps {
    text: string;
    route?: string;
    isFilled?: boolean;
    isBold?: boolean;
    isFullWidth?: boolean;
};



// Button
const Button: React.FC<ButtonProps> = ({
    text,
    route,
    isFilled = false,
    isBold = false,
    isFullWidth = false
}) => {
    return (
        <button
            className={styles.button}
        >
            {text}
        </button>
    );
};

export default Button;
