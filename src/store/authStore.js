import bind from 'autobind-decorator';
import { observable, action } from 'mobx';

@bind
export default class AuthStore {
    accessToken = undefined;

    @observable logged = false;
    @observable creditnals = {
        username: '',
        password: '',
        email: ''
    }
    
    constructor() {
        this.restoreAccessToken();
    }

    @action setUsername(username) {
        this.creditnals.username = username;
    }

    @action setPassword(password) {
        this.creditnals.password = password;
    }

    @action setEmail(email) {
        this.creditnals.email = email;
    }

    @action reset() {
        this.creditnals = {
            username: '',
            password: '',
            email: ''
        }
    }

    setAccessToken(accessToken, expiredAt) {
        this.accessToken = accessToken;
        window.localStorage.setItem("access_token", accessToken);
    }

    getAccessToken() {
        return this.accessToken;
    }

    restoreAccessToken() {
        this.accessToken = window.localStorage.getItem("access_token");
        if(this.accessToken) 
            this.logged = true;
    }

    isLogged() {
        return this.logged === true;
    }
}