const Villages = require("../models/villages");

const getVillages = async (req, res) => {
  try {
    const villages = await Villages.find({});
    return res
      .status(200)
      .send({ villages, msg: "Villages fetched successfully" });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  getVillages,
};
