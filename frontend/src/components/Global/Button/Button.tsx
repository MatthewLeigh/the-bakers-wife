
// Routing
import { Link } from "react-router-dom"

// Styling
import styles from "./Button.module.css";

// Props
interface ButtonProps {
    text: string;
    route?: string;
    downloadFileAddress?: string;
    downloadFileName?: string;
    isBold?: boolean;
    color?: 'black' | 'white' | 'primary';
};



// Button
const Button: React.FC<ButtonProps> = ({
    text = "",
    route = "",
    downloadFileAddress = "",
    downloadFileName = "",
    isBold = false,
    color = 'black'
}) => {
    return (
        <>
            {route ? (
                <Link
                    to={route}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <button className={`
                        ${styles.button}
                        ${isBold ? styles.isBold : ''}
                        ${styles[color]}
                    `}>
                        {text}
                    </button>
                </Link>
            ) : (
                <a
                    href={downloadFileAddress}
                    download={downloadFileName}
                >
                    <button className={`
                        ${styles.button}
                        ${isBold ? styles.isBold : ''}
                        ${styles[color]}
                    `}>
                        {text}
                    </button>
                </a>
            )}
        </>
    );
};


export default Button;
