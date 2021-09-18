import { Tasks } from "../domain/task";

export default interface TaskPort{
    getTasks(): Promise<Tasks>;
}