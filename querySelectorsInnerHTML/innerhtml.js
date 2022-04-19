// Query selector can grab either an id, class, or tag
const rootElement = document.querySelector("#root"); // ID selector
// const rootElement = document.querySelector(".body"); // Class Name Selector
// const rootElement = document.querySelector("body"); // Tag Name Selector

// Clears the DOM for us to have a clean slate to render what we want
rootElement.innerHTML = ``;

// You can add items to the DOM thar contains nested items
rootElement.innerHTML += `
  <div id="button-container">
    <button id="main-btn">I'm a different button!!</button>
  </div>`;

// After a dynamicaly created element is on the DOM, you can grab it using a querySelecter
const buttonContainerElement = document.querySelector("#button-container");

// We use += when we want to append HTML instead of overwritting it
buttonContainerElement.innerHTML += `<button class="main-btn-class">I'm a really different button!!</button>`

// You can change Styles using JS!!!
const bodyElement = document.querySelector("body");
bodyElement.style.background = "#fbf3d5"


const buttonElement = document.getElementById("main-btn")
// If you want to just change the text in an element you can use either of these
buttonElement.innerHTML = "New button Label"
buttonElement.innerText = "New button Label"
