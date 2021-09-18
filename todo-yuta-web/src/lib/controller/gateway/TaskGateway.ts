import { injectable } from "tsyringe";
import { Tasks } from "../../domain/task";
import  TaskPort  from "../../port/TaskPort";
import { TaskDriver } from "../driver/TaskDriver";

@injectable()
export class TaskGateway implements TaskPort{
    constructor(readonly taskDriver: TaskDriver){}
    async getTasks(): Promise<Tasks> {
        throw new Error("Method not implemented.");
    }

}