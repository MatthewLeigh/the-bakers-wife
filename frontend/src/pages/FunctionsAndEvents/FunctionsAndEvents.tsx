
// Components
import Hero from "components/Global/Hero/Hero";
import Showcase from "components/FunctionsAndEvents/Showcase/Showcase";
import OurPackages from "components/FunctionsAndEvents/OurPackages/OurPackages";
import Form from "components/FunctionsAndEvents/Form/Form";


// FunctionsAndEvents
const FunctionsAndEvents = () => {
  return (
    <div>
        <Hero
            image="placeholder.jpg"
            title="Private & Corporate Events"
            subtitle="at The Baker's Wife"
        />
        <Showcase />
        <OurPackages />
        <Form />
    </div>
  );
};

export default FunctionsAndEvents;
