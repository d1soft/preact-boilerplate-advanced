import { Component, h } from 'preact';
import { observer, inject } from 'mobx-preact';

@inject('authStore')
@observer 
export default class RegisterForm extends Component {

    render() {
        return (
            <div class="container">
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter username" name="username" required />

                <label for="email"><b>Email</b></label>
                <input type="email" placeholder="Enter email" name="email" required />

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="password" required />

                <button type="button">Register</button>
            </div>
        );
    }
}