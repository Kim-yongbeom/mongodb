var express = require("express");
var router = express.Router();
const BoardController = require("../controllers/ssac/board/BoardController");
const AuthController = require("../controllers/ssac/auth/AuthController");
const authModule = require("../modules/authModule");
const searchRouter = require("../routes/search/index");

router.post("/ssac/signup", AuthController.uploadSignup);
router.post("/ssac/signin", AuthController.uploadSignin);
router.get("/ssac/profile", authModule.loggedIn, AuthController.getProfile);

router.get("/ssac/board", BoardController.readAllBoard);
router.get("/ssac/board/:id", BoardController.detailBoard);
router.post("/ssac/board", authModule.loggedIn, BoardController.uploadBoard);
router.put("/ssac/board/:id", authModule.loggedIn, BoardController.updateBoard);
router.delete(
  "/ssac/board/:id",
  authModule.loggedIn,
  BoardController.deleteBoard
);
router.use("/search", searchRouter);

module.exports = router;
