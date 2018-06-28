const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/")
  .get(usersController.findAll)
  // .post(usersController.create);

router.route("/logIn")
  .post(usersController.logIn);

  router.route("/logOut")
  .post(usersController.logOut); 

  router.route("/signUp")
  .post(usersController.signUp);

  router.route("/myStories")
  .get(usersController.myStories);

  // router.route("/publicStories")
  // .get(usersController.publicStories);

  // router.route("/comments")
  // .post(usersController.);

  // router.route("/saveStory")
  // .post(usersController.comments);

  // router.route("/like")
  // .post(usersController.like);

  // router.route("/shareStory")
  // .post(usersController.shareStory);

  // router.route("/getGifs")
  // .get(usersController.getGifs);


// Matches with "/api/users/:name"
// router.route("/:name")
//   .get(usersController.findByName);
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
