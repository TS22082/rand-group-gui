const mongoose = require("mongoose");
const Lead = require("../models/leadModel");
const leads = require("../utils/leads");

mongoose.connect("mongodb://localhost/rand-appr", async (err) => {
  if (err) throw err;

  console.log("Connected to mongoDB");

  for (let lead in leads) {
    try {
      const newLead = await new Lead({ name: lead }).save();

      console.log("new lead created ==>", newLead);
    } catch (err) {
      console.log(err);
    }
  }

  await mongoose.connection.close();
  console.log("----------------- \n");
  console.log("MongoDB disconnected");
  process.exit(0);
});
