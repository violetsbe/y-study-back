const express = require("express");
const router = express.Router();

// 댓글 전체 가져오기
router.get("/:postId", (req, res) => {
  res.send("댓글 전체 가져오기");
});

// 댓글 쓰기
router.post("/", (req, res) => {
  res.send("댓글 쓰기");
});

// 댓글 수정
router.put("/:id", (req, res) => {
  res.send("댓글 수정");
});

// 댓글 삭제
router.delete("/:id", (req, res) => {
  res.send("댓글 삭제");
});

module.exports = router;
