import { useState, useEffect } from 'react';

// Routing
import { Link } from "react-router-dom";
import routes from "routes";

// Styling
import styles from "./Header.module.css";

// Header
const Header = () => {
    const [atPageTop, setAtPageTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setAtPageTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={atPageTop ? styles.atPageTop : ''}>
            <div className={styles.internalWrapper}>
                <nav>
                    <ul>
                        {routes.map(({ path, name }, index) => (
                            <li key={index}>
                                <Link to={path}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <img
                    className={styles.img}
                    src="/images/the-bakers-wife-logo.png"
                    alt="The Baker's Wife Logo"
                />
            </div>
        </header>
    );
};

export default Header;
