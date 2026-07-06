import { AppLayout } from "../layouts/appLayout.js";
import { Modal } from "../components/Modal/modal.js";
import { ProjectForm } from "../components/ProjectForm/projectForm.js";
import { ProjectList } from "../components/ProjectList/projectList.js";
import { ProjectService } from "../services/projectService.js";
import { eventBus } from "../core/eventBus.js";
import { EVENTS } from "../constants/events.js";

const projectService = new ProjectService();

export function renderDashboard() {

    const page = document.createElement("div");

    page.innerHTML = `
        <h1>Dashboard</h1>
        <p>Bienvenido al sistema Kanban.</p>
    `;

    const button = document.createElement("button");
    button.textContent = "Nuevo Proyecto";
    button.addEventListener("click", () => {

    const modal = new Modal({

        title: "Nuevo Proyecto",

        content: ProjectForm((project) => {

            // console.log(project);
            projectService.create(
            project.nombre,
            project.descripcion
            );
            
            eventBus.publish(EVENTS.PROJECT_CREATED);
            modal.close();
                // Temporalmente recargamos el dashboard
                location.hash = "";
                location.hash = "dashboard";

        })

    });

    modal.open();

});



    // Agregamos el botón al Dashboard
    page.appendChild(button);

    const list = new ProjectList();
    page.appendChild(list.element);


    return AppLayout(page);

}