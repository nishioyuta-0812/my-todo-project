const db = require("../../models/index");
const line = require('@line/bot-sdk');

const config = {
  channelSecret: '83527eb0f792b906f54d19320e24b5bd',
  channelAccessToken: 'Osb56U39J6CGAUhAuHirof+APu9FlXJsxrFFG2Astn+twZpLiE0jz1SWAkt6xfIRTnStYdIxVye/34DPYUw8Z9gDxUUyddnTFn7CF1umCqXI/XLLmXb46+Bih5/ONiRzxjy190v7cpl2dPfqjUD2UwdB04t89/1O/w1cDnyilFU='
};
const client = new line.Client(config);

exports.create_task = function (req, res) {
  console.log(req.body)
  db.task.create({
    title: req.body.task.title,
    task_descrption: req.body.task.description
  }).then(() => {
    res.send("Data Created.");
  });
};


exports.get_tasks = function (req, res) {
  db.task.findAll()
    .then((tasks) => {
      res.send({ tasks: tasks });
    });
};

exports.delete_task = function (req, res) {
  db.task.destroy({
    where: {
      id: [req.params.taskId]
    }
  }).then(() => {
    res.send("Data Deleted.");
  });
};

exports.reset_task = function (req, res) {
  db.task.destroy({ truncate: true, cascade: false }).then(() => {
    res.send("Data Reseted.");
  });
};

exports.check_notification =  (req, res) => {

  db.task.findAll()
    .then(async (tasks) => {

      var messages;
      if(!tasks.length){
        messages = [{
          type: 'text',
          text: '今日のタスクは全て完了したね！\nお疲れ様！'
        }];
      }else{
        messages = [{
          type: 'text',
          text: '今日のタスクがまだ残ってるよ！\n頑張って！'
        }];
      }

      try {
        const re = await client.pushMessage('U615d5fec7a2484a239548014acfac04c',messages);
        console.log(re);
        res.send('success');
      } catch (error) {
        console.log(`エラー: ${error.statusMessage}`);
        console.log(error.originalError.response.data);
      }

    });

}
