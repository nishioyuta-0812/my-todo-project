import axios from "axios";

export class TaskDriver{


    async getTasks(): Promise<TasksJson> {

        return await axios.get<TasksJson>('http://localhost:3000/tasks')
        .then(res => {
            return res.data;
        })
    }

    async registerTask(title: string, description: string): Promise<void> {

        const task = {
            title: title,
            description: description
        };

        await axios.post('http://localhost:3000/create', {task});
    }

    async deleteById(id: number): Promise<void>{
        await axios.delete(`http://localhost:3000/delete/${id}`);
    }

}

export type TasksJson = {

    tasks: Array<TaskJson>
}

export type TaskJson = {
    id: number
    title: string
    task_description: string
    created_at: string
}