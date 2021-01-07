class HeaderView {
    constructor(containerId) {
      this.containerId = containerId;
    }
    display(user){
        document.querySelector(`#${this.containerId}`).innerHTML = `<div class="logo">
            <img src="./assets/icons/datamola.0017dd5175903253e21f.svg" alt="Logo" class="logo-img">
            <h1>TODO</h1>
        </div>
        <div class="account">
            <span class="user">Hello,${user.login}</span>
            <button class="logout">Logout</button>
        </div>`
    }
}