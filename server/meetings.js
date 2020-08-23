const express = require("express");
const apiRouter = express.Router();
const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");

const meetingRouter = express.Router();

//GET all meetings
meetingRouter.get("/", (req, res) => {
  const meetings = getAllFromDatabase("meetings");
  res.send(meetings);
});

//POST new meeting
meetingRouter.post("/", (req, res) => {
  const newMeeting = createMeeting();
  res.send(newMeeting);
});

//DELETE all meetings
meetingRouter.delete("/", (req, res) => {
  deleteAllFromDatabase("meetings");
  const meetings = getAllFromDatabase("meetings");
  res.send(meetings);
});

module.exports = meetingRouter;
