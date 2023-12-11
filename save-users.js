class SaveUsersLocalStorage {
    constructor(usersRenderer) {
        this.idCounter = localStorage.idCounter || 0;
        this.currentUser = {}
        // this.users = {};
        this.initSavedUsers(usersRenderer);
    }

    initSavedUsers(usersRenderer) {
        this.users = localStorage.savedUsers ? JSON.parse(localStorage.savedUsers) : {};
        Object.keys(this.users).forEach((userId) => {
            usersRenderer(userId, 
                this.users[userId].user.firstName + " " + this.users[userId].user.lastName);
        })
    }

    saveUser() {
        if(!this.currentUser) {
            alert("Please load a user before saving.");
            return;
        }

        this.users[`${this.idCounter}`] = this.currentUser;
        localStorage.idCounter = ++this.idCounter;
        localStorage.savedUsers = JSON.stringify(this.users);
        return {
            id: this.idCounter - 1,
            userName: this.currentUser.user.firstName + " " + this.currentUser.user.lastName
        }
    }

    getUserById(userId) {
        if(!userId) {
            alert("Invalid user Id!")
            return;
        }
        return this.users[userId];
    }

    getUserNameById(userId) {
        if(!userId || userId < 0) {
            alert("Invalid user Id!")
            return;
        }
        return this.users[userId].user.firstName + " " + this.users[userId].user.lastName;
    }
}