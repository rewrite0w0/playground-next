import Atropos from "atropos/react";
import Image from "next/image";
import tempImage from "../resource/FX5000_IMG08.png";

export default function apos() {
  return (
    <>
      <Atropos
        className="atrops"
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(x, y) => console.log("Rotate", x, y)}
      >
        <Image src={tempImage} width="500" height="800" />
      </Atropos>
    </>
  );
}
