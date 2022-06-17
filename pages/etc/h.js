import HorizontalScroll from "react-scroll-horizontal";

export default function H() {
  const child = { width: `300em`, height: `100%`, color: "red" };
  return (
    <>
      <main>
        <article>
          <HorizontalScroll>
            <div style={child}>moveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
          </HorizontalScroll>
        </article>
      </main>
    </>
  );
}
