
// Styling
import styles from "./VisitUs.module.css"

// Components
import Button from "components/Global/Button/Button"

const VisitUs = () => {
    return (
        <div className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* Text */}
                <div className={styles.textWrapper}>

                    {/* Heading */}
                    <h2 className="hidden">Visit Us</h2>

                    {/* Info Blocks */}
                    <div className={styles.infoBlockWrapper}>

                        {/* Where */}
                        <div className={`${styles.infoBlock} hidden`}>
                            <p><strong>Where</strong></p>
                            <p>414 - 418 Burke Road</p>
                            <p>Camberwell, Vic 3124</p>
                        </div>
                        {/* When */}
                        <div className={`${styles.infoBlock} hidden`}>
                            <p><strong>When</strong></p>
                            <p>7:30am - 3pm Weekdays</p>
                            <p>8am - 3pm Weekends</p>
                        </div>

                    </div>

                    {/* Button */}
                    <div className={`${styles.buttonWrapper} button`}>
                        <Button
                            text="Book Now"
                        />
                    </div>

                </div>

                {/* Map */}
                <div className={styles.mapWrapper}>
                    <iframe
                        className={styles.map}
                        title="The Baker's Wife Camberwell Google Maps Embed"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.660889549825!2d145.05179007588674!3d-37.84482397196787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad641f4992c0d0f%3A0xa7a33eb291ca8b9f!2sThe%20Bakers%20Wife!5e0!3m2!1sen!2sau!4v1742088794704!5m2!1sen!2sau"
                        loading="lazy"
                    />
                </div>

            </div>
        </div>
    )
}

export default VisitUs