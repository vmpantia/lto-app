import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//Components
import InputField from '../components/Inputs/InputField';
import Button from '../components/Buttons/Button';

//API Instance
import api from '../api/axiosAPI';

//Constant
import { USER_LOGIN_URL } from '../model/constant';

const Login = () => {
    const navigate = useNavigate();
    const [loginName, setLoginName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmitLogin = async (e:any) => {
        e.preventDefault();
        setErrorMessage("");
        setIsLoading(true);

        //Set timeout for Authentication
        setTimeout(async () => {
            await authUser({ loginName, password });
            setIsLoading(false);
        }, 500);
    }

    const authUser = async(credentials:any) => {
        await api.post(USER_LOGIN_URL,
                        JSON.stringify(credentials))
                    .then(res => {
                        if(res.status !== 200)
                            throw new Error("Failed to send request.");

                        //Handle Status 200
                        sessionStorage.setItem('userInfo', JSON.stringify(res.data)); /* Store userInfo to Session */
                        navigate("/"); /* Redirect to Layout Page */
                    })
                    .catch(err => {
                        if(err.response === undefined)
                            setErrorMessage(err.message);
                        else if (err.response.data !== undefined)
                            setErrorMessage(err.data);
                        else 
                            setErrorMessage("Error in sending request for login.");
                    })
    }
    
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <img className='h-80 w-80 m-10' 
                        src={require('../assets/Icons/lto-icon.png')}>
                </img>
                <div className='w-1/4'>
                    <form
                            onSubmit={onSubmitLogin}>
                        <h1 className='text-3xl font-bold mb-3'>Login User</h1>
                        
                        {errorMessage && 
                            <div className='text-xs text-white bg-red-400 px-3 py-2 mb-2 rounded'> 
                                {errorMessage}
                            </div>
                        }

                        <InputField type='text' 
                                    label='Username or Email' 
                                    placeholder='Enter your Username or Email' 
                                    value={loginName} 
                                    isDisabled={isLoading} 
                                    onChangedHandler={(e) => setLoginName(e.target.value)} />

                        <InputField type='password' 
                                    label='Password' 
                                    placeholder='Enter your Password' 
                                    value={password} 
                                    isDisabled={isLoading} 
                                    onChangedHandler={(e) => setPassword(e.target.value)} />

                        <div>
                            <Button type='submit' text='Login' isDisabled={isLoading} />
                            <p className='text-center text-sm font-medium my-2'>- or -</p>
                            <Button type='submit' text='Create Account' isDisabled={isLoading} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login