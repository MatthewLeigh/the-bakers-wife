
// Styling
import styles from "./FunctionsAndEvents.module.css"

// Components
import Button from "components/Global/Button/Button"


const FunctionsAndEvents = () => {
    return (
        <div className={styles.componentWrapper}>

            {/* Text Wrapper */}
            <div className={styles.textWrapper}>
                <h2 className="hidden">Functions & Events</h2>
                <p className="hidden">
                    From bat mitsvas, to weddings, to corporate events, we have an unrivalled event
                    space for any occasion. From bat mitsvas, to weddings, to corporate events, we
                    have an unrivalled event space for any occasion.
                </p>
            </div>

            {/* Image Wrapper */}
            <div className={`${styles.imgWrapper} shiftSideways`}>
                <img
                    className={styles.img}
                    src="images/delicious-food.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="images/wedding-location.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="images/world-class-service.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="images/function-space.jpg"
                    alt="placeholder"
                />
                <img
                    className={styles.img}
                    src="images/best-food-in-melbourne.jpg"
                    alt="placeholder"
                />
            </div>

            {/* Button */}
            <div className={`${styles.buttonWrapper} hidden`}>
                <Button
                    text="The Full Package"
                    route="/functions-and-events"
                />
            </div>

        </div>
    )
}

export default FunctionsAndEvents