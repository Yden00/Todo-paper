class TasksList {
    constructor(tasks = []) {
      this.tasks = tasks;
    }

    addTask(task) {
      task.id = `${+new Date()}`;
      task.createdAt = new Date();
      task.isCompleted = false;
      this.tasks.push(task);
      return true;
    }

    editTask(id){}

    deleteTask(id){
      const newTasks = this.tasks.filter(item => item.id !== id);
      if (newTasks.length !== this.tasks.length) {
        this.tasks = newTasks;
        return true;
      } else {
        return false;
      }
    }
}

const tasksList = new TasksList()