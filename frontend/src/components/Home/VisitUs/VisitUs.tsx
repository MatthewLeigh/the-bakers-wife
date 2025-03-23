
// Styling
import styles from "./VisitUs.module.css"

// Components
import Button from "components/Global/Button/Button"

// Constants
import { ReservationAddress } from "constants/ReservationAddress"
import { GoogleMapsAddress } from "constants/GoogleMapsAddress"

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
                            route={ReservationAddress}
                        />
                    </div>

                </div>

                {/* Map */}
                <div className={styles.mapWrapper}>
                    <iframe
                        className={styles.map}
                        title="The Baker's Wife Camberwell Google Maps Embed"
                        src={GoogleMapsAddress}
                        loading="lazy"
                    />
                </div>

            </div>
        </div>
    )
}

export default VisitUs