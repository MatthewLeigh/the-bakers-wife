
// Components
import Hero from "components/Global/Hero/Hero";
import Story from "components/About/Story/Story";
import Quote from "components/About/Quote/Quote";
import OurApproach from "components/About/OurApproach/OurApproach";


// About
const About = () => {
    return (
        <div>
            <Hero
                image="counter.jpg"
                title="Our Story"
                subtitle="The Baker and the Baker's Wife"
            />
            <Story />
            <Quote />
            <OurApproach />
        </div>
    );
};

export default About;
