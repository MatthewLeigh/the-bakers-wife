
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
            title="Functions and Events"
            subtitle="This is the Functions and Events hero"
        />
        <Showcase />
        <OurPackages />
        <Form />
    </div>
  );
};

export default FunctionsAndEvents;
