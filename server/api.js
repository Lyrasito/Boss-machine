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

const minRouter = require("./minions");
apiRouter.use("/minions", minRouter);

const ideaRouter = require("./ideas");
apiRouter.use("/ideas", ideaRouter);

const meetingRouter = require("./meetings");
apiRouter.use("/meetings", meetingRouter);

module.exports = apiRouter;
