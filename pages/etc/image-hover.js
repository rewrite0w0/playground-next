import Image from "next/image";
import ReactHover, { Trigger, Hover } from "react-hover";

export default function imageHover() {
  const optionsCursorTrueWithMargin = {
    shiftX: 10,
    shiftY: -500,
  };
  return (
    <>
      <ReactHover options={optionsCursorTrueWithMargin}>
        <Trigger>
          <Image
            src="https://puraxel.co.kr/img/main/section05_img01.png"
            alt="슈퍼짱짱퓨라셀?"
            width="500"
            height="500"
          />
          {/* <h1>Hey?</h1> */}
        </Trigger>
        <Hover>
          <h1>이것은 슈퍼짱짱퓨라셀이다?</h1>
          {/* <h1>Why?</h1> */}
        </Hover>
      </ReactHover>
    </>
  );
}
