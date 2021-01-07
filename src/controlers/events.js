const toDo = document.querySelector('.main-page');
const regForm = document.querySelector('.registration-page');
const logForm = document.querySelector('.login-page');
const plannedList = document.querySelector('.planned-list');
const completedList = document.querySelector('.completed-list');
const addBtn = document.querySelector('.add-btn');
const searchBtn = document.querySelector('.find');
const searchInp = document.querySelector('.search-input');
const undoBtn = document.querySelector('.undo-btn');


function submitRegForm(event) {
  event.preventDefault()
  let regObj = {}
  event.target.querySelectorAll("input").forEach(item => {
    regObj = {
      ...regObj,
      [item.id]: item.value
    }
  })
  console.log(regObj)
  if (regObj.password === regObj.repeatPassword) {
    taskController.setCurrentUser(regObj)
    localStorage.setItem('user', JSON.stringify(regObj))
    regForm.style.display = 'none';
    logForm.style.display = 'flex';
  } else {
    document.querySelector('.error-reg').style.display = "inline";
    setTimeout(() => {
      document.querySelector('.error-reg').style.display = "none";
    }, 5000)
  }
}
  regForm.addEventListener('submit', submitRegForm)

  document.querySelector('.log-link').addEventListener('click', (event) => {
    event.preventDefault();
    regForm.style.display = 'none';
    logForm.style.display = 'flex';
  })

  document.querySelector('.reg-link').addEventListener('click', (event) => {
    event.preventDefault();
    regForm.style.display = 'flex';
    logForm.style.display = 'none';
  })

  function submitLogForm(event) {
    let user = JSON.parse(localStorage.getItem('user'));
    event.preventDefault();
    let logObj = {};
    event.target.querySelectorAll("input").forEach(item => {
      logObj = {
        ...logObj,
        [item.id]: item.value
      }
    })
    if (user.login === logObj.login && user.password === logObj.password) {
      taskController.setCurrentUser(logObj);
      localStorage.setItem('user', JSON.stringify(logObj));
      regForm.style.display = 'none';
      logForm.style.display = 'none';
      toDo.style.display = 'flex';
    } else {
      document.querySelector('.error-log').style.display = "inline";
      setTimeout(() => {
        document.querySelector('.error-log').style.display = "none";
      }, 5000)
    }
  }
  logForm.addEventListener('submit', submitLogForm);

  document.getElementById('header').addEventListener('click', (event) => {
    if (event.target === document.querySelector('.logout')) {
      toDo.style.display = 'none';
      logForm.style.display = 'flex';
    }
  })

  addBtn.addEventListener('click', event => {
    event.preventDefault();
    taskController.addTask({
      text: document.querySelector('.input-task').value
    });
    taskController.tasksView.display(tasksList.tasks);
  })

  searchBtn.addEventListener('click', event => {
    event.preventDefault();
    taskController.searchTask(searchInp.value);
    if (tasksList.tasks.length > 1) {
      undoBtn.style.display = 'block';
    }
    undoBtn.addEventListener('click', () => {
      taskController.tasksView.display(tasksList.tasks);
      undoBtn.style.display = 'none';
    })
  })

  plannedList.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.classList.value === 'delete-img') {
      taskController.removeTask(event.target.dataset.id);
      event.stopPropagation();
    } else if (event.target.classList.value === 'edit-img') {
      const NodeTask = Array.from(document.querySelectorAll('.task')).find(el => el.dataset.id === event.target.dataset.id);
      const NodeEditBtn = Array.from(document.querySelectorAll('.edit-btn')).find(el => el.dataset.id === event.target.dataset.id);
      const NodeEditInp = Array.from(document.querySelectorAll('.edit-input')).find(el => el.dataset.id === event.target.dataset.id);
      NodeTask.style.display = 'none'
      NodeEditInp.style.display = 'inline';
      NodeEditBtn.style.display = 'block';
      document.querySelectorAll('.edit-btn').forEach(el => el.addEventListener('click', event => {
        taskController.editTask(event.target.dataset.id, NodeEditInp.value);
        NodeEditInp.style.display = 'none';
        NodeTask.style.display = 'inline';
      }));
      event.stopPropagation();
    } else if (event.target.classList.value === 'task-checkbox' && event.target.checked) {
      taskController.completeTask(event.target.dataset.id);
    }
  })