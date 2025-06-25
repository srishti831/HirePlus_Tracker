// client/server/routes/jobs.js
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const Job = require("../models/Job");

// 🔹 GET all jobs for logged-in user
router.get("/", verifyToken, async (req, res) => {
  const { search } = req.query;
  let query = { userId: req.user.id };

  if (search) {
    const regex = new RegExp(search, "i");
    query.$or = [{ company: regex }, { role: regex }];
  }

  const jobs = await Job.find(query).sort({ _id: -1 });
  res.json(jobs);
});

// 🔹 POST new job
router.post("/", verifyToken, async (req, res) => {
  const { company, role, status, date } = req.body;

  const job = new Job({
    userId: req.user.id,
    company,
    role,
    status: status || "Pending",
    date: date || new Date().toLocaleDateString(),
  });

  await job.save();
  res.json({ message: "Job added", job });
});

// 🔹 DELETE job
router.delete("/:id", verifyToken, async (req, res) => {
  const job = await Job.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!job) return res.status(404).json({ message: "Job not found" });

  res.json({ message: "Job deleted" });
});

module.exports = router;
