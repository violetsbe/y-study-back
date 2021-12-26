const express = require("express");
const router = express.Router();

// 전체 글 보기
router.get("/", (req, res) => {
  const board_data = [
    {
      category: "유머",
      title: "유머글입니다.",
      date: "2021-12-01",
      like: "1004",
      comment_count: 10,
    },
    {
      category: "이슈",
      title: "유어 마이 엔젤~~~",
      date: "2021-12-15",
      like: "1234",
      comment_count: 25,
    },
    {
      category: "공포/오컬트",
      title: "공포오컬트 글입니다.",
      date: "2021-09-24",
      like: "45",
      comment_count: 37,
    },
    {
      category: "정보",
      title: "정보추천글",
      date: "2021-12-24",
      like: "4004",
      comment_count: 102,
    },
  ];
  res.status(200).json(board_data); // response 성공 200으로 할 거고
});

// 글 하나 보기
router.get("/:id", (req, res) => {
  res.send("글 하나 보기");
});

// 글쓰기
router.post("/", (req, res) => {
  res.send("글쓰기");
});

// 글 수정
router.put("/:id", (req, res) => {
  res.send("글 수정");
});

// 글 삭제
router.delete("/:id", (req, res) => {
  res.send("글 삭제");
});

// 글 검색
router.get("/search/:search", (req, res) => {
  res.send("글 검색");
});

module.exports = router;
