const User = require("../model/user");

const postuserController = async (req, res, next) => {
  try {
    if (!req.body.phone) {
      throw new Error("phone numner is mandatory");
    }
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    const data = await User.create({
      name: name,
      email: email,
      phone: phone,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getuser = async (req, res, next) => {
  try {
    const data = await User.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteuser = async (req, res, next) => {
  try {
    if (req.params.email == "undefined") {
      console.log("EMAIL IS MISSING");
      res.status(400).json({ err: "EMAIL IS MISSING" });
    }
    await User.destroy({ where: { email: req.params.email } });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  postuserController,
  getuser,
  deleteuser,
};
