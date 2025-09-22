import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// Allow CORS for your frontend
app.use(
  cors({
    origin: "https://career-portal-site.onrender.com",
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    credentials: true
  })
);



// Allow preflight
app.options("*", cors());

// Connect DB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("✅ Job Portal Backend Running on Vercel 🚀");
});

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// ✅ Vercel doesn’t use app.listen
export default app;
