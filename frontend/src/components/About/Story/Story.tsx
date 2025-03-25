
// Styling
import styles from "./Story.module.css"

// Key Info
const Story = () => {

    return (
        <div className={styles.componentWrapper}>

            {/* Born From Love Wrapper */}
            <div className={styles.innerWrapper}>
                <div className={`${styles.textWrapper}`}>
                    <h2 className="hidden">Born From Love</h2>
                    <p className="hidden">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <p className="hidden">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <p className="hidden">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <hr className={`${styles.mtMajor} shortSpacer hidden`}/>
                </div>
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

            </div>

            {/* Baked Goods, Baked Good Wrapper */}
            <div className={styles.innerWrapper}>
                <img
                    className="hidden"
                    src="/images/my-girlfriends-favourite-place-to-eat.jpg"
                    alt="Delicious Food"
                />
                <div className={styles.textWrapper}>
                    <h2 className="hidden">Baked Goods, Baked Good</h2>
                    <p className="hidden">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <p className="hidden">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores iusto
                        culpa molestiae et, minus quisquam pariatur odio earum eius sunt, nam blanditiis
                        velit dignissimos quo a nihil inventore exercitationem.
                    </p>
                    <hr className={`${styles.mtMajor} shortSpacer hidden`}/>
                </div>
                <img
                    className="hidden"
                    src="/images/best-restaurant-in-camberwell.jpg"
                    alt="Best Restaurant in Camberwell"
                />
            </div>

        </div>
    )
}

export default Story