import Head from "next/head";
import style from "../styles/space.module.css";

export default function letterSpace() {
  return (
    <>
      <Head>
        <link href="http://fonts.cdnfonts.com/css/halogen" rel="stylesheet" />
      </Head>
      <main>
        <article>
          <h1 className={style.main}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </h1>
          <h1 className={style.main2}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </h1>
          <h1 className={style.main3}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </h1>
          <h1 className={style.main4}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </h1>
        </article>
      </main>
    </>
  );
}
