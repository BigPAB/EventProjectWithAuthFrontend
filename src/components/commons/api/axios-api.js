import axios from 'axios'
// import store from "../../../stores/store";

export const getDataset = (path, set, config) => {
    getAxios(path, config)
        .then(result => {
            set(result.data === "" ? [] : result.data);
        })
        .catch(error => {
            console.error(error);
        });

};

const getAxios = (path, config) => {
    // const { token } = store.getState().loginStore;
    const token = sessionStorage.getItem("2");
    config = config || {};
    config.headers = {'Authorization': 'Bearer ' + token};
    return axios.get(path, config);
};

export const postData = (path, data, config) => {
    // const { token } = store.getState().loginStore;
    const token  = sessionStorage.getItem("2");
    config = config || {};
    config.headers = {'Authorization': 'Bearer ' + token};
    return axios.post(path, data, config);
};

export const putData = (path, id, data, config) => {
    // const { token } = store.getState().loginStore;
    const token  = sessionStorage.getItem("2");
    config = config || {};
    config.headers = {'Authorization': 'Bearer ' + token};
    return axios.put(path, data, config);
};

export const deleteData = (path, id, config) => {
    // const { token } = store.getState().loginStore;
    const token  = sessionStorage.getItem("2");
    config = config || {};
    config.headers = {'Authorization': 'Bearer ' + token};
    return axios.delete(path + id, config);
};
