export class Project {

    constructor({
        id,
        usuarioId,
        nombre,
        descripcion,
        color = "#2563eb",
        fechaCreacion = new Date()
    }) {

        this.id = id;
        this.usuarioId = usuarioId;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.color = color;
        this.fechaCreacion = fechaCreacion;

    }

}