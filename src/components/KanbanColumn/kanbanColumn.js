import { Modal } from "../Modal/modal.js";
import { TaskForm } from "../TaskForm/taskForm.js";
import { TaskService } from "../../services/taskService.js";
import { eventBus } from "../../core/eventBus.js";
import { EVENTS } from "../../constants/events.js";

const taskService = new TaskService();

const tasks = taskService.getByColumn(column.id);

export function KanbanColumn(column) {

    const container = document.createElement("div");

    container.className = "kanban-column";

    container.innerHTML = `

        <div class="column-header">

            <h2>${column.nombre}</h2>

            <button class="add-task-btn">

                +

            </button>

        </div>

        <div class="task-list"></div>

    `;

    container
        .querySelector(".add-task-btn")
        .addEventListener("click", () => {

            const modal = new Modal({

                title: "Nueva tarea",

                content: TaskForm(null, (data) => {

                    taskService.create({

                        projectId: column.projectId,

                        columnId: column.id,

                        titulo: data.titulo,

                        descripcion: data.descripcion

                    });

                    eventBus.publish(EVENTS.TASK_CREATED);

                    modal.close();

                })

            });

            modal.open();

        });

    return container;

}
// import { TaskService } from "../../services/taskService.js";

// const taskService = new TaskService();

// export function KanbanColumn(column) {

//     const container = document.createElement("div");

//     container.className = "kanban-column";

//     container.innerHTML = `

//         <div class="column-header">

//             <h2>${column.nombre}</h2>

//             <button class="add-task-btn">
//                 +
//             </button>

//         </div>

//         <div class="task-list"></div>

//     `;

//     const taskList = container.querySelector(".task-list");

//     const tasks = taskService.getByColumn(column.id);

//     if (tasks.length === 0) {

//         taskList.innerHTML = `
//             <p class="empty-message">
//                 Sin tareas
//             </p>
//         `;

//     }

//     return container;

// }