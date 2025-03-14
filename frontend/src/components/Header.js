import styles from "../styles/components/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/functions-and-events">Functions & Events</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
