import styled from "styled-components";
import Title from "../components/Title";

const Home = () => {
    return (
        <PageWrapperStyled>
            <Title text="Home Page" />
            <ImageStyled
                src="/images/the-bakers-wife-logo.png"
                alt="The Baker's Wife Logo"
            />
        </PageWrapperStyled>
    );
};

// Styled Components
const PageWrapperStyled = styled.div`
    width: 100%;
    background-color: blue;
`;

const ImageStyled = styled.img`
    width: 300px;
`

export default Home;
