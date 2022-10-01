import { FC } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { commonNavigation } from "../../../../commonNavigation";
import { Menu } from "@mui/icons-material";

type tHeaderProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: FC<tHeaderProps> = ({ setOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu />
        </IconButton>

        <Typography variant="h6" noWrap component={NavLink} to="/">
          Logo
        </Typography>

        {commonNavigation?.map((nav, i) => {
          return (
            <NavLink key={i} to={nav.url}>
              {nav.title}
            </NavLink>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};
