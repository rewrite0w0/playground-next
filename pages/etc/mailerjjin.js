import Head from "next/head";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";

export default function MailerJJIN() {
  const [name, setName] = useState("이름");
  const [phone, setPhone] = useState("전화");
  const [mail, setMail] = useState("메일");
  const [content, setContent] = useState("이래이래 저래저래");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={name} onChange={handleChange} />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          value={phone}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText>
      </FormControl>
      <FormControl disabled variant="standard">
        <InputLabel htmlFor="component-disabled">Name</InputLabel>
        <Input id="component-disabled" value={mail} onChange={handleChange} />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Name</InputLabel>
        <Input
          id="component-error"
          value={content}
          onChange={handleChange}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">Error</FormHelperText>
      </FormControl>
    </Box>
  );
}
