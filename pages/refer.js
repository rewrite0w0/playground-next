import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Refer() {
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
          id="outlined-error"
          label="성함"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-error-helper-text"
          label="연락처"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />

        <TextField
          id="filled-error"
          label="이메일"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-error-helper-text"
          label="상호명"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />

        <TextField
          id="standard-error"
          label="연락 가능 시간대"
          defaultValue="Hello World"
          variant="standard"
        />
      </div>
    </Box>
  );
}
