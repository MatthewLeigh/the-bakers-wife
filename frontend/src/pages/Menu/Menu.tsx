
// Components
import Hero from "components/Global/Hero/Hero";
import PdfEmbed from "components/Menu/PdfEmbed/PdfEmbed";
import Showcase from "components/Menu/Showcase/Showcase";


// Menu
const Menu = () => {
    return (
        <div>
            <Hero
                image="breadsticks.jpg"
                title="All Day Menu"
                subtitle="There's always time for dessert!"
            />
            <PdfEmbed />
            <Showcase />
        </div>
    );
};

export default Menu;
