const protectedRoutes = [
    "dashboard",
    "kanban"
];

import { renderLogin } from "../views/loginView.js";
import { renderDashboard } from "../views/dashboardView.js";
import { renderKanban } from "../views/kanbanView.js";
import { UserService } from "../services/userService.js";
import { ROUTES } from "../constants/routes.js";

const userService = new UserService();

const routes = {
    [ROUTES.LOGIN]: renderLogin,
    [ROUTES.DASHBOARD]: renderDashboard,
    [ROUTES.KANBAN]: renderKanban
};

function parseRoute() {

    const hash = location.hash.replace("#", "") || "login";

    const segments = hash.split("/");

    return {
        route: segments[0],
        params: segments.slice(1)
    };

}
export function initRouter() {

    const { route, params } = parseRoute();

    navigate(route, params);

    window.addEventListener("hashchange", () => {

        const { route, params } = parseRoute();

        navigate(route, params);

    });

}

export function navigate(route, params = []) {

        console.log("Ruta:", route);
    console.log("Params:", params);
    if (
        protectedRoutes.includes(route) &&
        !userService.currentUser()
    ) {

        location.hash = "login";

        return;

    }

    const app = document.getElementById("app");

    app.innerHTML = "";

    const view = routes[route] || renderLogin;

    switch (route) {

        case ROUTES.KANBAN:

            app.appendChild(view(params[0]));

            break;

        default:

            app.appendChild(view());

            break;

    }

}
