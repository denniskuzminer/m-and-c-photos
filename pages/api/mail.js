/* eslint-disable import/no-anonymous-default-export */
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SG_API_KEY);

export default async (req, res) => {
  const { body } = req.body;

  const message = `
  Hello,\r\n
  \r\n
  A new reservation for M&C Photography has come in! Here is the info:\r\n
  Name: ${body["Name"]}\r\n
  Email: ${body["Email"]}\r\n
  Phone number: ${body["Phone number"]}\r\n
  Event type: ${body["Event type"]}\r\n
  Location: ${body["Location"]}\r\n
  Time: ${new Date(body["Time"]).toLocaleString("en-US")}\r\n
  Event details: ${body["Event details"]}\r\n
  \r\n
  Thanks\r\n  
  `;

  try {
    await sendgrid.send({
      to: "mandcphotographynj@gmail.com",
      from: {
        email: "no-reply@m-cphotography.com",
        name: "M&C Photography Bookings",
      },
      subject: `You've got a new reservation!`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
};
