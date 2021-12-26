const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");

dotenv.config();
app.use(morgan("dev"));

// CORS : 도메인 기반. 같은 도메인이어야.. 이 정책에서 자유롭게 해달라고 설정
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// "/" 루트 요청에 response 응답 보내줌
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 하는 도구
// routes 설정
// use 미들웨어 - 실행되기 전 중간에 가로채기. 순서 유의
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);

// 3060포트를 듣고 있다가 log
// => callback
const port = process.env.PORT || 3060; // PORT 없으면 디폴트값이 3060
app.listen(3060, () => {
  console.log("server is running on port 3060");
});
