
// Styling
import styles from "./SupplementaryInfo.module.css"


// Key Info
const SupplementaryInfo = () => {
    return (
        <div className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* One */}
                <div className={styles.infoBlock}>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.img}
                            src="placeholder.jpg"
                            alt="placeholder"
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <p><strong>Lorem Ipsum. Dolar Sit.</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                 {/* Two */}
                 <div className={styles.infoBlock}>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.img}
                            src="placeholder.jpg"
                            alt="placeholder"
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <p><strong>Lorem Ipsum. Dolar Sit Amet.</strong></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed.
                        </p>
                    </div>
                </div>

                 {/* Three */}
                 <div className={styles.infoBlock}>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.img}
                            src="placeholder.jpg"
                            alt="placeholder"
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <p><strong>Lorem Ipsum, Sit Dolar.</strong></p>
                        <p>
                            Magnam doloribus ipsum quae mollitia consectetur necessitatibus,
                            molestiae sequi!
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SupplementaryInfo