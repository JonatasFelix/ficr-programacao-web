import { useState } from "react";
import MenuGrow from "../MenuGrow/MenuGrow";

import * as s from "./styles";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillBell } from "react-icons/ai";

import IconeGoogle from "../../assets/imgs/google.png";
import IconeGmail from "../../assets/imgs/gmail.png";
import IconeDriver from "../../assets/imgs/driver.png";
import IconeEarth from "../../assets/imgs/google-earth.png";
import IconeYoutube from "../../assets/imgs/youtube.png";
import Avatar from "../../assets/imgs/avataaars.png";

const Header = () => {
  const [page, setPage] = useState("google");
  const [open, setOpen] = useState(false);
  return (
    <s.Header>
      <nav>
        <s.List>
          <MenuGrow
            open={open}
            page={page}
            actualPage={"google"}
            icon={IconeGoogle}
            setPage={setPage}
          />
          <MenuGrow
            open={open}
            page={page}
            actualPage={"gmail"}
            icon={IconeGmail}
            setPage={setPage}
          />
          <MenuGrow
            open={open}
            page={page}
            actualPage={"driver"}
            icon={IconeDriver}
            setPage={setPage}
          />
          <MenuGrow
            open={open}
            page={page}
            actualPage={"earth"}
            icon={IconeEarth}
            setPage={setPage}
          />
          <MenuGrow
            open={open}
            page={page}
            actualPage={"youtube"}
            icon={IconeYoutube}
            setPage={setPage}
          />

          <s.ListItem onClick={() => setOpen(!open)} active={open}>
            <CgMenuGridO size="25px" />
          </s.ListItem>
          <s.ListItem
            onClick={() => setPage("alert")}
            active={page === "alert"}
          >
            <AiFillBell size="25px" />
          </s.ListItem>
          <s.ListItem
            onClick={() => setPage("avatar")}
            active={page === "avatar"}
          >
            <s.Avatar src={Avatar} alt="Avatar" />
          </s.ListItem>
        </s.List>
      </nav>
    </s.Header>
  );
};

export default Header;

{
  /* <s.ListItem onClick={() => setPage("google")} active={page === "google"}>
<s.Icon src={IconeGoogle} alt="Google" />
</s.ListItem>
<s.ListItem onClick={() => setPage("gmail")} active={page === "gmail"}>
<s.Icon src={IconeGmail} alt="Gmail" />
</s.ListItem>
<s.ListItem onClick={() => setPage("driver")} active={page === "driver"}>
<s.Icon src={IconeDriver} alt="Driver" />
</s.ListItem>
<s.ListItem onClick={() => setPage("earth")} active={page === "earth"}>
<s.Icon src={IconeEarth} alt="Google Earth" />
</s.ListItem>
<s.ListItem onClick={() => setPage("youtube")} active={page === "youtube"}>
<s.Icon src={IconeYoutube} alt="Youtube" />
</s.ListItem> */
}
