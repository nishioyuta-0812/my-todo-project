import axios from "axios";

export class TaskController{
    
    async registerTask(title, description) {
        const task = {
            title: title,
            description: description
        };

        await axios.post('http://localhost:3000/create', {task})
        .then(res => {
            console.log(res);
            console.log(res.data);
          })

    }

    async getTasks(){
        return await axios.get('http://localhost:3000/tasks')
        .then(res => {
            return res.data.tasks;
        })
    }
   
}
