import * as s from "./styles";
import { BiSearch } from "react-icons/bi";
import MicGoogle from "../../assets/imgs/voz-do-google.png";

const SearchBar = () => {
  return (
    <s.Container>
      <BiSearch size="20px" color="#9AA0A6" />
      <s.Input type="text" name="text" />
      <s.MicIcon className="iconesInput" src={MicGoogle} alt="Microfone" />
    </s.Container>
  );
};

export default SearchBar;
