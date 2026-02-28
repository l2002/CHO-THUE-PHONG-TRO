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
    origin: (origin, callback) => {
      callback(null, true);
    },
    credentials: true,
  }),
);
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.set("query parser", (str) => qs.parse(str));

initRoutes(app);
connectDB();

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`);
});
