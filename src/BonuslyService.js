import request from 'request'
import UsersStore from './Users';

let Users = new UsersStore();
export default class Bonusly {
    constructor(baseUrl, token) {
      this.baseUrl = baseUrl;
      this.token = token;
    }

    getUsers(cb) {
      request.get({
        url: this.buildUrl('users')
      }, function(err, httpResponse, data) {
        var body = JSON.parse(data);
        if(err) {
          console.log(err);
        } else {
          Users.setUsers(body.result);
          cb();
        } 
      });
    }

    give(user) {
      request.post({
        url: this.buildUrl('bonuses'),
        body: {
          reason: `+1 @${user} you've been randomly chosen to get a point #exceptional`
        },
        json: true,
      }, function(err, httpResponse, data) {
        console.log(data);
      });
    }

    buildUrl(path) {
      return `${this.baseUrl}/${path}?access_token=${this.token}`;
    }
}
