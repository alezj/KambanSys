import { StorageService } from "../services/storageService.js";

const KEY = "columns";

export class ColumnRepository {

    getAll() {

        return StorageService.get(KEY);

    }

    save(columns) {

        StorageService.set(KEY, columns);

    }

}