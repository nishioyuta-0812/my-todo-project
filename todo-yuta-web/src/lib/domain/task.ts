import { FCC } from "./FCC";

export class Tasks extends FCC<Task> {} 

export class Task{
    constructor(title: Title, description: Description){
        this.title = title;
        this.description = description;
    }

    title: Title;
    description: Description;
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