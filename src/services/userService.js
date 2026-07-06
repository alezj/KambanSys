import { UserRepository } from "../repositories/userRepository.js";
import { appStore } from "../store/appStore.js";

export class UserService {

    constructor() {
        this.repository = new UserRepository();
    }

    login(nombre) {

        let usuarios = this.repository.getAll();

        let usuario = usuarios.find(u => u.nombre === nombre);

        if (!usuario) {

            usuario = {

                id: Date.now(),

                nombre

            };

            usuarios.push(usuario);

            this.repository.save(usuarios);

        }

        appStore.setUser(usuario);

        return usuario;

    }

    logout() {

        appStore.logout();

    }

    currentUser() {

        return appStore.getUser();

    }

}