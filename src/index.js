document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const description_input = document.getElementById("new-task-description");
  const form = document.getElementById("create-task-form");
  const task_list = document.getElementById("tasks");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const list_item = document.createElement("li");
    list_item.innerText = description_input.value;
    const remove_btn = document.createElement("button");
    remove_btn.innerText = "remove";
    remove_btn.addEventListener("click", (event) => {
      event.target.parentNode.remove(list_item);
    });
    list_item.appendChild(remove_btn);
    task_list.appendChild(list_item);
  });
});
