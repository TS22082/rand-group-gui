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
    const leadCount = req.body.length;
    const leadIdArray = [];
    let allLeadsApprentices = [];

    req.body.forEach((lead) => {
      const itemExists = leadIdArray.find(
        (apprentice) => apprentice.id === lead.id
      );
      if (itemExists === undefined) leadIdArray.push(lead.id);
    });

    leadIdArray.forEach(async (leadID, index) => {
      const apprenticesForLead = await Apprentice.find({ leadID: leadID });
      allLeadsApprentices = [...allLeadsApprentices, ...apprenticesForLead];

      if (index === leadIdArray.length - 1)
        res.json(makeGroups(allLeadsApprentices, leadCount));
    });
  },
};
