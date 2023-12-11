const apiManager = new ApiManager();
const renderer = new Renderer();

let idCounter = localStorage.idCounter || 0;
let currentUser = {}
const savedUsers = JSON.parse(localStorage.savedUsers || "{}");
initSavedUsers();

$("#displayRandom").click(function() {
    renderRandomData();
});

$("#saveData").click(function() {
    saveUser();
    localStorage.savedUsers = JSON.stringify(savedUsers);
})

// TODO
$("#loadData").click(function() {
    userId = $("#savedUsers option:selected").val();
    renderer.render(savedUsers[userId]);
})

async function renderRandomData() {
    const data = await apiManager.getRandomData();
    currentUser = data;
    renderer.render(data);
}

renderRandomData();

//////

function initSavedUsers() {
    Object.keys(savedUsers).forEach((userId) => {
        addUserOption(userId, savedUsers[userId]);
    })
}

function addUserOption(id, user) {
    $("#savedUsers").append($(`<option value=${id}>${user.users[0].firstName}</option>`));
}

function saveUser() {
    savedUsers[`${idCounter}`] = currentUser;
    localStorage.idCounter = ++idCounter;
    addUserOption(idCounter-1, currentUser);
}