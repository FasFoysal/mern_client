import React, { useState } from "react";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Ragister = () => {
  // user state
  const navigate = useNavigate();
  const [ragister, setRagister] = useState({
    uName: "",
    fName: "",
    work: "",
    email: "",
    pass: "",
    repass: "",
  });
  // input data get
  const inputData = (val) => {
    const { name, value } = val.target;
    setRagister((pre) => {
      return { ...pre, [name]: value };
    });
  };
  // send data backend using fetch post method
  const dataSend = async (e) => {
    e.preventDefault();
    const { uName, fName, work, email, pass, repass } = ragister;
    try {
      const res = await fetch("/ragister", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uName, fName, work, email, pass, repass }),
      });
      const resData = await res.json();
      const status = res.status;
      sendAlert(status,resData.mgs)
    } catch (error) {
      console.log(error);
    }
  };
  // error send function
  const sendAlert = (status,data)=>{
    if(status === 400){
     toast.error(data,{position:"top-center"});
    }else{
       toast.success(data,{position:"top-center"});
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }
  }
  return (
    <>
      <section className="ragister">
        <div className="ragisnterContainer">
          <div className="ragFron">
            <h1>Sign Up</h1>
            <form>
              <input
                onChange={inputData}
                value={ragister.uName}
                type="text"
                name="uName"
                id="uName"
                placeholder="User Name"
              />
              <input
                onChange={inputData}
                value={ragister.fName}
                type="text"
                name="fName"
                id="fName"
                placeholder="Full Name"
              />
              <input
                onChange={inputData}
                value={ragister.work}
                type="text"
                name="work"
                id="work"
                placeholder="Your Work"
              />
              <input
                onChange={inputData}
                value={ragister.email}
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <input
                onChange={inputData}
                value={ragister.pass}
                type="password"
                name="pass"
                id="pass"
                placeholder="Your Password"
                autoComplete='off'
              />
              <input
                onChange={inputData}
                value={ragister.repass}
                type="password"
                name="repass"
                id="repass"
                placeholder="Confirm Password"
                autoComplete='off'
              />
              <Button variant="contained" type="submit" onClick={dataSend}>
                Ragister
              </Button>
            </form>
            <NavLink to="/login" style={{ marginTop: "10px" }}>
              Already I have account
            </NavLink>
          </div>
          <div className="ragImg">
            <img
              src="./img/ragister.svg"
              className="animate__animated animate__pulse animate__infinite	infinite"
              alt="ragister"
            />
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Ragister;
