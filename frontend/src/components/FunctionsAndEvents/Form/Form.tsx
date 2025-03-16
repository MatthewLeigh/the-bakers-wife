
// Styling
import styles from "./Form.module.css"

const Form = () => {
    return (
        <div className={styles.componentWrapper}>
            <h2>Starting Planning Your Experience, Today!</h2>
            <p>
                One click is all it takes! Our Events Team will reach out within 48 hours to answer
                all your questions, big and small!
            </p>
            <form action="POST">
                <input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                />
                <button type="submit">Enquire Now</button>
            </form>

            <div className={styles.bottomText}>
                <p>Already started planning? Great!</p>
                <p>Let us know more!</p>
                <p>(Optional)</p>
            </div>

        </div>
    )
}

export default Form