const board = require("../../../models/board");
const boards = require("../../../models/board");
const user = require("../../../models/user");
const jwtModule = require("../../../modules/jwtModule");

const BoardController = {
  readAllBoard: async (req, res) => {
    try {
      const result = await boards.find().populate("writer", "name userId"); //populate는 원하는 값만 나오게 할 수 있다.
      if (!result)
        return res.status(400).json({
          message: "데이터가 없습니다",
        });
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
        error: error,
      });
    }
  },

  detailBoard: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await boards.findById(id);
      if (!result)
        return res.status(400).json({
          message: "데이터가 없습니다",
        });
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "조회 실패",
        error: error,
      });
    }
  },

  uploadBoard: async (req, res) => {
    const userInfo = req.userInfo;

    const { title, content, boardPw } = req.body;

    const postModel = new boards({
      title,
      content,
      writeTime: new Date(),
      boardPw,
      writer: userInfo._id,
    });
    try {
      const result = await postModel.save();
      res.status(200).json({
        message: "게시물 저장",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
        error: error,
      });
    }
  },

  updateBoard: async (req, res) => {
    const userInfo = req.userInfo;
    const { id } = req.params;
    const { title, content, boardPw } = req.body;
    const ownResult = await board.checkAuth({
      boardId: id,
      writerId: userInfo._id,
    });

    console.log(ownResult);

    if (ownResult === -1) {
      return res.status(409).json({
        message: "접근 권한이 없습니다",
      });
    } else if (ownResult === -2) {
      return res.status(500).json({
        message: "DB 서버 에러",
      });
    }

    try {
      const result = await boards.findByIdAndUpdate(
        id,
        {
          title,
          content,
          boardPw,
        },
        { new: true }
      );
      console.log(result);
      res.status(200).json({
        message: "수정 완료",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
        error: error,
      });
    }
  },

  deleteBoard: async (req, res) => {
    const userInfo = req.userInfo;
    const { id } = req.params;
    const ownResult = await board.checkAuth({
      boardId: id,
      writerId: userInfo._id,
    });
    if (ownResult === -1) {
      res.status(409).json({
        message: "접근 권한이 없습니다",
      });
    } else if (ownResult === -2) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
    try {
      const result = await boards.findByIdAndDelete(id);
      res.status(200).json({
        message: "삭제 성공",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "삭제 실패",
        error: error,
      });
    }
  },
};

module.exports = BoardController;
