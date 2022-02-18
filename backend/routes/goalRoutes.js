const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(deleteGoals).put(updateGoals);
// Get Goals
// router.get("/", getGoals);

// // Set Goals
// router.post("/", setGoals);

// update Goals
// router.put("/:id", updateGoals);

// // Delete Goals
// router.delete("/:id", deleteGoals);
module.exports = router;
