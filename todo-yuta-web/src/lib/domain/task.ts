import { FCC } from "./FCC";

export class Tasks extends FCC<Task> {} 

export class Task{
    constructor(taskId: TaskId,title: Title, description: Description){
        this.taskId = taskId;
        this.title = title;
        this.description = description;
    }

    taskId: TaskId
    title: Title;
    description: Description;
}

export class TaskId {
    constructor(taskId: number){
        this.value = taskId;
    }
    value: number
} 

export class Title{
    constructor(value: string){
        this.value = value;
    }
    value: string;
}

export class Description{
    constructor(value: string){
        this.value = value;
    }
    value: string;
}