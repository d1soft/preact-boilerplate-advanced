import { requests } from 'lib/http';

export function login(creditnals) {
    return requests.post('/login', {
        username: creditnals.username,
        password: creditnals.password
    })
}

export function register(creditnals) {
    return requests.post('/register', {
        username: creditnals.username,
        password: creditnals.password,
        email: creditnals.email
    });
}