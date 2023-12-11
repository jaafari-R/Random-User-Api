class User {
    constructor(user, friends) {
        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.city = user.location.city
        this.state = user.location.state
        this.picture = user.picture.medium
        this.friends = friends.map(friend => {
            return {
                firstName: friend.name.first,
                lastName: friend.name.last
            }
        })
    }
}

class UserApi {
    async getRandomUser(friendsCount) {
        friendsCount = friendsCount || 0;
        const users = await $.get(USER_API + (friendsCount + 1)); // +1 the main user
        return new User(users.results[0], users.results.slice(1));
    }
}
