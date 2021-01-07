class TasksView {
    constructor(containerId) {
      this.containerId = containerId;
    }
  
    display(tasksArr) {
        document.querySelector(`#${this.containerId}`).innerHTML = tasksArr.map(task => {
            return `<li class="planned-task">
            <input data-id="${task.id}" type="checkbox" class="task-checkbox" name="task-checkbox" value="task-checkbox">
            <input data-id="${task.id}" class="edit-input" type="text">
            <button data-id="${task.id}" class="edit-btn">Edit</button>
            <label data-id="${task.id}" class="task" for="task-checkbox">${task.text}</label>
            <div>
                <img class="edit-img" data-id="${task.id}"  src="./assets/icons/create-white-18dp.svg" alt="edit">
                <img class="delete-img" data-id="${task.id}"  src="./assets/icons/delete-white-18dp.svg" alt="delete">
            </div>
        </li>
        <div class="task-date"><p>Time: ${task.createdAt.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')} Date: ${task.createdAt.toLocaleDateString()}</p></div>`
        }).join('')
    }
}