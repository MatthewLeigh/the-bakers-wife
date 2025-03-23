
// Hooks
import { useState, useEffect } from "react";

// Styling
import styles from "./OurApproachAndFood.module.css"

// Components
import Button from "components/Global/Button/Button"

// Routing
import routes from "routes";


// Key Info
const OurApproachAndFood = () => {

    return (
        <div className={styles.componentWrapper}>

            {/* Menu Wrapper */}
            <div className={styles.innerWrapper}>
                <img
                    className="hidden"
                    src="images/best-coffee-in-melbourne.jpg"
                    alt="Best Coffee in Melbourne"
                />
                <img
                    className="hidden"
                    src="/images/coffee-and-breakfast-bowl.jpg"
                    alt="placeholder"
                />
                <div className={`${styles.textWrapper}`}>
                    <h2 className="hidden">Our Food</h2>
                    <p className="hidden">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <div className={`${styles.buttonWrapper} hidden`}>
                        <Button
                            text="The Full Menu"
                            route="/menu"
                        />
                    </div>
                </div>
            </div>

            {/* About Wrapper */}
            <div className={styles.innerWrapper}>
                <div className={styles.textWrapper}>
                    <h2 className="hidden">Our Approach</h2>
                    <p className="hidden">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <div className={`${styles.buttonWrapper} hidden`}  id={styles.rightAlign}>
                        <Button
                            text="The Full Story"
                            route="/about"
                        />
                    </div>
                </div>
                <img
                    className="hidden"
                    src="/images/my-girlfriends-favourite-place-to-eat.jpg"
                    alt="Delicious Food"
                />
                <img
                    className="hidden"
                    src="/images/best-restaurant-in-camberwell.jpg"
                    alt="Best Restaurant in Camberwell"
                />
            </div>

        </div>
    )
}

export default OurApproachAndFood