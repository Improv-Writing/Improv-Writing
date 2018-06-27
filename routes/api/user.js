const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:name"
router.route("/:name")
  .get(usersController.findByName);
  // .post(usersController.create);

// Matches with "/api/stories/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .post(usersController.create);
//   // .get(usersController.findById)
//   // .put(usersController.update)
//   // .delete(usersController.remove);

module.exports = router;
