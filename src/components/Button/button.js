export function Button({

    text,

    id = "",

    type = "button",

    className = "",

    onClick = null

}) {

    const button = document.createElement("button");

    button.type = type;

    button.id = id;

    button.className = `btn ${className}`;

    button.textContent = text;

    if (onClick)
        button.addEventListener("click", onClick);

    return button;

}