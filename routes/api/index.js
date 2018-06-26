const router = require("express").Router();
const usersRoutes = require("./user");

// Stories routes
router.use("/user", usersRoutes);

module.exports = router;
