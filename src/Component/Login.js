import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import {NavLink, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {userContext} from '../App'
const Login = () => {
  const {dispatch} = useContext(userContext)
  const navigate = useNavigate();
  // user state
  const [loginData, setLoginData] = useState({
    user:"",
    pass:""
  })
  // input data get
const setLogin = ((data)=>{
  const {value, name} = data.target;
  setLoginData((p)=>{
    return {...p, [name]:value}
  })
})
// send data backend using fetch post method
  const sumbitLoginData = async(e)=>{
    e.preventDefault();
    const {user, pass} = loginData;
    try {
      const res = await fetch('/login',{
        method:"POST",
        headers:{
          'Accept':"application/json",
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          user, pass
        })
      })
      const resData = await res.json();
      const status = res.status;
      sendAlert(status,resData.mgs)
    } catch (error) {
      console.log(error)
    }
  }
  // error send function
  const sendAlert = (status,data)=>{
    if(status === 500){
     toast.error(data,{position:"top-center"});
    }else{
      dispatch({type:"user",playload:true})
       toast.success(data,{position:"top-center"});
      setTimeout(()=>{
        navigate('/')
      },2000)
    }
  }
  return (
    <>
       <section className='ragister'>
        <div className='ragisnterContainer'>
          <div className='ragFron'>
            <h1>Login</h1>
            <form >
              <input onChange={setLogin} value={loginData.user} type="text" name="user" id="user" placeholder='User name or Email' />
              <input onChange={setLogin} value={loginData.pass} type="password" name="pass" id="pass" placeholder='Password' autoComplete='off' />
              <Button variant="outlined" color='success' type='submit' onClick={sumbitLoginData}>Login</Button>
            </form>
            <NavLink to="/ragister" style={{marginTop:"10px"}}>I have no Account</NavLink>
          </div>
          <div className='ragImg'>
            <img src="./img/login.svg" className="animate__animated animate__pulse animate__infinite	infinite" alt="login" />
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default Login