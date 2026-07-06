export class Task {

    constructor({

        id,

        projectId,

        columnId,

        titulo,

        descripcion = "",

        prioridad = "Media",

        responsable = "",

        fechaCreacion = new Date()

    }) {

        this.id = id;

        this.projectId = projectId;

        this.columnId = columnId;

        this.titulo = titulo;

        this.descripcion = descripcion;

        this.prioridad = prioridad;

        this.responsable = responsable;

        this.fechaCreacion = fechaCreacion;

    }

}