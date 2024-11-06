const formEl = document.getElementById("add-task_form");
const outputEl = document.querySelector(".output-list");
const data = [];
outputEl.innerHTML = "";
formEl.addEventListener("submit", (el) => {
  el.preventDefault();
  const inputValue = el.target.elements[0].value;
  const uniqueId = Date.now() + Math.floor(Math.random() * 1000);
  const textObj = {
    id: uniqueId,
    text: inputValue,
  };
  data.push(textObj);
  el.target.reset();
  renderTasks();
});

function renderTasks() {
  let taskHtml = "";
  data.forEach((task, ind) => {
    taskHtml += `
      <div class="output-list_item" data-id="${task.id}">
        <span class="output-list_number">${ind + 1}</span>
        <span class="output-list_title">${task.text}</span>
        <button class="delete-list">Delete</button>
      </div>
    `;
  });
  outputEl.innerHTML = taskHtml;
  deleteItem();
}
function deleteItem() {
  const deleteButtons = document.querySelectorAll(".delete-list");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (el) => {
      const taskId = el.target.parentElement.dataset.id;
      // Remove the task with the matching ID from the data array
      const updatedData = data.filter((task) => task.id !== parseInt(taskId));
      // Update the global data array with the filtered results
      data.length = 0; // Clear the original data array
      data.push(...updatedData); // Push the updated data back
      renderTasks();
    });
  });
}
//
