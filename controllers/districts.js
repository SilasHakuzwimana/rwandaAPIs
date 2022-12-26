const Districts = require("../models/districts");

const getDistricts = async (req, res) => {
  try {
    const districts = await Districts.find({});
    return res
      .status(200)
      .send({ districts, msg: "districts fetched successfully" });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  getDistricts,
};
