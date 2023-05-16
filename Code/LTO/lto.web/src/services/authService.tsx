//API Instance
import api from '../api/axiosAPI';

//Constant
import { ERROR_MESSAGE_LOGIN, 
         ERROR_MESSAGE_SEND_REQUEST, 
         SESSION_USER_INFO, 
         STRING_EMPTY, 
         API_URL_USER_LOGIN } from '../model/constant';

export const loginUser = async (credentials:any) => {
    await api.post(API_URL_USER_LOGIN,
        JSON.stringify(credentials))
    .then(res => {
        if(res.status !== 200)
            throw new Error(ERROR_MESSAGE_SEND_REQUEST);

        //Save userInfo in session storage
        sessionStorage.setItem(SESSION_USER_INFO, JSON.stringify(res.data)); 
    })
    .catch(err => {
        if(err.response === undefined)
            throw new Error(err.message)
        else if (err.response.data === undefined)
            throw new Error(ERROR_MESSAGE_LOGIN)
        else 
            throw new Error(err.response.data)
    })
}

export const logoutUser = () => {
    //Remove userInfo in session storage
    sessionStorage.clear();
}

export const isAuthenticated = ():boolean => {
    // Check if the userInfo exists in local storage or cookies
    const token = sessionStorage.getItem(SESSION_USER_INFO);
    return token !== null;
  }

  export const getEmail = ():string => {
    let email = STRING_EMPTY;
    if(isAuthenticated())
        email = JSON.parse(sessionStorage.getItem(SESSION_USER_INFO) as string).email;

    return email;
  }