
// Styling
import styles from "./OurApproachAndFood.module.css"

// Components
import Button from "components/Global/Button/Button"


// Key Info
const OurApproachAndFood = () => {
    return (
        <div className={styles.componentWrapper}>

            {/* Menu Wrapper */}
            <div className={styles.innerWrapper}>
                <img
                    className={styles.img}
                    src="images/best-coffee-in-melbourne.jpg"
                    alt="Best Coffee in Melbourne"
                />
                <img
                    className={styles.img}
                    src="/images/coffee-and-breakfast-bowl.jpg"
                    alt="placeholder"
                />
                <div className={styles.textWrapper}>
                    <h2>Our Food</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <div className={styles.buttonWrapper}>
                        <Button
                            text="The Full Menu"
                        />
                    </div>
                </div>
            </div>

            {/* About Wrapper */}
            <div className={styles.innerWrapper}>
                <div className={styles.textWrapper}>
                    <h2>Our Approach</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <div className={styles.buttonWrapper}  id={styles.rightAlign}>
                        <Button
                            text="The Full Story"
                        />
                    </div>
                </div>
                <img
                    className={styles.img}
                    src="/images/my-girlfriends-favourite-place-to-eat.jpg"
                    alt="Delicious Food"
                />
                <img
                    className={styles.img}
                    src="/images/best-restaurant-in-camberwell.jpg"
                    alt="Best Restaurant in Camberwell"
                />
            </div>

        </div>
    )
}

export default OurApproachAndFood