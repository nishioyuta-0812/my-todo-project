import axios from "axios";

export class TaskController{
    
    registerTask(title, description) {
        const task = {
            title: title,
            description: description
        };

        axios.post('http://localhost:3000/create', {task})
        .then(res => {
            console.log(res);
            console.log(res.data);
          })

    }
   
}
