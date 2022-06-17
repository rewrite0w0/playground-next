import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: 9,
    label: "9시",
  },
  {
    value: 10,
    label: "10시",
  },
  {
    value: 11,
    label: "11시",
  },
  {
    value: 12,
    label: "12시",
  },
  {
    value: 13,
    label: "13시",
  },
  {
    value: 14,
    label: "14시",
  },
  {
    value: 15,
    label: "15시",
  },
  {
    value: 16,
    label: "16시",
  },
  {
    value: 17,
    label: "17시",
  },
];

export default function SelectTextFields() {
  const [startTime, setStartTime] = useState(9);
  const [endTime, setEndTime] = useState(18);

  const handleChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleChange2 = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-startTime"
          select
          label="Select"
          value={startTime}
          onChange={handleChange}
          helperText="Please select your startTime"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-startTime-native"
          select
          label="Native select"
          value={endTime}
          onChange={handleChange2}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your startTime"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="filled-select-startTime"
          select
          label="Select"
          value={startTime}
          onChange={handleChange}
          helperText="Please select your startTime"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-startTime-native"
          select
          label="Native select"
          value={endTime}
          onChange={handleChange2}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your startTime"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-startTime"
          select
          label="Select"
          value={startTime}
          onChange={handleChange}
          helperText="Please select your startTime"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-startTime-native"
          select
          label="Native select"
          value={endTime}
          onChange={handleChange2}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your startTime"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
