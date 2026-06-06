const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    startDate: {
      type: Date
    },

    endDate: {
      type: Date
    },

    status: {
      type: String,
      enum: ["Active", "Completed", "On Hold"],
      default: "Active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);