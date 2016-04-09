let instance = null;

export default class Users {
  constructor() {
    if (!instance) {
      instance = this;
      this.users = [];
    }

    return instance;
  }

  setUsers(users) {
    this.users = users;
  }

  getRandomUser() {
    return this.users[Math.floor(Math.random() * (this.users.length))];
  }
}
