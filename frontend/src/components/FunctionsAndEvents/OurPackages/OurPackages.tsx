
// Styling
import styles from "./OurPackages.module.css"

// Components
import Button from "components/Global/Button/Button"

const OurPackages = () => {
    return (
        <div className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* Title */}
                <div className={styles.titleWrapper}>
                    <h2 className="hidden">Our Packages</h2>
                    <p className="hidden">
                        From bat mitsvas, to weddings, to corporate events, we have an unrivalled
                        event space for any occasion. From bat mitsvas, to weddings, to corporate
                        events, we have an unrivalled event space for any occasion.
                    </p>
                </div>

                {/* Standing Event */}
                <div className={`${styles.packageWrapper} ${styles.textLeft} hidden`}>

                    {/* Text */}
                    <div className={styles.textWrapper}>
                        <h3>Standing Event</h3>
                        <hr className="shortSpacer"/>
                        <ul>
                            <li>Up to 230 guests</li>
                            <li>Seasonal menu with up to 10 items per guest</li>
                            <li>A third thing</li>
                            <li>And maybe a fourth </li>
                        </ul>
                    </div>

                    {/* Images */}
                    <div className={styles.imageCarousel}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="images/full-table.jpg"
                                alt="Placeholder"
                            />
                        </div>
                        <div className={styles.delimiterWrapper}>
                            delimiters
                        </div>
                    </div>
                </div>

                {/* Standing Event */}
                <div className={`${styles.packageWrapper} ${styles.textRight} hidden`}>

                    {/* Images */}
                    <div className={styles.imageCarousel}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="images/best-restaurant-in-camberwell.jpg"
                                alt="Placeholder"
                            />
                        </div>
                        <div className={styles.delimiterWrapper}>
                            delimiters
                        </div>
                    </div>

                    {/* Text */}
                    <div className={styles.textWrapper}>
                        <h3>Standing Event</h3>
                        <hr className="shortSpacer"/>
                        <ul>
                            <li>Up to 150 guests</li>
                            <li>The full dining experience with entrees, mains, sides and deserts</li>
                            <li>A third thing</li>
                            <li>And maybe a fourth </li>
                        </ul>

                    </div>

                </div>

                {/* Full Package Details */}
                <div className={`${styles.packageDetailsWrapper} hidden`}>
                    <div className={styles.arrow}>Arrow</div>
                        <Button
                            text="Package Details"
                            downloadFileAddress="pdf"
                            downloadFileName="eventKit.pdf"
                            color="primary"
                            isBold={true}
                        />
                </div>
            </div>
        </div>
    )
}

export default OurPackages