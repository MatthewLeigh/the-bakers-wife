
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
                            src="placeholder.jpg"
                            alt="placeholder"
                        />
                    </div>

                    {/* Animation */}
                    <div className={styles.animationWrapper}>
                        <img
                            className={styles.img}
                            src="placeholder.jpg"
                            alt="placeholder"
                        />
                    </div>

                </div>

                {/* Middle Row */}
                <div className={styles.middleRowWrapper}>

                    {/* Item Name */}
                    <p className={styles.itemName}>
                        <strong>
                            Australian Prawn & Clam Pasta
                        </strong>
                    </p>

                    {/* Item Description */}
                    <p className={styles.itemDescription}>
                        taglierini, white wine, garlic, chilli, evoo, cherry tomatoes & parsley
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