import { useState } from 'react';

const useUserInfo = () => {
    const getUserInfo = () => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo') as string);
        return userInfo;
    };

    const [userInfo, setUserInfo] = useState(getUserInfo());

    const saveUserInfo = (userInfo:any) => {
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        setUserInfo(userInfo);
    };

    return {
        setUserInfo: saveUserInfo,
        userInfo
    }
}

export default useUserInfo