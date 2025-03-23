
// Styling
import styles from "./Showcase.module.css"

// Constants
import { MenuShowcaseItems } from "constants/MenuShowcaseItems"

const Showcase = () => {
    return (
        <div className={styles.componentWrapper}>

            {/* Title */}
            <div className={styles.titleWrapper}>
                <p>(Some of)</p>
                <h2>Our Favourites</h2>
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {MenuShowcaseItems.map((item, index) => (
                    <div key={index} className={`${styles.gridItem} hidden`}>
                        <img src={`images/${item.image}`} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Showcase