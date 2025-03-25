import { useState, useEffect } from 'react';

// Routing
import { Link } from "react-router-dom";
import routes from "routes";

// Styling
import styles from "./Header.module.css";

// Components
import Button from '../Button/Button';

// Constants
import { ReservationAddress } from 'constants/ReservationAddress';


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
        <header
            className={`
                ${styles.componentWrapper}
                ${atPageTop ? styles.atPageTop : ''}`
            }
        >
            <div className={styles.innerWrapper}>

                {/* Navigation */}
                <nav>
                    <ul>
                        {routes.map(({ path, name }, index) => (
                            <li
                                key={index}
                            >
                                <Link
                                    to={path}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logo */}
                <img
                    src="images/the-bakers-wife-logo.png"
                    alt="The Baker's Wife Logo"
                />

                {/* Button */}
                <div className={styles.buttonWrapper}>
                    <Button
                        text="Book Table"
                        route={ReservationAddress}
                        isBold={true}
                        color="primary"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
