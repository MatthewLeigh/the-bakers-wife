// Styling
import styles from "./Hero.module.css";

// Components
import Button from "components/Global/Button/Button";

// Props
interface HeroProps {
    image: string;
    title: string;
    subtitle?: string;
    isSubtitleButton?: boolean;
    buttonRoute?: string;
}

// Hero
const Title: React.FC<HeroProps> = ({
    image,
    title,
    subtitle,
    isSubtitleButton = false,
    buttonRoute
}) => {
    return (
        <div
            className={styles.componentWrapper}
            style={{ backgroundImage: `url(images/hero/${image})` }}
        >
            <div className="hidden">
                <h1>{title}</h1>
                {isSubtitleButton ? (
                    <Button
                        text={subtitle ? subtitle : ""}
                        isBold={true}
                        color="white"
                        route={buttonRoute}
                    />
                ) : (
                    <h2>{subtitle}</h2>
                )}
            </div>
        </div>
    )
}

export default Title;
