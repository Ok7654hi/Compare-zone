const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone");

// Search phones by brand or model
router.get("/", async (req, res) => {
  try {
    const q = req.query.q || "";

    const phones = await Phone.find({
      $or: [
        { brand: { $regex: q, $options: "i" } },
        { model: { $regex: q, $options: "i" } }
      ]
    });

    res.json(phones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;