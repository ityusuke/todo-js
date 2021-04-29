import "./styles.css";

const addButton = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const incompleteList = document.getElementById("incomplete-list");
const completeList = document.getElementById("complete-list");
const onClickAdd = () => {
  //入力値を取得
  let inputText = todoInput.value;
  todoInput.value = "";

  /**
   * エレメント追加
   */
  createIncompleteList(inputText);
};
//TODO追加機能
addButton.addEventListener("click", () => {
  onClickAdd();
});

//指定のDOM要素を削除
const deleteList = (deleteTarget) => {
  incompleteList.removeChild(deleteTarget);
};

const initListItem = (targetItem) => {
  const innerText = targetItem.firstElementChild.innerText;

  targetItem.textContent = null;

  const li = document.createElement("li");
  li.innerText = innerText;
  targetItem.appendChild(li);
  return targetItem;
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";

  //仮想DOMに要素追加
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  incompleteList.appendChild(div);

  /**
   * 完了ボタンクリック時のイベントを設定
   */
  completeBtn.addEventListener("click", () => {
    //DOMの初期化
    deleteList(completeBtn.parentNode);
    const addTarget = initListItem(completeBtn.parentNode);

    const backBtn = document.createElement("button");
    backBtn.innerText = "戻る";
    backBtn.addEventListener("click", () => {
      completeList.removeChild(backBtn.parentNode);
      const innerText = backBtn.parentNode.firstElementChild.innerText;
      createIncompleteList(innerText);

      // const completeBtn = document.createElement("button");
      // completeBtn.innerText = "完了";

      // const deleteBtn = document.createElement("button");
      // deleteBtn.innerText = "削除";

      // addTarget.appendChild(completeBtn);
      // addTarget.appendChild(deleteBtn);
      // incompleteList.appendChild(addTarget);
    });

    addTarget.appendChild(backBtn);
    completeList.appendChild(addTarget);
  });

  deleteBtn.addEventListener("click", () => {
    deleteList(deleteBtn.parentNode);
  });
};
