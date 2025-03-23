
// Styling
import styles from "./Footer.module.css"

// Routing
import { Link } from "react-router-dom";
import routes from "routes";

// Constants
import { ReservationAddress } from "constants/ReservationAddress";


const Footer = () => {
    return (
        <footer className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* Heading */}
                <h2>
                    Best Coffee in Town.<br />
                    7 Days a Week.
                </h2>

                {/* Spacer */}
                <hr className="shortSpacer" />

                {/* Content Wrapper */}
                <div className={styles.contentWrapper}>

                    {/* Navigation */}
                    <div className={styles.navigationWrapper}>
                        <h3>Navigation</h3>
                        <nav>
                            <ul>
                                {routes.map(({ path, name }, index) => (
                                    <li key={index}>
                                        <Link
                                            to={path}
                                            onClick={() => window.scrollTo(0, 0)}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to={ReservationAddress}
                                    >
                                        Book Table
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className={styles.contactWrapper}>
                        <h3>Contact</h3>
                        <nav>
                            <ul>
                                <li>0410 850 414</li>
                                <li>info@thebakerswife.com.au</li>
                            </ul>
                        </nav>
                    </div>

                </div>

                {/* Socials */}
                <div className={styles.socialsWrapper}>

                    {/* Instagram */}
                    <Link
                        to={"https://www.instagram.com/thebakerswife_/?hl=en"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="images/icons/instagram.svg" alt="Instagram" />
                    </Link>

                    {/* Facebook */}
                    <Link
                        to={"https://www.facebook.com/thebakerswifecamberwell/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="images/icons/facebook.svg" alt="Facebook" />
                    </Link>

                </div>

                {/* Copyright Notice */}
                <p className={styles.copyrightNotice}>
                    The Baker's Wife © 2025 All Rights Reserved | Designed and Developed by Matthew Cross
                </p>


            </div>
        </footer>
    )
}

export default Footer