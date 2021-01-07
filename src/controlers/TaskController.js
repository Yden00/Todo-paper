class TaskController {
  constructor() {
    this.filterView = new FilterView('filter');
    this.headerView = new HeaderView('header');
    this.tasksView = new TasksView('planned-list');
    this.completedTasks = new CompletedTasksView('completed-list')
  }
  setCurrentUser(user) {
    this.headerView.display(user);
    this.currentUser = user;
  }
    
  getCurrentUser() {
    return this.currentUser
  }
  async addTask({ text }) {
    const task = new Task(text);
    await tasksList.add(task)
    this.tasksView.display(tasksList.tasks);
  }

  async removeTask(id){
    await tasksList.delete(id);
    this.tasksView.display(tasksList.tasks);
  } 

  async editTask(id, task){
    await tasksList.edit(id,task)
    this.tasksView.display(tasksList.tasks,task);
  }
  
  async completeTask(id) {
   await tasksList.complete(id);
    this.completedTasks.display(tasksList.completedArr);
    this.tasksView.display(tasksList.tasks);
  }

  async searchTask(task){
    const foundTask = await tasksList.search(task);
    this.tasksView.display(foundTask); 
  }
}

const taskController = new TaskController();