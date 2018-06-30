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

  router.route("/publicStories")
  .get(usersController.publicStories);

    router.route("/saveStory")
  .post(usersController.saveStory);

  router.route("/shareStory")
  .post(usersController.shareStory);

  // router.route("/deleteStory")
  // .post(usersController.deleteStory);

  // router.route("/like")
  // .post(usersController.like);

  // router.route("/name")
  // .post(usersController.name);


 

  // router.route("/getGifs")
  // .get(usersController.getGifs);


module.exports = router;
