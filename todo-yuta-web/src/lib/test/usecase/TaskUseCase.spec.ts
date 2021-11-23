import { TaskUseCase } from "../../usecase/TaskUseCase";
import { mock } from "@kojiro.ueda/bandia";
import TaskPort from "../../port/TaskPort";
import { Tasks } from "../../domain/task";
import { when } from "jest-when";

describe("TaskUseCase", () => {

  let traget: TaskUseCase;
  let taskPort: TaskPort;


  beforeEach(() => {
    taskPort = mock<TaskPort>();
    traget = new TaskUseCase(taskPort);

  });
  
  test("タスクを取得する", async () => {

    const tasks = mock<Tasks>();
    const expected = tasks;

    when(taskPort.getTasks).calledWith().mockResolvedValue(tasks);

    const actual = await traget.getTasks();

    expect(actual).toEqual(expected);


  });
});