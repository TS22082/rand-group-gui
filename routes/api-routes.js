const router = require("express").Router();
const {
  addApprentice,
  getApprentices,
  getLeads,
  getRandomizedGroups,
  getApprenticesForLead,
} = require("../controllers/apprenticeController");

router.get("/", (req, res) => {
  res.send("success");
});

router.post("/", addApprentice);
router.get("/appr", getApprentices);
router.get("/leads", getLeads);
router.put("/groups", getRandomizedGroups);
router.get("/appr4leads", getApprenticesForLead);

module.exports = router;
