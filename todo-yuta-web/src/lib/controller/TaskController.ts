import axios from "axios";
import { injectable } from 'tsyringe';
import { TaskUseCase } from '../usecase/TaskUseCase'; 

@injectable()
export class TaskController{
    constructor(readonly taskUseCase: TaskUseCase){}

    async registerTask(title: string, description: string) {
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

    async getTasks(): Promise<any>{
        
        return await axios.get('http://localhost:3000/tasks')
        .then(res => {
            return res.data.tasks;
        })
    }

    async deleteTack(id: number){
        await axios.delete(`http://localhost:3000/delete/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
   
}
