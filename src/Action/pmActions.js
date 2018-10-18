import store from '../store'
import axios from 'axios'
export function fetchDataHandler() {
    return(dispatch)=> {
        return axios.get('https://randomuser.me/api/')
            .then(({data})=> {
                console.log(data.results)
                dispatch(storeUserToState(data.results))
            })
    }
}

function storeUserToState(payload) {
    return {
        type: 'STORE_USER_TO_STATE',
        payload : payload
    }
}