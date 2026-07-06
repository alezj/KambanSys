import { ProjectRepository } from "../repositories/projectRepository.js";
import { UserService } from "./userService.js";
import { Project } from "../models/project.js";
import { ColumnService } from "./columnService.js";

export class ProjectService {

    constructor() {

        this.repository = new ProjectRepository();
        this.userService = new UserService();
        this.columnService = new ColumnService();

    }

    getProjects() {

        const user = this.userService.currentUser();

        if (!user)
            return [];

        return this
            .repository
            .getAll()
            .filter(p => p.usuarioId === user.id);

    }

    create(nombre, descripcion) {

        const user = this.userService.currentUser();

        if (!user)
            return;

        const projects = this.repository.getAll();

        const project = new Project({

            id: Date.now(),

            usuarioId: user.id,

            nombre,

            descripcion,

            color: "#2563eb"

        });

        projects.push(project);

        this.repository.save(projects);
        
        this.columnService.createDefaultColumns(project.id);


    }

    delete(id) {

        const projects = this
            .repository
            .getAll()
            .filter(p => p.id !== id);

        this.repository.save(projects);

    }
    
    update(id, nombre, descripcion) {

    const projects = this.repository.getAll();

    const project = projects.find(p => p.id === id);

    if (!project)
        return;

    project.nombre = nombre;
    project.descripcion = descripcion;

    this.repository.save(projects);

}

}
// import { ProjectRepository } from "../repositories/projectRepository.js";
// import { UserService } from "./userService.js";

// export class ProjectService {

//     constructor() {

//         this.repository = new ProjectRepository();
//         this.userService = new UserService();

//     }

//     getProjects() {

//         const user = this.userService.currentUser();

//         if (!user)
//             return [];

//         return this
//             .repository
//             .getAll()
//             .filter(p => p.usuarioId === user.id);

//     }

//     create(data) {

//         const projects = this.repository.getAll();

//         const user = this.userService.currentUser();

//         const project = {

//             id: Date.now(),

//             usuarioId: user.id,

//             nombre: data.nombre,

//             descripcion: data.descripcion,

//             color: data.color

//         };

//         projects.push(project);

//         this.repository.save(projects);

//     }

// }