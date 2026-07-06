import { ColumnRepository } from "../repositories/columnRepository.js";
import { Column } from "../models/column.js";

export class ColumnService {

    constructor() {

        this.repository = new ColumnRepository();

    }
    getByProject(projectId) {

    return this
        .repository
        .getAll()
        .filter(column => column.projectId == projectId)
        .sort((a, b) => a.orden - b.orden);

}
createDefaultColumns(projectId) {

    const columns = this.repository.getAll();

    columns.push(

        new Column({

            id: Date.now(),

            projectId,

            nombre: "Pendiente",

            orden: 1

        }),

        new Column({

            id: Date.now() + 1,

            projectId,

            nombre: "En progreso",

            orden: 2

        }),

        new Column({

            id: Date.now() + 2,

            projectId,

            nombre: "Finalizado",

            orden: 3

        })

    );

    this.repository.save(columns);

}
}