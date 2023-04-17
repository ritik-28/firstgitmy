const Sib = require("sib-api-v3-sdk");

require("dotenv").config();

const emailSender = async (re, res, next) => {
  try {
    console.log(req.body);
    const client = Sib.ApiClient.instance;
    const apikey = client.authentications["api-key"];
    apikey.apikey = process.env.API_KEY;
    const transEmailApi = new Sib.TransactionalEmailsApi();
    const sender = {
      email: "tiwari.ritik.1.108@gmail.com",
    };
    const recievers = [
      {
        email: "ritiktiwari28eng@gmail.com",
      },
    ];
    const doneEmail = await transEmailApi.sendTransacEmail({
      sender,
      to: recievers,
      subject: "sbscribe to ritik tiwari to became a developer",
      textContent: `please subscribe to my channel`,
    });
    console.log(doneEmail);
  } catch (err) {
    console.log(err);
  }
};

module.exports = emailSender;
