import { BaseComponent } from "../../core/baseComponent.js";
import { ColumnService } from "../../services/columnService.js";
import { KanbanColumn } from "../KanbanColumn/kanbanColumn.js";

const columnService = new ColumnService();

export class KanbanBoard extends BaseComponent {

    constructor(projectId) {

        super();

        this.projectId = projectId;

        this.element = document.createElement("div");

        this.element.className = "kanban-board";

        this.render();

    }

    render() {

        this.element.innerHTML = "";

        const columns = columnService.getByProject(this.projectId);

        columns.forEach(column => {

    this.element.appendChild(

        KanbanColumn(column)

    );

});
        // columns.forEach(column => {

        //     const columnElement = document.createElement("div");

        //     columnElement.className = "kanban-column";

        //     columnElement.innerHTML = `
        //         <h2>${column.nombre}</h2>
        //     `;

        //     this.element.appendChild(columnElement);

        // });

    }

}