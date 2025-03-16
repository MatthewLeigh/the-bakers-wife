
// Styling
import styles from "./MenuCarousel.module.css"

const MenuCarousel = () => {
    return (
        <div className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* Top Row */}
                <div className={styles.topRowWrapper}>

                    {/* Carousel Wrapper */}
                    <div className={styles.carouselWrapper}>
                        <img
                            className={styles.img}
                            src="images/french-toast.jpg"
                            alt="placeholder"
                        />
                    </div>

                    {/* Animation */}
                    <div className={styles.animationWrapper}>
                        <img
                            className={styles.img}
                            src="the-bakers-wife-animation.svg"
                            alt="placeholder"
                        />
                    </div>

                </div>

                {/* Middle Row */}
                <div className={styles.middleRowWrapper}>

                    {/* Item Name */}
                    <p className={styles.itemName}>
                        <strong>
                            French Toast
                        </strong>
                    </p>

                    {/* Item Description */}
                    <p className={styles.itemDescription}>
                        challah, lemon curd, berries, poached pear, burnt mascarpone, pistachio
                        praline & pure maple syrup.
                    </p>

                </div>

                {/* Bottom Row */}
                <div className={styles.bottomRowWrapper}>

                    {/* Delimiter */}
                    <div className={styles.delimiterWrapper}>
                        Delimiter
                    </div>

                    {/* Buttons */}
                    <div className={styles.navigationWrapper}>
                        Navigation
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MenuCarousel