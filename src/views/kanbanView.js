 import { AppLayout } from "../layouts/appLayout.js";
export function renderKanban(params) {

    const projectId = params[0];

    const page = document.createElement("div");
    if (!projectId) {
          page.innerHTML = `
        <h1>Proyecto</h1>
    ` }
    else {
    page.innerHTML = `
        <h1>Proyecto ${projectId}</h1>
    `;
    }
    return AppLayout(page);

}

