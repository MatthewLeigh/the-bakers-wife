
// Styling
import styles from "./Showcase.module.css"

const Showcase = () => {
    return (
        <div className={styles.componentWrapper}>

            {/* Showcase 1 */}
            <div className={`${styles.showcase} ${styles.textLeft} hidden`}>
                <div className={styles.textWrapper}>
                    <h2>An Incredible Space</h2>
                    <p>
                        Located in Camberwell, The Bakers Wife is an impressive venue for your next
                        event. Originally a mechanic’s workshop, the converted warehouse evokes an
                        edgy-industrial aesthetic and includes clever zoning areas to cater for small
                        and large groups.
                    </p>
                    <hr className="shortSpacer" />
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src="images/meeting-room.jpg"
                        alt="Placeholder"
                    />
                </div>
            </div>

            {/* Showcase 2 */}
            <div className={`${styles.showcase} ${styles.textRight} hidden`}>
                <div className={styles.imageWrapper}>
                    <img
                        src="images/experience.jpg"
                        alt="Placeholder"
                    />
                </div>
                <div className={styles.textWrapper}>
                    <h2>The Experience is Everything</h2>
                    <p>
                        Adorably named after the owner’s wife, the venue is filled with character.
                        The original timber floorboards, polished concrete floors, exposed beams and
                        bare brick walls provide the perfect blank canvas, complimented by hanging
                        Devil’s Ivy and street-art pieces by Melbourne artist, Mimby Jones.
                    </p>
                    <hr className="shortSpacer" />
                </div>

            </div>

            {/* Showcase 3 */}
            <div className={`${styles.showcase} ${styles.textLeft} hidden`}>
                <div className={styles.textWrapper}>
                    <h2>A Package for Every Occasion</h2>
                    <p>
                        Our entire indoor and outdoor space is available for private events. We can
                        also close off access to certain areas to reduce overflow and create a more
                        intimate setting.
                    </p>
                    <hr className="shortSpacer" />
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src="images/wedding-location.jpg"
                        alt="Placeholder"
                    />
                </div>
            </div>



        </div>
    )
}

export default Showcase