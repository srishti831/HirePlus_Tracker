import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // 👈 This enables /api/auth/register

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB error:", err));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const authRoutes = require("./routes/auth");
// const verifyToken = require("./middleware/auth");
// const User = require("./models/User");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/hireplus")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

// // Register and Login Routes
// app.use("/api/auth", authRoutes);

// // Dashboard Route
// app.get("/api/dashboard", verifyToken, (req, res) => {
//   res.json({ message: `Welcome ${req.user.name} to the protected dashboard!` });
// });

// // Job Routes (In-memory)
// let jobs = [];

// app.get("/api/jobs", verifyToken, (req, res) => {
//   res.json(jobs.filter((job) => job.userId === req.user.id));
// });

// app.post("/api/jobs", verifyToken, (req, res) => {
//   const job = {
//     id: Date.now(),
//     userId: req.user.id,
//     company: req.body.company,
//     role: req.body.role,
//     status: req.body.status || "Pending",
//     date: new Date().toISOString().slice(0, 10),
//   };
//   jobs.push(job);
//   res.json({ message: "Job added", job });
// });

// app.delete("/api/jobs/:id", verifyToken, (req, res) => {
//   const jobId = parseInt(req.params.id);
//   jobs = jobs.filter((job) => job.id !== jobId || job.userId !== req.user.id);
//   res.json({ message: "Job deleted" });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
