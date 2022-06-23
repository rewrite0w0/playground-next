import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import font from "../../styles/font.module.css";

export default function Types() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">  */}
      </Head>

      <main className={font.main}>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h1" component="div" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom component="div">
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Box>
      </main>
    </>
  );
}
