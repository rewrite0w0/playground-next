import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material";
import { Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ColorCheckboxes() {
  return (
    <div>
      <Checkbox
        // {...label}
        sx={{ color: "#a9a1a6" }}
        label="하기는 싫겠지만 어쩔 수 없이 개인정보 수집에 동의합니다"
      />

      {/* <Typography>개인정보 수집에 동의합니다</Typography> */}
      {/* </Checkbox> */}
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: "#003003",
          "&.Mui-checked": {
            color: "#330330",
          },
        }}
      />
    </div>
  );
}
