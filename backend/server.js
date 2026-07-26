const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

// Home API
app.get("/", (req, res) => {
    res.json({
        app: "Compare Zone API",
        version: "1.0.0",
        status: "Running"
    });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ Database Error:", err));

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});