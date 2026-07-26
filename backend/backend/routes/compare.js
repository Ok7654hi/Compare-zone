const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone");

// Compare two phones
router.get("/", async (req, res) => {
  try {
    const { phone1, phone2 } = req.query;

    const first = await Phone.findById(phone1);
    const second = await Phone.findById(phone2);

    if (!first || !second) {
      return res.status(404).json({
        message: "Phone not found"
      });
    }

    res.json({
      phone1: first,
      phone2: second
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;