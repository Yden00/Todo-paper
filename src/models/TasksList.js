class TasksList {
  constructor(tasks = []) {
    this.tasks = tasks;
    this.completedArr = [];
  }

  add(task) {
    task.id = `${+new Date()}`;
    task.createdAt = new Date();
    task.isCompleted = false;
    this.tasks.push(task);
    return Promise.resolve(true);
  }

  edit(id, task) {
    const editTask = this.tasks.find(item => item.id === id);
    editTask.text = task;
    return Promise.resolve(true);
  }

  delete(id) {
    const newTasks = this.tasks.filter(item => item.id !== id);
    return new Promise((resolve, reject) => {
      if (newTasks.length !== this.tasks.length) {
        this.tasks = newTasks;
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  complete(id) {
    const completedTask = tasksList.tasks.find(el => el.id === id)
    completedTask.isCompleted = true;
    this.completedArr.push(completedTask);
    this.tasks.splice(tasksList.tasks.indexOf(completedTask), 1);
    return Promise.resolve(true);
  }

  search(searchInp) {
    const filteredTask = this.tasks.filter(el => el.text === searchInp)
    return new Promise((resolve, reject) => {
      if (filteredTask) {
        resolve(filteredTask)
      } else {
        reject(false)
      }
    })
  }
}

const tasksList = new TasksList()