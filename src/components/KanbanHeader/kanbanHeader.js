import { ProjectService } from "../../services/projectService.js";

const projectService = new ProjectService();

export function KanbanHeader(projectId, actions = {}) {

    const project = projectService.getById(projectId);

    const header = document.createElement("div");

    header.className = "kanban-header";

    header.innerHTML = `

        <div class="project-info">

            <h1>${project?.nombre || "Proyecto"}</h1>

            <p>

                ${project?.descripcion || "Sin descripción"}

            </p>

        </div>

        <div class="project-actions">

            <button class="new-task-btn">

                + Nueva tarea

            </button>

            <button class="edit-project-btn">

                Editar

            </button>

        </div>

    `;

    header
        .querySelector(".new-task-btn")
        .addEventListener("click", () => {

            actions.onNewTask?.();

        });

    header
        .querySelector(".edit-project-btn")
        .addEventListener("click", () => {

            actions.onEditProject?.();

        });

    return header;

}