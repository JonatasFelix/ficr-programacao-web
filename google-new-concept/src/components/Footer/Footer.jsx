import * as s from "./styles";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { MdLightMode, MdNightlight } from "react-icons/md";

const Footer = () => {
  const { states, setters } = useContext(GlobalContext);
  const { theme } = states;
  const { setTheme } = setters;

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <s.Footer>

      <s.LeftBox>
        Brasil
      </s.LeftBox>

      <s.RightBox>
        <nav>
          <s.MenuList>
            <s.MenuItem>Publidade</s.MenuItem>
            <s.MenuItem>Negócios</s.MenuItem>
            <s.MenuItem>Sobre</s.MenuItem>
            <s.MenuItem>Privacidade</s.MenuItem>
            <s.MenuItem>Termos</s.MenuItem>
          </s.MenuList>
        </nav>

        <s.ThemeButton onClick={changeTheme}>
          {theme === "light" ? <MdNightlight /> : <MdLightMode />}
        </s.ThemeButton>
      </s.RightBox>

    </s.Footer>
  );
};

export default Footer;
