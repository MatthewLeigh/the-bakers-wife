
// Styling
import styles from "./FunctionsAndEvents.module.css"

// Components
import Button from "components/Global/Button/Button"

const Images = [
    {
        image: "delicious-food.jpg",
        alt: "Delicious Food"
    },
    {
        image: "wedding-location.jpg",
        alt: "Wedding Location"
    },
    {
        image: "world-class-service.jpg",
        alt: "World Class Service"
    },
    {
        image: "function-space.jpg",
        alt: "Function Space"
    },
    {
        image: "best-food-in-melbourne.jpg",
        alt: "Best Food in Melbourne"
    },
]


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
            <div className={styles.imgWrapper}>

                {/* Image Track*/}
                <div className={styles.imgTrack}>
                    {[...Images, ...Images].map((image, index) => (
                        <img
                            key={index}
                            className={styles.img}
                            src={`images/${image.image}`}
                            alt={image.alt}
                        />
                    ))}
                </div>

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