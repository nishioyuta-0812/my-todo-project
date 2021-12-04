import "reflect-metadata";
import { TaskUseCase } from "../../usecase/TaskUseCase";
import { mock } from "@kojiro.ueda/bandia";
import TaskPort from "../../port/TaskPort";
import { Description, TaskId, Tasks, Title } from "../../domain/task";
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
    expect(taskPort.getTasks).toBeCalled();

  });

  test("タスクを登録する", async () => {

    const titile = mock<Title>();
    const desc = mock<Description>();

    when(taskPort.registerTask).calledWith(titile,desc).mockImplementationOnce();

    await traget.registerTask(titile,desc);

    expect(taskPort.registerTask).toBeCalledWith(titile,desc);
  });

  test("タスクを完了する", async () => {
    const id = mock<TaskId>();

    when(taskPort.deleteById).calledWith(id).mockImplementationOnce();

    await traget.doneTask(id);

    expect(taskPort.deleteById).toBeCalledWith(id);

  });
});