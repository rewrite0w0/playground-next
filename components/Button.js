// import { addPropertyControls, ControlType } from 'framer';

export default function Button(props) {
  const style = {
    display: "inline-block",
    backgroundColor: "orange",
    padding: 8,
  };

  // console.log(addPropertyControls);
  return (
    <div style={style}>
      <a href={props.src}>{props.name}</a>
    </div>
  );
}

// Button.defaultProps = {
//   text: 'my little button',
// };

// addPropertyCon;
