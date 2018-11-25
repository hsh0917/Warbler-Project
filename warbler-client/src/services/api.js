import axios from 'axios';

export function setTokenHeader (token){
    if(token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}  // this is going to attach the information in the header when we're logged in.
    // when the user logs in, in our future requests, we can add their token with a header of authorization with value of bearer.

    export const apiCall = (method, path, data) => {
    return new Promise ((resolve, reject) => {
        return axios[method.toLowerCase()](path, data)
          .then(res => {
            return resolve(res.data);
          })
          .catch(err => {
            //when we get back infromation from Axios, it always comes in a certain object.
            return reject(err.response.data.error);
          });
    })
};
  
