import * as s from "./styles";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import LogoGoogleAs from "../../src/assets/imgs/google-logo-as.png";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

const HomePage = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <s.Container>
            <Header />
            <s.Main>
                 <s.Logo src={LogoGoogleAs} alt="Logo Google" />
                 <s.Form onSubmit={onSubmit}>
                        <SearchBar />
                        <s.BoxButtons>
                            <Button content="Pesquisa Google" />
                        </s.BoxButtons>
                 </s.Form>
            </s.Main>

            <Footer/>
           
        </s.Container>
    )

};

export default HomePage;