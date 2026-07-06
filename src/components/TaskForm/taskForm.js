import { Input } from "../Input/input.js";
import { Button } from "../Button/button.js";

export function TaskForm(task = null, onSave) {

    const form = document.createElement("div");

    form.className = "task-form";

    const txtTitulo = Input({

        id: "txtTaskTitle",

        placeholder: "Título",

        value: task?.titulo || ""

    });

    const txtDescripcion = document.createElement("textarea");

    txtDescripcion.className = "textarea";

    txtDescripcion.placeholder = "Descripción";

    txtDescripcion.value = task?.descripcion || "";

    const btnGuardar = Button({

        text: "Guardar",

        className: "btn-primary",

        onClick: () => {

            const titulo = txtTitulo.value.trim();

            if (!titulo) {

                alert("Ingrese un título");

                return;

            }

            onSave({

                titulo,

                descripcion: txtDescripcion.value.trim()

            });

        }

    });

    form.appendChild(txtTitulo);

    form.appendChild(txtDescripcion);

    form.appendChild(btnGuardar);

    return form;

}