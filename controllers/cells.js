const Cells = require("../models/cells");

const getCells = async (req, res) => {
  try {
    const cells = await Cells.find({});
    return res.status(200).send({ cells, msg: "Cells fetched successfully" });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  getCells,
};
