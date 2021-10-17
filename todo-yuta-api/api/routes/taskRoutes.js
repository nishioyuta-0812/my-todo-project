module.exports = function (app) {
  var taskList = require('../controllers/taskController');

  app.route('/tasks')
    .get(taskList.get_tasks);

  app.route('/create')
    .post(taskList.create_task);
  app.route('/delete/:taskId')
    .delete(taskList.delete_task);

  app.route('/update/:taskId')

  app.route('/reset')
    .delete(taskList.reset_task);

  app.route('/check/tasks')
    .get(taskList.check_notification);
};