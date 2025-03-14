
// Components
import Title from "../components/Title";
import Button from "../components/Button/Button";

// Styled Components
import styled from "styled-components";



// Home
const Home = () => {
    return (
        <PageWrapperStyled>
            <Title text="Home Page" />
            <ImageStyled
                src="/images/the-bakers-wife-logo.png"
                alt="The Baker's Wife Logo"
            />
            <Button
                text="Button!"
            />
        </PageWrapperStyled>
    );
};



// --- Styled Components
const PageWrapperStyled = styled.div`
    width: 100%;
`;

const ImageStyled = styled.img`
    width: 300px;
`


export default Home;
