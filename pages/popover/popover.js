import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FmdBadIcon from "@mui/icons-material/FmdBad";

export default function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <FmdBadIcon sx={{ color: "#9a49a1" }} fontSize="large" />
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 4, fontSize: "4rem" }}>
          슈퍼짱짱거시기머시기. 아무튼 이러이러 저러저러해서 개인정보 수집은
          하는데 사실 안 궁금함 이걸 왜 수집하는지는 우리도 모르겠지만 그래도
          필요하니 동의 부탁
        </Typography>
      </Popover>
    </div>
  );
}
