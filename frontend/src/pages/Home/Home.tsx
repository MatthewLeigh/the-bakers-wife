
// Components
import Hero from "components/Hero/Hero";



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
        </div>
    );
};

export default Home;
