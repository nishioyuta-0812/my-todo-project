import { injectable } from "tsyringe";
import { Description, Task, TaskId, Tasks, Title } from "../domain/task";
import  TaskPort  from "../port/TaskPort";
import { TaskDriver } from "../driver/TaskDriver";

@injectable()
export class TaskGateway implements TaskPort{
    constructor(readonly taskDriver: TaskDriver){}
    async getTasks(): Promise<Tasks> {
        
        const taskEntiteis = await this.taskDriver.getTasks()
        
        return new Tasks( taskEntiteis.tasks.map((task) => new Task(new TaskId(task.id), new Title( task.title), new Description( task.task_descrption))));
    }
    
    async registerTask(title: Title, description: Description): Promise<void> {
        await this.taskDriver.registerTask(title.value, description.value);
    }
    
    async deleteById(id: TaskId): Promise<void> {
        await this.taskDriver.deleteById(id.value);
    }
}