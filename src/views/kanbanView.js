import { AppLayout } from "../layouts/appLayout.js";
import { KanbanBoard } from "../components/KanbanBoard/kanbanBoard.js";

export function renderKanban(projectId) {

    const page = document.createElement("div");

    page.className = "kanban-page";

    const title = document.createElement("h1");
    title.textContent = `Proyecto ${projectId}`;

    page.appendChild(title);

    const board = new KanbanBoard(projectId);

    page.appendChild(board.element);

    return AppLayout(page);

}

//  import { AppLayout } from "../layouts/appLayout.js";
// export function renderKanban(params) {

//     const projectId = params[0];

//     const page = document.createElement("div");
//     if (!projectId) {
//           page.innerHTML = `
//         <h1>Proyecto</h1>
//     ` }
//     else {
//     page.innerHTML = `
//         <h1>Proyecto ${projectId}</h1>
//     `;
//     }
//     return AppLayout(page);

// }

