const toDoElement = document
  .querySelector("#listItem")
  .content.querySelector(".toDoList__item");

const toDoContainer = document.querySelector(".toDoList__container");
const toDoForm = document.querySelector(".toDoForm");
const toDoFormInput = toDoForm.elements.toDoInput;
const toDoBtn = toDoForm.elements.toDoBtn;
const toDoClearBtn = document.querySelector(".toDoList__cleanBtn");

const initialItems = ["go for a walk", "read book", "write code"];

function handleToDoAddItem(event) {
  event.preventDefault();
  createListItem();
}

function createListItem(toDoText) {
  const newToDoElement = toDoElement.cloneNode(true);
  newToDoElement.textContent = toDoFormInput.value;
  if (toDoText) {
    newToDoElement.textContent = toDoText;
  }
  toDoContainer.prepend(newToDoElement);
  toDoFormInput.value = "";
  newToDoElement.addEventListener("click", () => {
    newToDoElement.classList.add("toDoList__item_complete");
  });
}

initialItems.forEach((item) => {
  createListItem(item);
});

toDoBtn.addEventListener("click", handleToDoAddItem);
toDoClearBtn.addEventListener("click", () => {
  const toDoItemList = document.querySelectorAll(".toDoList__item");
  toDoItemList.forEach((item) => {
    item.remove();
  });
});
