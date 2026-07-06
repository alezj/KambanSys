import { StorageService } from "../services/storageService.js";

const KEY = "usuarios";

export class UserRepository {

    getAll() {
        return StorageService.get(KEY);
    }

    save(users) {
        StorageService.set(KEY, users);
    }

}