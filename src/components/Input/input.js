export function Input({

    id,

    placeholder = "",

    type = "text",

    value = ""

}) {

    const input = document.createElement("input");

    input.id = id;

    input.type = type;

    input.placeholder = placeholder;

    input.value = value;

    input.className = "input";

    return input;

}