
// Styling
import styles from "./Quote.module.css"

const Quote = () => {
    return (
        <div className={styles.componentWrapper}>
            <blockquote className="hidden">
                “This is a big quote about something or other. I don’t really know what would be
                good here, but we can figure that out later”
            </blockquote>
            <img
                className="hidden"
                src="the-bakers-wife-animation.svg"
                alt="The Baker's Wife"
            />
        </div>
    )
}

export default Quote