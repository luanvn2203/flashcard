import axiosClient from "./axiosClient";

const accountApi = {
    Login: (params) => {
        const url = '/login';
        return axiosClient.post(url, { params });
    },
    getAccountDetailByToken: (token) => {
        const url = '/me';
        return axiosClient.get(url, {
            headers: {
                'Authorization': `token ${token}`
            }
        });
    },
    Logout: (token) => {
        const url = '/logout';
        return axiosClient.delete(url, {
            headers: {
                'Authorization': `token ${token}`
            }
        });
    },
};

export default accountApi;