import React, { useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {userContext} from '../App';

const Logout = () => {
  const {dispatch} = useContext(userContext)
  const navigate = useNavigate();
  useEffect(() => {
    clearCookie();
  });
  // clear cookie call backend
  const clearCookie = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const resData = await res.json();
        dispatch({type:"user",playload:false})
        toast.success(resData.mgs, { position: "top-right" });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Logout;
