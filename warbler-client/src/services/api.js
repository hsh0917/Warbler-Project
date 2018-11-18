import axios from 'axios';

export const apiCall = (method, path, data) => {
    return new Promise ((resolve, reject) => {
        return axios[method](path, data).then(res => {
            return resolve(res.data);
        }).catch (err => {
            //when we get back infromation from Axios, it always comes in a certain object.
            return reject(err.response.data.error);
        })
    })
};

