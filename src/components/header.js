import { UserService } from "../services/userService.js";

const userService = new UserService();

export function Header() {

    const header = document.createElement("header");

    const user = userService.currentUser();

    header.className = "header";

    header.innerHTML = `

        <div class="logo">

            📋 Kanban Lite

        </div>

        <div>

            ${user ? user.nombre : ""}

        </div>

    `;

    return header;

}