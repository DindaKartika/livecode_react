import createStore from 'unistore'
import axios from 'axios'

const initialStates = {
    api_key : "",
    email : "",
    password : "",
    full_name : "",
    username : "",
    is_login : false,
    avatar : ""
}

export const store = createStore(initialStates)

export const actions = store => ({
    setField: (state, event) => {
        return{[event.target.name]: event.target.value};
    },
    postLogout: state =>{
        return {is_login: false};
    },
    postLogin: async state =>{
        const data = {username: state.username, password: state.password};
        await axios
            .post('https://api-todofancy.herokuapp.com/api/auth', data)
            .then(response =>{
                console.log("postLogin", response.data.user_data);
                if (response.data.user_data.hasOwnProperty("username")){
                    store.setState({
                        is_login: true,
                        username : response.data.user_data.username,
                        email: response.data.user_data.email,
                        avatar: response.data.user_data.avatar
                    });
                    console.log(this.is_login)
                }
            })
            .catch(error =>{
                console.log("postLogin err", error);
            })
    }
})
