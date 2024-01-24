import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DashboardModel = new Schema({
  departmentNumber: {
    type: String,
    required: true,
  },
  departmentName: {
    type: String,
    required: true,
  },
  departmentScore: {
    type: String,
    required: true,
  },
});

export default mongoose.model("DashModel", DashboardModel);