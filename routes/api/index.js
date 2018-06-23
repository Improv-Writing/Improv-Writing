const router = require("express").Router();
const storiesRoutes = require("./stories");

// Stories routes
router.use("/stories", storiesRoutes);

module.exports = router;
