import { useState, useMemo, useEffect } from "react";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function Button3(props) {
  const [temp, setTemp] = useState(true);
  const [tempInput, setTempInput] = useState("");

  return (
    <>
      <Button variant="contained" disabled={temp} color="success">
        모지사바하
      </Button>
      <br />
      <br />
      <br />
      <br />
      <TextField
        label="아무거나 넣어"
        value={tempInput}
        focused
        onChange={(e) => {
          setTempInput(e.target.value);
          tempInput.length > 0 ? setTemp(false) : setTemp(true);
        }}
      />
    </>
  );
}
