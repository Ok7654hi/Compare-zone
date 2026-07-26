const searchRoutes = require("./routes/search");
const compareRoutes = require("./routes/compare")
app.use("/api/search", searchRoutes);
app.use("/api/compare", compareRoutes);