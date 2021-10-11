//models
const Scrum = require("../models/scrums");
const User = require("../models/user");
const Team = require("../models/teams");

exports.fillScrum = async (req, res) => {
  const { _uid, _teamId, backlog, lastLecture, progress, link, topicsToCover } =
    req.body;
  try {
    const date = new Date();
    const scrumData = await Scrum.findOne({
      where: {
         _uid: _uid,
         Date: date.toDateString()   //To check
      },
    });

    if(scrumData) {
      return res.status(500).send({
        message: "Scrum Sheet Already Filled",
      });
    } else {
      console.log("in else");
      const scrum = await Scrum.create({
        _uid,
        _teamId,
        backlog,
        lastLecture,
        progress,
        link,
        topicsToCover,
      });
      return res.status(200).send({
        message: "Scrum Sheet Filled successfully",
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: err,
    });
  }
};

exports.update = async (req, res) => {
  
    const scrum = req.scrum;

    if(req.body.backlog)
    scrum.backlog = req.body.backlog;
    if(req.body.lastLecture)
    scrum.lastLecture = req.body.lastLecture;   
    if(req.body.progress)
    scrum.progress = req.body.progress;
    if(req.body.link)
    scrum.link = req.body.link;
    if(req.body.topicsToCover)
    scrum.topicsToCover = req.body.topicsToCover;
    const ascrum = await scrum.save();
    res.status(200).send(scrum);
    
};

exports.markPresent = async (req, res) => {
  const scrum = req.scrum;

  scrum.isPresent = req.body.isPresent;
  const ascrum = await scrum.save();

  res.status(200).send(scrum);
};

exports.viewScrum = async (req, res) => {};
