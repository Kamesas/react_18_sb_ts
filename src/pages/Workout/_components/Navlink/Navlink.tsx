import React, { FC } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink, LinkProps } from "react-router-dom";

type tNavlinkProps = {
  icon?: React.ReactElement;
  primary: string;
  to: string;
};

export const Navlink: FC<tNavlinkProps> = (props) => {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, "to">>(function Link(
        itemProps,
        ref
      ) {
        return <NavLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        sx={(theme) => ({
          "&.active": {
            color: theme.palette.primary["light"],
            bgcolor: theme.palette.grey[200],
          },
        })}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} sx={{ textTransform: "uppercase" }} />
      </ListItem>
    </li>
  );
};
