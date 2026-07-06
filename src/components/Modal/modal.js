export class Modal {

    constructor({
        title = "",
        content = null,
        onClose = null
    }) {

        this.onClose = onClose;

        // Overlay
        this.overlay = document.createElement("div");
        this.overlay.className = "modal-overlay";

        // Ventana
        this.modal = document.createElement("div");
        this.modal.className = "modal";

        // Header
        const header = document.createElement("div");
        header.className = "modal-header";

        const titleElement = document.createElement("h2");
        titleElement.textContent = title;

        const closeButton = document.createElement("button");
        closeButton.className = "modal-close";
        closeButton.innerHTML = "&times;";

        closeButton.addEventListener("click", () => this.close());

        header.appendChild(titleElement);
        header.appendChild(closeButton);

        // Body
        const body = document.createElement("div");
        body.className = "modal-body";

        if (content)
            body.appendChild(content);

        this.modal.appendChild(header);
        this.modal.appendChild(body);

        this.overlay.appendChild(this.modal);

        // Cerrar haciendo clic fuera del modal
        this.overlay.addEventListener("click", (e) => {

            if (e.target === this.overlay) {
                this.close();
            }

        });

    }

    open() {

        document.body.appendChild(this.overlay);

    }

    close() {

        this.overlay.remove();

        if (this.onClose)
            this.onClose();

    }

}