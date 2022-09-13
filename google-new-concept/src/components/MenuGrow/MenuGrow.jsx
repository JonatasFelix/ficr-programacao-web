import Grow from "@mui/material/Grow";
import * as s from "./styles";

const MenuGrow = ({ open, page, actualPage, icon, setPage }) => {
  const changePage = (actualPage) => {
    setPage(actualPage);
  };

  return (
    <Grow in={open}>
      {
        <s.ListItem
          onClick={() => changePage(actualPage)}
          active={page === actualPage}
        >
          <s.Icon src={icon} alt={page} />
        </s.ListItem>
      }
    </Grow>
  );
};

export default MenuGrow;
