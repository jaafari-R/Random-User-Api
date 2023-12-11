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
    const userId = $("#savedUsers option:selected").val();
    const user = savedUsers.getUserById(userId);
    renderer.render(user);
})

async function renderRandomData() {
    const data = await apiManager.getRandomData();
    savedUsers.currentUser = data;
    renderer.render(data);
}

renderRandomData();
