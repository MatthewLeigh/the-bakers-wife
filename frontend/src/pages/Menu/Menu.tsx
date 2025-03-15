
// Components
import Hero from "components/Global/Hero/Hero";
import PdfEmbed from "components/Menu/PdfEmbed/PdfEmbed";
import Showcase from "components/Menu/Showcase/Showcase";


// Menu
const Menu = () => {
    return (
        <div>
            <Hero
                image="placeholder.jpg"
                title="Menu"
                subtitle="This is the menu hero"
            />
            <PdfEmbed />
            <Showcase />
        </div>
    );
};

export default Menu;
