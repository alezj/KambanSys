import { TaskService } from "../../services/taskService.js";
import { ColumnService } from "../../services/columnService.js";

const taskService = new TaskService();
const columnService = new ColumnService();

export function KanbanStats(projectId) {

    const container = document.createElement("div");

    container.className = "kanban-stats";

    render();

    function render() {

        container.innerHTML = "";

        const columns = columnService.getByProject(projectId);

        let total = 0;

        const stats = {};

        console.log("ProjectId:", projectId);

const columns1 = columnService.getByProject(projectId);

console.log("Columnas:", columns);

        columns.forEach(column => {

            const tasks = taskService.getByColumn(column.id);

            stats[column.nombre] = tasks.length;

            total += tasks.length;

        });

        container.innerHTML = `

            <div class="stat-card">

                <h3>Total</h3>

                <span>${total}</span>

            </div>

            ${columns.map(column => `

                <div class="stat-card">

                    <h3>${column.nombre}</h3>

                    <span>${stats[column.nombre]}</span>

                </div>

            `).join("")}

        `;

    }

    return {

        element: container,

        render

    };

}