import { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [loginName, setLogonName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmitLogin = async (e:any) => {
        e.preventDefault();
        const credentials = { loginName, password };
        axios.post("https://localhost:7077/api/User/Login",
                   JSON.stringify(credentials), {
                    headers: {
                        'Content-Type':'application/json',
                        'Accept': 'application/json',
                       }
                   })
             .then(success => {
                if(success.status !== 200)
                    throw new Error("Failed to send request.");

                //Handle Status 200
                setErrorMessage("");
                console.log(success.data);
             })
             .catch(err => {
                setErrorMessage(err.response.data);
             })
    }
    
    return (
        <div className='flex justify-center items-center h-screen'>
            <form className='h-2/4 w-72'
                  onSubmit={onSubmitLogin}>
                <h1 className='text-3xl font-bold mb-3'>Login User</h1>
                
                {errorMessage && 
                    <div className='text-xs text-white bg-red-400 px-3 py-2 mb-2 rounded'> 
                        {errorMessage}
                    </div>
                }

                <div className='mb-2'>
                    <label className='flex text-sm mb-2'>Username / Email</label>
                    <input className='w-full px-3 py-2 text-sm 
                                        border border-gray-400 
                                        rounded
                                    focus:outline-blue-300' 
                            type='text' 
                            placeholder='Enter your Username or Email'
                            value={loginName}
                            onChange={(e) => setLogonName(e.target.value)}></input>
                </div>
                <div className='mb-4'>
                    <label className='flex text-sm mb-2'>Password</label>
                    <input className='w-full px-3 py-2 text-sm 
                                        border border-gray-400 
                                        rounded
                                    focus:outline-blue-300' 
                            type='password' 
                            placeholder='Enter your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className='w-full py-2 text-sm text-white
                                        rounded bg-blue-600
                                        hover:bg-blue-700
                                        disabled:bg-blue-500'
                            type='submit'>Login</button>
                    
                    <a href='#' className='flex w-full mt-5 text-sm
                                            text-blue-700
                                            hover:font-medium'>Create Account</a>
                </div>
            </form>
        </div>
    )
}

export default Login