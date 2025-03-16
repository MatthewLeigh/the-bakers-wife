
// Styling
import styles from "./Showcase.module.css"

const items = [
    {
        name: "Zucchini & Feta Frittes",
        description: "taglierini, white wine, garlic, chilli, evoo, cherry tomatoes & parsley",
        image: "zucchini-and-feta-fritters.jpg"
    },
    {
        name: "French Toast",
        description: "challah, lemon curd, berries, poached pear, burnt mascarpone, pistachio praline & pure maple syrup",
        image: "french-toast.jpg"
    },
    {
        name: "Acai Bowl",
        description: "blended açai & banana, berries, kiwi, house granola, coconut yoghurt & peanut butter",
        image: "acai-bowl.jpg"
    },
    {
        name: "Breakfast Bowl",
        description: " bacon chutney, charred corn, cucumber, black bean, tomato & coriander salsa, crème fraiche & lime",
        image: "coffee-and-breakfast-bowl.jpg"
    },
    {
        name: "Squid Ink Linguine",
        description: "served with a salad of kipfler potatoes, capers, shallots, dill, parsley & vinaigrette",
        image: "squid-ink-linguine.jpg"
    },
    {
        name: "Beef Brisket",
        description: "char-grilled 150gm patty, Monterey Jack cheese, gem cos, tomato, white onion, pink sauce, milk bun & shoestring fries",
        image: "beef-brisket.jpg"
    },
]

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
                {items.map((item, index) => (
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