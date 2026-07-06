import { StorageService } from "../services/storageService.js";

const KEY = "tasks";

export class TaskRepository {

    getAll() {

        return StorageService.get(KEY);

    }

    save(tasks) {

        StorageService.set(KEY, tasks);

    }

}