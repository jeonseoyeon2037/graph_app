const PORT = 8000;

const express = require("express"); // express 모듈 호출
const cors = require("cors"); // cors 모듈 호출

const app = express(); // express 객체 생성
app.use(express.json()); // json 형식의 데이터를 파싱하는 미들웨어 사용
app.use(cors()); // 교차 출처 데이터 공유 허용

app.get("/", (request, response) => {
  response.send("Hello Node, This is Root Page!!");
});

// app.use(require("./routes/salesMapRoute"));
// app.use(require("./routes/visitorsRoute"));

app.use(require("./routes/getRoutes"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));