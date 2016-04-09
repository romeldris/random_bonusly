import BonuslyService from './BonuslyService'
import config from '../config.json'
import UsersStore from './Users';

let Users = new UsersStore();

export default class Bon {
  init() {
    this.bonusly = new BonuslyService(config.url, config.token);
  }

  start() {
    this.bonusly.getUsers(() => {
      console.log('Time to give bonusly points');
      setInterval(() => {
        this.bonusly.give(Users.getRandomUser().username);
      }, 10000);
    });
  }
}
