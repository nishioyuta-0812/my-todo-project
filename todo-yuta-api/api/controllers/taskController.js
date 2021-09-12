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


exports.get_tasks = function(req, res) {
    db.task.findAll()
    .then((tasks) => {
        res.send({tasks: tasks});
    });
};

exports.delete_task = function(req, res) {
    db.task.destroy({
        where: {
            id: [req.params.taskId]
        }
    }).then(() => {
        res.send("Data Deleted.");
    });
};
