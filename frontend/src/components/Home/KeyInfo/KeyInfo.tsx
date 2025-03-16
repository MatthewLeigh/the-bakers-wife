
// Styling
import styles from "./KeyInfo.module.css"


// Key Info
const KeyInfo = () => {
    return (
        <div className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* Location */}
                <div className={`${styles.textBlockWrapper} hidden`}>
                    <p><strong>Close to Home</strong></p>
                    <div className={styles.lowerText}>
                        <p>414 - 418 Burke Road</p>
                        <p>Camberwell, Vic 3124</p>
                    </div>
                </div>
                {/* Opening Hours */}
                <div className={`${styles.textBlockWrapper} hidden`}>
                    <p><strong>Open 7 Days</strong></p>
                    <div className={styles.lowerText}>
                        <p>7:30am - 3pm Weekdays</p>
                        <p>8am - 3pm Weekends</p>
                    </div>
                </div>
                {/* Contact Info */}
                <div className={`${styles.textBlockWrapper} hidden`}>
                    <p><strong>Get In Touch</strong></p>
                    <div className={styles.lowerText}>
                        <p>info@thebakerswife.com.au</p>
                        <p>0410 850 414</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default KeyInfo