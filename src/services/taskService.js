import { TaskRepository } from "../repositories/taskRepository.js";
import { Task } from "../models/task.js";

export class TaskService {

    constructor() {

        this.repository = new TaskRepository();

    }

    getByColumn(columnId) {

    return this
        .repository
        .getAll()
        .filter(task => task.columnId == columnId);

}
create(taskData) {

    const tasks = this.repository.getAll();

    const task = new Task({

        id: Date.now(),

        ...taskData

    });

    tasks.push(task);

    this.repository.save(tasks);

}

delete(id) {

    const tasks = this
        .repository
        .getAll()
        .filter(task => task.id !== id);

    this.repository.save(tasks);

}

move(taskId, newColumnId) {

    const tasks = this.repository.getAll();

    const task = tasks.find(t => t.id == taskId);

    if (!task)
        return;

    task.columnId = newColumnId;

    this.repository.save(tasks);

}
}