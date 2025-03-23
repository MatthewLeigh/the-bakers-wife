
// Styling
import styles from "./PdfEmbed.module.css"

const PdfEmbed = () => {
    return (
        <div className={styles.componentWrapper}>
            <iframe
                title="Menu"
                src="/pdf/menu.pdf"
            ></iframe>
        </div>
    )
}

export default PdfEmbed