export function Title(text) {

    const h1 = document.createElement("h1");

    h1.className = "title";

    h1.textContent = text;

    return h1;

}