// import { addPropertyControls, ControlType } from 'framer';

export default function Button(props) {
  const style = {
    display: "inline-block",
    backgroundColor: "#f9e9a9",
    padding: 8,
    margin: 10,
    width: "8rem",
    textAlign: "center",
    borderRadius: "0.8rem",
  };

  // console.log(addPropertyControls);
  return (
    <div style={style}>
      <a href={props.src ? props.src : "/"}>
        {props.name ? props.name : "my little button"}
      </a>
    </div>
  );
}

// Button.defaultProps = {
//   text: "my little button",
// };

// addPropertyCon;
