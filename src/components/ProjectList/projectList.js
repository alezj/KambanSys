import { BaseComponent } from "../../core/baseComponent.js";
import { eventBus } from "../../core/eventBus.js";
import { EVENTS } from "../../constants/events.js";
import { ProjectService } from "../../services/projectService.js";
import { ProjectCard } from "../ProjectCard/projectCard.js";
import { Modal } from "../Modal/modal.js";
import { ProjectForm } from "../ProjectForm/projectForm.js";


const projectService = new ProjectService();

export class ProjectList extends BaseComponent {

    constructor() {

        super();

        this.element = document.createElement("div");

        this.element.className = "project-list";

        this.render();

        this.subscribe(
            EVENTS.PROJECT_CREATED,
            () => this.render()
        );

        this.subscribe(
            EVENTS.PROJECT_UPDATED,
            () => this.render()
        );

        this.subscribe(
            EVENTS.PROJECT_DELETED,
            () => this.render()
        );

    }

    render() {

        this.element.innerHTML = "";

        const projects = projectService.getProjects();

        if (projects.length === 0) {

            const empty = document.createElement("p");

            empty.className = "empty-message";

            empty.textContent = "Aún no tienes proyectos.";

            this.element.appendChild(empty);

            return;

        }

        projects.forEach(project => {

            const card = ProjectCard(project, {

                onOpen: this.openProject.bind(this),
                onEdit: this.editProject.bind(this),
                onDelete: this.deleteProject.bind(this)

            });

            this.element.appendChild(card);

        });

    }

editProject(project) {

    const modal = new Modal({

        title: "Editar Proyecto",

        content: ProjectForm(project, (data) => {

            projectService.update(

                project.id,

                data.nombre,

                data.descripcion

            );

            eventBus.publish(EVENTS.PROJECT_UPDATED);

            modal.close();

        })

    });

    modal.open();

}
    openProject(project) {

        location.hash = `kanban/${project.id}`;

    }

    deleteProject(project) {

        const confirmar = confirm(
            `¿Desea eliminar el proyecto "${project.nombre}"?`
        );

        if (!confirmar)
            return;

        projectService.delete(project.id);

        eventBus.publish(EVENTS.PROJECT_DELETED);

    }

}
