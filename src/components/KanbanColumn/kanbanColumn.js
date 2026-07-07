import { Modal } from "../Modal/modal.js";
import { TaskForm } from "../TaskForm/taskForm.js";
import { TaskService } from "../../services/taskService.js";
import { eventBus } from "../../core/eventBus.js";
import { EVENTS } from "../../constants/events.js";
import { TaskCard } from "../TaskCard/taskCard.js";

const taskService = new TaskService();

export function KanbanColumn(column) {

    const container = document.createElement("div");

    container.addEventListener("dragover", (e) => {
    e.preventDefault();
    });

container.addEventListener("drop", (e) => {

    e.preventDefault();

    const taskId = Number(

        e.dataTransfer.getData("taskId")

    );

    taskService.move(

        taskId,

        column.id

    );

    eventBus.publish(

        EVENTS.TASK_MOVED

    );

});
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

    const taskList = container.querySelector(".task-list");

    function renderTasks() {

        taskList.innerHTML = "";

        const tasks = taskService.getByColumn(column.id);

        if (tasks.length === 0) {

            taskList.innerHTML = `
                <p class="empty-message">
                    Sin tareas
                </p>
            `;

            return;

        }

        tasks.forEach(task => {

    const card = TaskCard(task, {

        onEdit: editTask,

        onDelete: deleteTask

    });

    taskList.appendChild(card);

});

    }

    renderTasks();

    eventBus.subscribe( EVENTS.TASK_CREATED,renderTasks);

    eventBus.subscribe(EVENTS.TASK_UPDATED,renderTasks);

    eventBus.subscribe(EVENTS.TASK_DELETED,renderTasks );

    eventBus.subscribe(EVENTS.TASK_MOVED,renderTasks);

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
// function editTask(task) {

//     console.log("Editar tarea:", task);

// }
function editTask(task) {

    const modal = new Modal({

        title: "Editar tarea",

        content: TaskForm(task, (data) => {

            taskService.update(

                task.id,

                data.titulo,

                data.descripcion

            );

            eventBus.publish(EVENTS.TASK_UPDATED);

            modal.close();

        })

    });

    modal.open();

}

// function deleteTask(task) {

//     console.log("Eliminar tarea:", task);

// }
function deleteTask(task) {

    const ok = confirm(

        `¿Eliminar "${task.titulo}"?`

    );

    if (!ok)
        return;

    taskService.delete(task.id);

    eventBus.publish(EVENTS.TASK_DELETED);

}
    return container;

}