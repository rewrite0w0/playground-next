import Button from "@mui/material/Button";

export default function Button1(props) {
  return (
    <>
      <Button variant="contained" disabled={props.move}>
        {props.content}
      </Button>
    </>
  );
}
