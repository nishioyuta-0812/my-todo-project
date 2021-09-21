
import { inject, injectable } from "tsyringe";
import { Description, TaskId, Tasks, Title } from "../domain/task";
import  TaskPort  from "../port/TaskPort";


@injectable()
export class TaskUseCase{

    constructor(@inject("TaskPort")readonly taskPort: TaskPort){}

    async getTasks(): Promise<Tasks>{
        return await this.taskPort.getTasks();
    }

    async registerTask(title: Title, description: Description): Promise<void> {
        await this.taskPort.registerTask(title,description);
        
    }

    async doneTask(id: TaskId): Promise<void>{
        await this.taskPort.deleteById(id);

    }

} 