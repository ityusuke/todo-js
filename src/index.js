import "./styles.css";

const addButton = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const incompleteList = document.getElementById("incomplete-list");
const onClickAdd = () => {
  let inputText = todoInput.value;
  todoInput.value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;
  div.appendChild(li);
  incompleteList.appendChild(div);
};

addButton.addEventListener("click", () => {
  onClickAdd();
});
