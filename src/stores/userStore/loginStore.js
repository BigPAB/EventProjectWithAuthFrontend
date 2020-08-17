import {action} from "easy-peasy";


export const loginStore = {
    user: {},
    logged: false,
    token: null,

    sessionLogin: action((state, token) => {
        state.logged = true;
        state.token = token;
        sessionStorage.setItem("1", "true");
        sessionStorage.setItem("2", token)
    }),

    sessionLogout: action((state, token) => {
        state.logged = false;
        state.token = null;
        sessionStorage.removeItem("1");
        sessionStorage.removeItem("2");
    })
}