import { Component, h } from 'preact';
import { observer, inject } from 'mobx-preact';

import { login } from '../auth.service';

@inject('authStore')
@observer 
export default class LoginForm extends Component {

    onSumbit = (e) => {
        login(this.props.authStore.creditnals)
            .then((result) => console.log("Logged"))
            .catch((err) => console.log(err));
    }

    render({authStore}) {
        return (
            <div class="container">
                <label for="username"><b>Username</b></label>
                <input onChange={(e) => authStore.setUsername(e.target.value)} type="text" placeholder="Enter Username" name="username" required />

                <label for="password"><b>Password</b></label>
                <input onChange={(e) => authStore.setPassword(e.target.value)} type="password" placeholder="Enter Password" name="password" required />

                <button onClick={this.onSumbit} type="button">Login</button>
            </div>
        );
    }
}