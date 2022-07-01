import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5001",
    headers: {
        "content-type": "application/json;charset=utf-8",
        accept: "application/json",
    }
});

api.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('jwtToken')
    const googleToken = localStorage.getItem('googleToken')
    if ((googleToken) !== null) {
        config.headers.commen["Authorization"] = `Bearer ${googleToken}`;
    }

    if ((accessToken) !== null) {
        console.log(accessToken)
        config.headers.commen["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
})

export const apis = {
    signup: (id, email, pw) => api.post('/api/users/signup', {
        username: email,
        nickname: id,
        password: pw,
    }),
    login: (email, pw) => api.post('/api/users/login', {
        username: email,
        password: pw,
    },
        { withCredentials: true }),
    GoogleLogin : (userInfo) => api.post('/api/users/login/google', userInfo)
}