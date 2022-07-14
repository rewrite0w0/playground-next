import Head from "next/head";
import React, { useState } from "react";
import { Button, FormGroup, TextField } from "@mui/material";
import axios from "axios";

export default function Mailer() {
  const [customerName, setCustomerName] = useState("");
  const [customerMail, setCustomerMail] = useState("");
  const [customerMsg, setCustomerMsg] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("sending....");
  };

  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerMail,
      customerMsg,
      customerPhone,
      customerName,
    }),
  }).then((res) => {
    const temp = () => {
      console.log("niceeeeee");
      setSubmitted(true);
      setCustomerName("");
      setCustomerMail("");
      setCustomerPhone("");
      setCustomerMsg("");
    };

    console.log("nice");
    res.status !== 200 ? console.log(":<") : temp();
  });

  return (
    <>
      <FormGroup>
        <TextField
          label="name"
          required
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <TextField
          label="mail"
          required
          onChange={(e) => setCustomerMail(e.target.value)}
        />
        <TextField
          label="phone"
          required
          onChange={(e) => setCustomerPhone(e.target.value)}
        />
        <TextField
          label="메세지"
          required
          onChange={(e) => setCustomerMsg(e.target.value)}
        />
        <Button variant="contained" onClick={(e) => handleSubmit(e)}>
          보내기 ㅇㅇ?
        </Button>
      </FormGroup>
    </>
  );
}
