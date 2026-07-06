import { StorageService } from "../services/storageService.js";

const KEY = "projects";

export class ProjectRepository {

    getAll() {

        return StorageService.get(KEY);

    }

    save(projects) {

        StorageService.set(KEY, projects);

    }

}