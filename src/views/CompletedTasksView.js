class CompletedTasksView {
    constructor(containerId) {
      this.containerId = containerId;
    }
  
    display(completedTasksArr) {
        document.querySelector(`#${this.containerId}`).innerHTML = completedTasksArr.map(task => {
            return `<li class="completed-task">
                        <input data-id="${task.id}" type="checkbox" class="completed_task-checkbox" name="task-checkbox" value="task-checkbox">
                        <label for="completed_task-checkbox">${task.text}</label>
                    </li>
                    <div class="task-date"><p>Time: ${task.createdAt.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')} Date: ${task.createdAt.toLocaleDateString()}</p></div>`
        }).join('')
    }
}