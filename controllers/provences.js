const Provences = require("../models/provences");

const getProvences = async (req, res) => {
  try {
    const provences = await Provences.find({});
    return res
      .status(200)
      .send({ provences, msg: "Provences fetched successfully" });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  getProvences,
};
