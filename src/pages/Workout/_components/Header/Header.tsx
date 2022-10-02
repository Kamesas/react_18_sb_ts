import { FC } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { commonNavigation } from "../../../../commonNavigation";
import { Home, Menu } from "@mui/icons-material";

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

        <Typography
          variant="h6"
          noWrap
          component={NavLink}
          to="/"
          sx={(theme) => ({
            textTransform: "uppercase",
            textDecoration: "none",
            color: theme.palette.primary["contrastText"],
            alignItems: "center",
            display: "flex",
          })}
          mr={4}
        >
          <Home />
        </Typography>

        {commonNavigation?.map((nav, i) => {
          return (
            <Typography
              key={i}
              noWrap
              component={NavLink}
              to={nav.url}
              sx={(theme) => ({
                textTransform: "uppercase",
                textDecoration: "none",
                color: theme.palette.primary["contrastText"],
                "&.active": {
                  borderBottom:
                    "1px solid" + theme.palette.primary["contrastText"],
                },
                "&:hover": {
                  borderBottom:
                    "1px solid" + theme.palette.primary["contrastText"],
                },
              })}
              mr={2}
            >
              {nav.title}
            </Typography>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};
