import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";

const progressTheme = createTheme({
  status: {
    danger: "blue",
  },
  palette: {
    primary: {
      main: "#f9f9f9",
      darker: "skyblue",
    },
    neutral: {
      main: "yellow",
      contrastText: "blue",
    },
  },
});

export default function LinearDeterminate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={progressTheme}>
      <Box sx={{ width: "100%", height: "1000" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </ThemeProvider>
  );
}
