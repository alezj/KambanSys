import { AppLayout } from "../layouts/appLayout.js";
import { KanbanBoard } from "../components/KanbanBoard/kanbanBoard.js";
import { KanbanHeader } from "../components/KanbanHeader/kanbanHeader.js";
import { KanbanStats } from "../components/KanbanStats/kanbanStats.js";
import { eventBus } from "../core/eventBus.js";
import { EVENTS } from "../constants/events.js";

export function renderKanban(projectId) {
    
console.log("renderKanban recibió:", projectId);
    const page = document.createElement("div");

    page.className = "kanban-page";

    const title = document.createElement("h1");
    
    const board = new KanbanBoard(projectId);

    title.textContent = `Proyecto ${projectId}`;

const header = KanbanHeader(projectId, {

    onNewTask: () => {

        console.log("Nueva tarea");

    },

    onEditProject: () => {

        console.log("Editar proyecto");

    }

});

const stats = KanbanStats(projectId);


eventBus.subscribe(EVENTS.TASK_CREATED, () => {

    stats.render();

});

eventBus.subscribe(EVENTS.TASK_UPDATED, () => {

    stats.render();

});

eventBus.subscribe(EVENTS.TASK_DELETED, () => {

    stats.render();

});

eventBus.subscribe(EVENTS.TASK_MOVED, () => {

    stats.render();

});

page.appendChild(header);

page.appendChild(stats.element);

page.appendChild(board.element);

    return AppLayout(page);

}

