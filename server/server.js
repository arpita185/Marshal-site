// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));

// // Routes
// app.get("/", (req, res) => {
//   res.send("Backend is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Temporary storage (instead of MongoDB)
let inquiries = [];

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running without MongoDB...");
});

app.post("/api/inquiry", (req, res) => {
  const { name, email, message } = req.body;
  inquiries.push({ name, email, message, date: new Date() });
  res.status(201).json({ success: true, msg: "Inquiry saved locally (not DB)" });
});

app.get("/api/inquiry", (req, res) => {
  res.json(inquiries);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
