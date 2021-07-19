class UserApi {
    static login(userId, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.find((user) => user.userId === userId && user.password === password);
        return currentUser;
    }

    static addUser(details) {
        const users = JSON.parse(localStorage.getItem('users'));
        localStorage.setItem('users', JSON.stringify([...users, {...details, isAdmin: false}]));
    }
}

export default UserApi;
