const apiManager = new ApiManager();
const renderer = new Renderer();
const savedUsers = new SavedUsers(renderer.addSavedUserOption);

$("#displayRandom").click(function() {
    renderRandomData();
});

$("#saveData").click(function() {
    const userData = savedUsers.saveUser();
    renderer.addSavedUserOption(userData.id, userData.userName);
})

// TODO
$("#loadData").click(function() {
    userId = $("#savedUsers option:selected").val();
    renderer.render(savedUsers.getUserById(userId, savedUsers.getUserNameById(userId)));
})

async function renderRandomData() {
    const data = await apiManager.getRandomData();
    savedUsers.currentUser = data;
    renderer.render(data);
}

renderRandomData();
