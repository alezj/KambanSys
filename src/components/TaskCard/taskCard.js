export function TaskCard(task, actions = {}) {

    const card = document.createElement("div");

    card.className = "task-card";
    
    card.draggable = true;

    card.innerHTML = `

        <div class="task-header">

            <h4>${task.titulo}</h4>

        </div>

        <p class="task-description">

            ${task.descripcion || "Sin descripción"}

        </p>

        <div class="task-actions">

            <button class="edit-btn">

                Editar

            </button>

            <button class="delete-btn">

                Eliminar

            </button>

        </div>

    `;

    card
        .querySelector(".edit-btn")
        .addEventListener("click", () => {

            actions.onEdit?.(task);

        });

    card
        .querySelector(".delete-btn")
        .addEventListener("click", () => {

            actions.onDelete?.(task);

        });
    
    card
        .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData(
        "taskId", task.id );
        });

    card
        .addEventListener("dragstart", () => {
        card.classList.add("dragging");});

    card
        .addEventListener("dragend", () => {
        card.classList.remove("dragging");
        });
        
    return card;

}