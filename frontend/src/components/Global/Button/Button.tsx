
// Routing
import { Link } from "react-router-dom"

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
    text = "",
    route = "",
    isFilled = false,
    isBold = false,
    isFullWidth = false
}) => {
    return (
        <button
            className={styles.button}
        >
            <Link
                to={route}
                onClick={() => window.scrollTo(0, 0)}
            >
                {text}
            </Link>
        </button>
    );
};

export default Button;
