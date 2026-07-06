import { UserService } from "../services/userService.js";

const userService = new UserService();

export function Sidebar() {

    const aside = document.createElement("aside");

    aside.className = "sidebar";

    aside.innerHTML = `

        <nav>

            <a href="#dashboard">Dashboard</a>

            <a href="#kanban">Kanban</a>

            <a href="#" id="logout">

                Cerrar sesión

            </a>

        </nav>

    `;

    aside
        .querySelector("#logout")
        .addEventListener("click", e => {

            e.preventDefault();

            userService.logout();

            location.hash = "login";

        });

    return aside;

}