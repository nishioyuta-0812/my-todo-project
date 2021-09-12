const db = require("../../models/index");

exports.create_task = function(req, res) {
    console.log(req.body)
    db.task.create({
        title: req.body.task.title,
        task_descrption: req.body.task.description
      }).then(() => {
        res.send("Data Created.");
      });
  };
