// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

async function mailer() {
  //   let testAccount = await nodemailer.createTestAccount({
  //     user: "tjoh@lameditech.com",
  //     pass: "#$la03161",
  //   });

  let testAccount = await nodemailer.createTestAccount();

  let transpoter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transpoter.sendMail({
    from: "'fredfoo' <foo@example.com>",
    to: "bar@example.com, baz@example.com",
    subject: "Hello?",
    text: "World?",
    html: "<b>World</b>",
  });

  console.log("%s", info.messageId);
  console.log("%s", nodemailer.getTestMessageUrl(info));

  mailer().catch(console.err);
}

mailer();
