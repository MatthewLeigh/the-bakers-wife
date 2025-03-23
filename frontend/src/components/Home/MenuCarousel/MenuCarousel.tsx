
// Hooks
import { useState } from "react";

// Styling
import styles from "./MenuCarousel.module.css"

// Constants
import { MenuShowcaseItems } from "constants/MenuShowcaseItems";
import { delimiter } from "path";



const MenuCarousel = () => {

    const [menuItemIndex, setMenuItemIndex] = useState(0);

    const increaseIndex = () => {
        setMenuItemIndex((prevIndex) => (prevIndex + 1) % MenuShowcaseItems.length);
    };

    const decreaseIndex = () => {
        setMenuItemIndex((prevIndex) => (prevIndex - 1 + MenuShowcaseItems.length) % MenuShowcaseItems.length);
    };


    return (
        <div className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* Top Row */}
                <div className={styles.topRowWrapper}>

                    {/* Carousel Wrapper */}
                    <div className={styles.carouselWrapper}>
                        <img
                            className={styles.img}
                            loading="lazy"
                            src={`images/${MenuShowcaseItems[menuItemIndex].image}`}
                            alt={MenuShowcaseItems[menuItemIndex].name}
                        />
                    </div>

                    {/* Animation */}
                    <div className={styles.animationWrapper}>
                        <img
                            className={styles.img}
                            loading="lazy"
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
                            {MenuShowcaseItems[menuItemIndex].name}
                        </strong>
                    </p>

                    {/* Item Description */}
                    <p className={styles.itemDescription}>
                        {MenuShowcaseItems[menuItemIndex].description}
                    </p>

                </div>

                {/* Bottom Row */}
                <div className={styles.bottomRowWrapper}>

                    {/* Delimiter */}
                    <div className={styles.delimiterWrapper}>
                        {MenuShowcaseItems.map((item, index) => (
                            <div
                                key={index}
                                className={`
                                    ${styles.delimiter}
                                    ${index === menuItemIndex ? styles.currentDelimiter : ''}
                                `}
                                onClick={() => setMenuItemIndex(index)}
                            ></div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className={styles.navigationWrapper}>
                        <img
                            className={styles.navigationIcon}
                            src="images/icons/arrow-left.svg"
                            alt="Previous"
                            onClick={decreaseIndex}
                        />
                        <img
                            className={styles.navigationIcon}
                            src="images/icons/arrow-right.svg"
                            alt="Next"
                            onClick={increaseIndex}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MenuCarousel