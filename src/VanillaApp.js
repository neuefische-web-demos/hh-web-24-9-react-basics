export default function VanillaApp() {
  const div = document.createElement("div");
  div.innerHTML = "Vanilla JS";

  const buttonElement = Button();
  const buttonElement2 = Button();
  const buttonElement3 = Button();

  div.append(buttonElement);
  div.append(buttonElement2);
  div.append(buttonElement3);

  return div;
}

function Button() {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "click me";
  buttonElement.type = "button";
  buttonElement.addEventListener("click", () => {
    console.log("Hello World");
  });

  return buttonElement;
}
