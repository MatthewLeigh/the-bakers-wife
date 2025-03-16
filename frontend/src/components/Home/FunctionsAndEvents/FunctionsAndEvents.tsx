
// Styling
import styles from "./FunctionsAndEvents.module.css"

// Components
import Button from "components/Global/Button/Button"


const FunctionsAndEvents = () => {
    return (
        <div className={styles.componentWrapper}>

            {/* Text Wrapper */}
            <div className={styles.textWrapper}>
                <h2>Functions & Events</h2>
                <p>
                    From bat mitsvas, to weddings, to corporate events, we have an unrivalled event
                    space for any occasion. From bat mitsvas, to weddings, to corporate events, we
                    have an unrivalled event space for any occasion.
                </p>
            </div>

            {/* Image Wrapper */}
            <div className={styles.imgWrapper}>
                <img
                    className={styles.img}
                    src="placeholder.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="placeholder.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="placeholder.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="placeholder.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="placeholder.jpg"
                    alt="placeholder"
                />
            </div>

            {/* Button */}
            <div className={styles.buttonWrapper}>
                <Button
                    text="The Full Package"
                />
            </div>

        </div>
    )
}

export default FunctionsAndEvents