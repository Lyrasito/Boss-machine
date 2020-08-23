const express = require("express");

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");

const ideaRouter = express.Router();

//define req.idea
ideaRouter.param("ideaId", (req, res, next, id) => {
  const idea = getFromDatabaseById("ideas", req.params.ideaId);
  req.idea = idea;
  next();
});

//GET all ideas
ideaRouter.get("/", (req, res) => {
  const ideas = getAllFromDatabase("ideas");
  res.send(ideas);
});

//POST new idea
ideaRouter.post("/", (req, res) => {
  newIdea = req.query;
  addToDatabase("ideas", newIdea);
  res.send(newIdea);
});

//GET idea by id
ideaRouter.get("/:ideaId", (req, res) => {
  res.send(req.idea);
});

//PUT update idea by id
ideaRouter.put("/:ideaId", (req, res) => {
  if (req.query.name) {
    req.idea.name = req.query.name;
  }
  if (req.query.description) {
    req.idea.description = req.query.description;
  }
  if (req.query.weeklyRevenue) {
    req.idea.weeklyRevenue = req.query.weeklyRevenue;
  }
  if (req.query.numWeeks) {
    req.idea.numWeeks = req.query.numWeeks;
  }
  updateInstanceInDatabase("ideas", req.idea);
  res.send(req.idea);
});

//DELETE idea by id
ideaRouter.delete("/:ideaId", (req, res) => {
  deleteFromDatabasebyId("ideas", req.params.ideaId);
  const ideas = getAllFromDatabase("ideas");
  res.send(ideas);
});

module.exports = ideaRouter;
