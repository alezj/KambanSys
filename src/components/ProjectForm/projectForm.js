import { Input } from "../Input/input.js";
import { Button } from "../Button/button.js";

export function ProjectForm(project = null, onSave) {

    const form = document.createElement("div");

    form.className = "project-form";

    // Nombre
 const txtNombre = Input({

    id: "txtProjectName",
    placeholder: "Nombre del proyecto",
    value: project?.nombre || ""

});

    // Descripción
    const txtDescripcion = document.createElement("textarea");

    txtDescripcion.id = "txtProjectDescription";
    txtDescripcion.placeholder = "Descripción";
    txtDescripcion.className = "textarea";
    txtDescripcion.value =  project?.descripcion || "";

    // Botón guardar
    const btnGuardar = Button({

        text: "Guardar",

        className: "btn-primary",

        onClick: () => {

            const nombre = txtNombre.value.trim();

            const descripcion = txtDescripcion.value.trim();

            if (!nombre) {

                alert("Ingrese el nombre del proyecto");

                return;

            }

            onSave({

                nombre,

                descripcion

            });

        }

    });

    form.appendChild(txtNombre);

    form.appendChild(txtDescripcion);

    form.appendChild(btnGuardar);

    return form;

}