const Sectors = require("../models/sectors");

const getSectors = async (req, res) => {
  try {
    const sectors = await Sectors.find({});
    return res
      .status(200)
      .send({ sectors, msg: "Sectors fetched successfully" });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  getSectors,
};
