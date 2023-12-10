class User {
    constructor(user) {
        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.city = user.location.city
        this.state = user.location.state
        this.picture = user.picture.medium
    }
}

class UserApi {
    async getRandomUser() {
        const user = await $.get(USER_API);
        return new User(user.results[0]); 
    }
}
