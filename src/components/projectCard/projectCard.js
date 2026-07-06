export function ProjectCard(project, actions = {}) {

    const {
        onOpen = () => {},
        onEdit = () => {},
        onDelete = () => {}
    } = actions;

    const card = document.createElement("div");

    card.className = "project-card";

    card.innerHTML = `

        <div class="project-color"
             style="background:${project.color}">
        </div>

        <h3>${project.nombre}</h3>

        <p>${project.descripcion || "Sin descripción"}</p>

        <div class="project-actions">

            <button class="open-btn">
                Abrir
            </button>

            <button class="edit-btn">
            Editar
            </button>

            <button class="delete-btn">
                Eliminar
            </button>

        </div>

    `;

    card
        .querySelector(".open-btn")
        .addEventListener("click", () => onOpen(project));

    card
        .querySelector(".delete-btn")
        .addEventListener("click", () => onDelete(project));

    card
        .querySelector(".edit-btn")
        .addEventListener("click", () => onEdit(project));

    return card;

}
// export function ProjectCard(project) {

//     const card = document.createElement("div");

//     card.className = "project-card";

//     card.innerHTML = `

//         <div class="project-color"
//              style="background:${project.color}">
//         </div>

//         <h3>${project.nombre}</h3>

//         <p>${project.descripcion || "Sin descripción"}</p>

//         <div class="project-actions">

//             <button class="open-btn">
//                 Abrir
//             </button>

//             <button class="delete-btn">
//                 Eliminar
//             </button>

//         </div>

//     `;

//     return card;

// }