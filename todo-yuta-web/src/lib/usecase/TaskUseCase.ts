
import { inject, injectable } from "tsyringe";
import { Description, TaskId, Tasks, Title } from "../domain/task";
import  TaskPort  from "../port/TaskPort";
import { toast } from 'react-toastify';
import success from '../../components/icons';

@injectable()
export class TaskUseCase{

    constructor(@inject("TaskPort")readonly taskPort: TaskPort){}

    async getTasks(): Promise<Tasks>{
        return await this.taskPort.getTasks();
    }

    async registerTask(title: Title, description: Description): Promise<void> {
        await this.taskPort.registerTask(title,description);
        
        toast.success('　タスクを登録したよ！', {
            icon: success,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    async deleteById(id: TaskId): Promise<void>{
        await this.taskPort.deleteById(id);

        toast.success('　タスクを完了したよ！', {
            icon: success,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

} 