const Apprentice = require("../models/apprenticeModel");
const leads = require("../utils/leads");
const makeGroups = require("../utils/makeGroups");

let leadCount = 0;
for (lead in leads) leadCount++;

module.exports = {
  addApprentice: async (req, res) => {
    try {
      const newAppr = new Apprentice({
        name: req.body.name,
        leadID: req.body.leadID,
      });

      res.json(await newAppr.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },

  getApprentices: async (req, res) => {
    try {
      res.json(await Apprentice.find({}));
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  getLeads: async (req, res) => {
    const leadsArr = [];
    for (lead in leads) leadsArr.push({ name: lead, id: leads[lead] });
    res.json(leadsArr);
  },

  getRandomizedGroups: async (req, res) => {
    let allLeadsApprentices = [];

    req.body.forEach(async (lead, index) => {
      const apprenticesForLead = await Apprentice.find({ leadID: lead.id });
      allLeadsApprentices = [...allLeadsApprentices, ...apprenticesForLead];

      if (index === req.body.length - 1)
        res.json(makeGroups(allLeadsApprentices, req.body));
    });
  },

  getApprenticesForLead: async (req, res) => {
    console.log(req.query);
    res.json({ msg: "success" });
  },
};
