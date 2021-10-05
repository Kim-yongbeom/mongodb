const users = require("../../../models/user");
const jwtModule = require("../../../modules/jwtModule");

const AuthController = {
  uploadSignup: async (req, res) => {
    const { userId, name, password } = req.body;
    try {
      const result = await users.findOne({ userId });
      if (!result) {
        const userModel = new users({
          userId,
          name,
          password,
        });
        await userModel.save();
        res.status(200).json({
          message: "생성 완료",
        });
      } else {
        res.status(400).json({
          message: "이미 같은 아이디가 있습니다.",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
        error: error,
      });
    }
  },

  uploadSignin: async (req, res) => {
    const { userId, password } = req.body;
    try {
      const result = await users.findOne({ userId, password });
      if (result) {
        const payload = {
          userId: result.userId,
          name: result.name,
        };

        const token = jwtModule.create(payload);

        res.status(200).json({
          message: "로그인 성공",
          accessToken: token,
        });
      } else {
        res.status(400).json({
          message: "로그인 실패",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
        error: error,
      });
    }
  },
};

module.exports = AuthController;
