import { Header } from "../components/header.js";
import { Sidebar } from "../components/sidebar.js";

export function AppLayout(content) {

    const container = document.createElement("div");

    container.className = "layout";

    container.appendChild(Header());

    const body = document.createElement("div");

    body.className = "layout-body";

    body.appendChild(Sidebar());

    const main = document.createElement("main");

    main.className = "content";

    main.appendChild(content);

    body.appendChild(main);

    container.appendChild(body);

    return container;

}