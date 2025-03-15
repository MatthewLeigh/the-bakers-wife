
// Components
import Hero from "components/Global/Hero/Hero";
import Story from "components/About/Story/Story";
import Quote from "components/About/Quote/Quote";
import OurApproach from "components/About/OurApprach/OurAppraoch";


// About
const About = () => {
    return (
        <div>
            <Hero
                image="placeholder.jpg"
                title="About"
                subtitle="This is the About hero"
            />
            <Story />
            <Quote />
            <OurApproach />
        </div>
    );
};

export default About;
