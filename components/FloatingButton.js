import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function FloatingButton(props) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" style={{ color: "blue" }}>
        {/* <NavigationIcon sx={{ mr: 1 }} /> */}
        {props.foo}
      </Fab>
    </Box>
  );
}
