import {createStore} from "easy-peasy";
import {loginStore} from './userStore/loginStore'


const storeModel = {
    loginStore: loginStore
}

const store = createStore(storeModel);

export default store;