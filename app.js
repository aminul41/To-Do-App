const formEl = document.getElementById("add-task_form");
const outputEl = document.querySelector(".output-list");

const data = [];
outputEl.innerHTML = "";
formEl.addEventListener("submit", (el) => {
  el.preventDefault();
  const inputValue = el.target.elements[0].value;
  const textObj = {
    id: data.length + 1,
    text: inputValue,
  };
  data.push(textObj);
  el.target.reset();

  let taskHtml = ``;
  data.forEach((task) => {
    taskHtml += `<div class="output-list_item">
            <span class="output-list_number">${task.id}</span>
            <span class="output-list_title">${task.text}</span>
            <button class="delete-list">Delete</button>
          </div>`;
  });
  outputEl.innerHTML = taskHtml;

  deleteItem();
});
function deleteItem() {
  const deleteButtons = outputEl.querySelectorAll(".delete-list");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log(button);
      const butnId = event.target.parentElement.children[0].textContent;
      const updatedData = data.filter((task) => {
        return task.id !== butnId;
      });
      console.log(data);
      console.log(updatedData);
      //   let tasskHtml = "";
      //   updatedData.forEach((task) => {
      //     tasskHtml += `<div class="output-list_item">
      //             <span class="output-list_number">${task.id}</span>
      //             <span class="output-list_title">${task.text}</span>
      //             <button class="delete-list">Delete</button>
      //           </div>`;
      //   });
      //   outputEl.innerHTML = tasskHtml;
    });
  });
}
