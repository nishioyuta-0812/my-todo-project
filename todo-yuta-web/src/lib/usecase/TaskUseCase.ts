
import { inject, injectable } from "tsyringe";
import { Tasks } from "../domain/task";
import  TaskPort  from "../port/TaskPort";

@injectable()
export class TaskUseCase{

    constructor(@inject("TaskPort")readonly taskPort: TaskPort){}

    async getTasks(): Promise<Tasks>{
        return new Tasks([]);
    }

} 