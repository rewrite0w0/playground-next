import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255, 0, 0, 0.1)"
            : "rgb(255 132 132 / 25%)",
      }}
    />
  );
}

export default function LayoutTextFields(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "25ch" },
      }}
    >
      <TextField
        label={props.label}
        id={props.label}
        type={props.type}
        margin="normal"
        required={true}
      />
      <RedBar />
    </Box>
  );
}
