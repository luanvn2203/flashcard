import axiosClient from "./axiosClient";

const accountApi = {
    Login: (params) => {
        console.log(params)
        const url = '/login';
        return axiosClient.post(url, { params });
    }
};

export default accountApi;