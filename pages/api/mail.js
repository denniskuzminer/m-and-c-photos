/* eslint-disable import/no-anonymous-default-export */
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SG_API_KEY);

export default async (req, res) => {
  console.log("REQ.BODY", req.body);
  const body = JSON.parse(JSON.stringify(req.body));

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: "denniskuzminer@gmail.com",
    from: "denniskuzminer@gmail.com",
    subject: "New Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Ok" });
};
// export default (req, res) => {

// console.log(req.body);
// try {
//   // console.log("REQ.BODY", req.body);
//   mail
//     .send({
//       to: "denniskuzminer@gmail.com", // Your email where you'll receive emails
//       from: "denniskuzminer@gmail.com", // your website email address here
//       subject: `${req.body.subject}`,
//       html: `<div>You've got a mail</div>`,
//     })
//     .then(() => console.log("email successfully fulfilled"));
// } catch (error) {
//   // console.log(error);
//   res.status(error.statusCode || 500).json({ error: error.message });
// }

// res.status(200).json({ error: "" });
// };
