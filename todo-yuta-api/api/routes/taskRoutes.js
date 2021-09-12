module.exports = function(app) {
    var taskList = require('../controllers/taskController');

    app.route('/tasks')
    .get(taskList.get_tasks)

    app.route('/create')
    .post(taskList.create_task);
    app.route('/delete/:taskId')

    app.route('/update/:taskId')
    
};