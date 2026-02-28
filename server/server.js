import express from "express";
require("dotenv").config();
import cors from "cors";
import initRoutes from "./src/routes";
import connectDB from "./src/config/connectDB";
import qs from "qs";

const allowedOrigins = [
  "http://localhost:3000",
  "https://cho-thue-phong-tro.vercel.app",
];

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      // Cho phép các request không có origin (như Postman) hoặc nằm trong danh sách allowedOrigins
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Chặn bởi CORS: Origin không hợp lệ"));
      }
    },
    methods: ["POST", "GET", "PUT", "DELETE"],
  }),
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.set("query parser", (str) => qs.parse(str));

initRoutes(app);
connectDB();

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`);
});
