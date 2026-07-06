import { UserService } from "../services/userService.js";

import { Card } from "../components/Card/card.js";
import { Button } from "../components/Button/button.js";
import { Input } from "../components/Input/input.js";
import { Title } from "../components/Title/title.js";

const userService = new UserService();

export function renderLogin() {

    // Contenedor principal
    const page = document.createElement("div");
    page.className = "login";

    // Tarjeta del formulario
    const card = Card();
    card.classList.add("login-card");

    // Título
    const title = Title("Kanban Lite");

    // Input
    const inputUser = Input({
        id: "txtUser",
        placeholder: "Ingrese su nombre"
    });

    // Botón
    const buttonLogin = Button({
        id: "btnLogin",
        text: "Entrar",
        className: "btn-primary",
        onClick: login
    });

    // Ensamblar la tarjeta
    card.appendChild(title);
    card.appendChild(inputUser);
    card.appendChild(buttonLogin);

    // Agregar la tarjeta a la página
    page.appendChild(card);

    return page;
}

function login() {

    const nombre = document
        .getElementById("txtUser")
        .value
        .trim();

    if (!nombre) {
        alert("Ingrese un nombre");
        return;
    }

    userService.login(nombre);

    location.hash = "dashboard";
}