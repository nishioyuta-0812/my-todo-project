import { injectable } from 'tsyringe';
import { Description, TaskId, Title } from "../domain/task";
import { TaskUseCase } from '../usecase/TaskUseCase'; 

@injectable()
export class TaskController{
    constructor(readonly taskUseCase: TaskUseCase){}

    async registerTask(title: string, description: string): Promise<void> {
        await this.taskUseCase.registerTask(new Title(title), new Description(description));

    }

    async getTasks(): Promise<TasksUnit>{
        
        const tasks = await this.taskUseCase.getTasks();
        
        return {
            tasks: tasks.values.map((v) => (
                {
                    taskId: v.taskId.value,
                    title: v.title.value,
                    description: v.description.value
                }
                ))
        }
    }

    async deleteTack(id: number): Promise<void>{
        await this.taskUseCase.deleteById(new TaskId(id));
    }

}

export interface TasksUnit {

    tasks: Array<{
        taskId: number
        title: string
        description: string
    }>;

}

