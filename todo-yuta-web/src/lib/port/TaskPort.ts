import { Description, TaskId, Tasks, Title } from "../domain/task";

export default interface TaskPort{
    getTasks(): Promise<Tasks>;
    registerTask(title: Title, description: Description): Promise<void>;
    deleteById(id: TaskId): Promise<void>;
}