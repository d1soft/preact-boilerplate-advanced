import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import store from '../store';

const {authStore} = store;

import config from '../config.json';

const superagent = superagentPromise(_superagent, global.Promise);

export const apiEndpoint = process.env.NODE_ENV === 'production' 
    ? config.API_ENDPOINT_PROD 
    : config.API_ENDPOINT_DEV;

const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
        //authStore.logout();
    }
    return err;
};

const headerPlugin = req => {
    req.set('Accept', 'application/json');
}

const responseBody = res => res.body.data;

const tokenPlugin = req => {
    if (authStore.isLogged()) {
        req.set('authorization', `Token ${authStore.getAccessToken()}`);
        req.set('Access-Control-Allow-Origin', apiEndpoint);
    }
};

export const requests = {
    del: url =>
        superagent
            .del(`${apiEndpoint}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),

    get: url =>
        superagent
            .get(`${apiEndpoint}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),

    put: (url, body) =>
        superagent
            .put(`${apiEndpoint}${url}`, body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),

    post: (url, body) =>
        superagent
            .post(`${apiEndpoint}${url}`, body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody)
};