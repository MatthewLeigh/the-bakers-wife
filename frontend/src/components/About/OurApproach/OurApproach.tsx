
// Styling
import styles from "./OurApproach.module.css"

// Components
import Button from "components/Global/Button/Button"


const OurApproach = () => {
    return (
        <div className={styles.componentWrapper}>
            <div className={styles.innerWrapper}>

                {/* Title */}
                <div className={styles.titleWrapper}>
                    <h2 className="hidden">Our Approach</h2>
                    {/* <hr className="shortSpacer hidden"/> */}
                </div>

                {/* Body */}
                <div className={styles.bodyWrapper}>
                    <img
                        className="hidden"
                        src="images/world-class-service.jpg"
                        alt="Placeholder"
                    />
                    <div className={styles.textWrapper}>
                        <p className="hidden">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
                            tenetur aut itaque consectetur! Itaque dolor, enim, consequatur ullam
                            aspernatur amet at vero nesciunt quasi quas iste vitae iusto porro
                            voluptas.
                        </p>
                        <p className="hidden">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
                            tenetur aut itaque consectetur! Itaque dolor, enim, consequatur ullam
                            aspernatur amet at vero nesciunt quasi quas iste vitae iusto porro
                            voluptas.
                        </p>
                        <hr className="shortSpacer hidden"/>
                        <div className={styles.buttonWrapper}>
                            <Button
                                text="Book Now"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurApproach