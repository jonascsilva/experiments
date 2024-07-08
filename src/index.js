import { cube } from "./math.js";

function component() {
  const element = document.createElement("pre");

  cube();

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to 125"].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
