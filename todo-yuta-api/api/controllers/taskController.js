const db = require("../../models/index");

exports.create_task = function(req, res) {
    db.task.create({
        title: req.body.title,
        task_descrption: req.body.description
      }).then(() => {
        res.send("Data Created.");
      });
  };
