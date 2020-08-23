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

const minRouter = express.Router();

//define req.minion
minRouter.param("minionId", (req, res, next, id) => {
  const minion = getFromDatabaseById("minions", req.params.minionId);
  req.minion = minion;
  next();
});

//GET all minions
minRouter.get("/", (req, res) => {
  const minions = getAllFromDatabase("minions");
  res.send(minions);
});

//POST new minion
minRouter.post("/", (req, res) => {
  const thisMinion = req.query;
  addToDatabase("minions", thisMinion);
  res.send(thisMinion);
});
//GET single minion by id
minRouter.get("/:minionId", (req, res) => {
  res.send(req.minion);
});

//PUT update single minion by id
minRouter.put("/:minionId", (req, res) => {
  if (req.query.name) {
    req.minion.name = req.query.name;
  }
  if (req.query.title) {
    req.minion.title = req.query.title;
  }
  if (req.query.weaknesses) {
    req.minion.weaknesses = req.query.weaknesses;
  }
  if (req.query.salary) {
    req.minion.salary = req.query.salary;
  }
  updateInstanceInDatabase("minions", req.minion);
  res.send(req.minion);
});
//DELETE single minion by id
minRouter.delete("/:minionId", (req, res) => {
  deleteFromDatabasebyId("minions", req.params.minionId);
  const minions = getAllFromDatabase("minions");
  res.send(minions);
});

module.exports = minRouter;
