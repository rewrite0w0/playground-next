import Image from "next/image";
// import Atropos from "atropos/react";
import Atropos from "atropos/react";
import "atropos/atropos.css";

export default function as() {
  const a = "move";
  return (
    <Atropos className="my-atropos" style={{ background: "black" }}>
      <Image
        src="https://images.unsplash.com/photo-1654955836276-ae14e45e6d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="아~"
        width="1000"
        height="1000"
      />
    </Atropos>
  );
}
