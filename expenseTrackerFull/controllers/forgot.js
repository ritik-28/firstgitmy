const Sib = require("sib-api-v3-sdk");
require("dotenv").config();

const emailSender = async (req, res, next) => {
  try {
    const email = req.body.email;
    const client = Sib.ApiClient.instance;
    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.API_KEY;
    const tranEmailApi = new Sib.TransactionalEmailsApi();
    const sender = {
      email: "tiwari.ritik.1.108@gmail.com",
      name: "Ritik",
    };
    const recievers = [
      {
        email,
      },
    ];
    const doneEmail = await tranEmailApi.sendTransacEmail({
      sender,
      to: recievers,
      subject: `sbscribe to ritik tiwari to became a developer`,
      textContent: `please subscribe to my channel`,
    });
    console.log(doneEmail);
  } catch (err) {
    console.log(err);
  }
};

module.exports = emailSender;
