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
  allMinions,
  allIdeas,
  allMeetings,
  allWork,
} = require("./db");

//GET all minions
apiRouter.get("/minions", (req, res) => {
  const minions = getAllFromDatabase("minions");
  res.send(minions);
});

//POST new minion
apiRouter.post("/minions", (req, res) => {
  const thisMinion = req.query;
  addToDatabase("minions", thisMinion);
  res.send(thisMinion);
});
//GET single minion by id
apiRouter.get("/minions/:minionId", (req, res) => {
  const minion = getFromDatabaseById("minions", req.params.minionId);
  res.send(minion);
});

//PUT update single minion by id
apiRouter.put("/minions/:minionId", (req, res) => {
  const minion = getFromDatabaseById("minions", req.params.minionId);
  const newMinion = updateInstanceInDatabase("minions", minion);
  res.send(newMinion);
});
//DELETE single minion by id

module.exports = apiRouter;
