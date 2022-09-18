import { useState } from 'react';
import * as s from "./styles";
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

import Avatar from "../../assets/imgs/avataaars.png";
import IconeGoogle from "../../assets/imgs/google.png";
import IconeGmail from "../../assets/imgs/gmail.png";
import IconeDriver from "../../assets/imgs/driver.png";
import IconeEarth from "../../assets/imgs/google-earth.png";
import IconeYoutube from "../../assets/imgs/youtube.png";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("google");

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const MenuIcon = () => {
    switch (selected) {
      case "google":
        return  <s.ButtonMenu><s.MenuImg src={IconeGoogle} alt="Logo Google" onClick={handleChange}/></s.ButtonMenu>;
      case "gmail":
        return  <s.ButtonMenu><s.MenuImg src={IconeGmail} alt="Logo Gmail" onClick={handleChange}/></s.ButtonMenu>;
      case "driver":
        return  <s.ButtonMenu><s.MenuImg src={IconeDriver} alt="Logo Driver" onClick={handleChange}/></s.ButtonMenu>;
      case "earth":
        return  <s.ButtonMenu><s.MenuImg src={IconeEarth} alt="Logo Earth" onClick={handleChange}/></s.ButtonMenu>;
      case "youtube":
        return  <s.ButtonMenu><s.MenuImg src={IconeYoutube} alt="Logo Youtube" onClick={handleChange}/></s.ButtonMenu>;
      default:
        return  <s.ButtonMenu><s.MenuImg src={IconeGoogle} alt="Logo Google" onClick={handleChange}/></s.ButtonMenu>;
    }
  }


  const menuOptions = [
    {show: checked, name: "google", icon: IconeGoogle},
    {show: checked, name: "gmail", icon: IconeGmail},
    {show: checked, name: "driver", icon: IconeDriver},
    {show: checked, name: "earth", icon: IconeEarth},
    {show: checked, name: "youtube", icon: IconeYoutube},
  ];


  console.log(checked);

  return (
    <s.Header>
      <MenuIcon />
      <Box sx={{ display: 'flex', flexDirection: "column", gap: "10px", position: "absolute", top: "85px" }}>
        {menuOptions.map((item) => (
          selected !== item.name && (
            <Zoom in={item.show} key={item.name}>
              <s.MenuItem onClick={() => setSelected(item.name)}><s.MenuImg src={item.icon} alt={`Logo ${item.name}`} /></s.MenuItem>
            </Zoom>
          )
        ))}
      </Box>
      <s.Avatar src={Avatar} alt="Avatar" />
    </s.Header>
  );
};

export default Header;