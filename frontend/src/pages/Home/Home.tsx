
// Components
import Hero from "components/Global/Hero/Hero";
import KeyInfo from "components/Home/KeyInfo/KeyInfo";
import OurApproachAndFood from "components/Home/OurApproachAndFood/OurApproachAndFood";
import SupplementaryInfo from "components/Home/SupplementaryInfo/SupplementaryInfo";
import FunctionsAndEvents from "components/Home/FunctionsAndEvents/FunctionsAndEvents";
import MenuCarousel from "components/Home/MenuCarousel/MenuCarousel";
import VisitUs from "components/Home/VisitUs/VisitUs";


// Home
const Home = () => {
    return (
        <div>
            <Hero
                image="placeholder.jpg"
                title="Home"
                subtitle="Button text"
                isSubtitleButton={true}
                buttonRoute="Menu"
            />
            <KeyInfo />
            <OurApproachAndFood />
            <SupplementaryInfo />
            <FunctionsAndEvents />
            <MenuCarousel />
            <VisitUs />
        </div>
    );
};

export default Home;
