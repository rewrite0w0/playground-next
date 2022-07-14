export default function (req, res) {
  // require("dotnev").config();

  let nodemailer = require("nodemailer");

  // const transporter = nodemailer.createTransport({
  //   port: 456,
  //   host: "smtp.mailplug.co.kr",
  //   auth: {
  //     user: "tjoh@lameditech.com",
  //     pass: "#$la03161",
  //   },
  //   secure: true,
  // });

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ethereal.user@ethereal.email",
      pass: "verysecret",
    },
  });

  const mailData = {
    to: "tjoh@lameditech.com",
    from: "tjoh@lameditech.com",
    subject: "test",
    text: "test, test, test, test, test",
    html: "<h1>Hello</h1>",
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
    // err ? console.error(err) : console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
