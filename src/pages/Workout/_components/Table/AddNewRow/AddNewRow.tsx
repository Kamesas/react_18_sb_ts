import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Add } from "@mui/icons-material";
import { Menu, MenuItem, IconButton, Tooltip } from "@mui/material";
import { exerciseTypes } from "../../../../../api/workout/mock";
import { tExerciseType, tWorkout } from "../../../../../api/workout/types";

type tAddNewRowProps = {
  setData: Dispatch<SetStateAction<tWorkout[]>>;
};

export const AddNewRow: FC<tAddNewRowProps> = ({ setData }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addNewRow = (type: tExerciseType) => {
    console.log("type", type);

    setData((prev) => {
      const newItem = {
        id: Number(new Date().toTimeString()),
        date: "today",
        totalTime: "0.00",
        totalAmount: 0,
        exercises: [
          {
            id: 1,
            type: { title: type?.type },
            repetition: [],
          },
        ],
      };

      return [newItem, ...prev];
    });
  };

  return (
    <>
      <Tooltip title="Add new row">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Add />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {exerciseTypes?.map((item) => {
          return (
            <MenuItem key={item?.id} onClick={() => addNewRow(item)}>
              {item.type}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
