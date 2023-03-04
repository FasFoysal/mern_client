import React,{useEffect, useState,useContext} from "react";
import {userContext} from '../App';
const Home = () => {
  const {dispatch} = useContext(userContext)
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetchData();
  },[]);
  // send bckend root and get Data
  const fetchData = async () => {
  
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const resData = await res.json();
      if (res.status !== 404) {
        setUserData(resData);
        dispatch({type:"user",playload:true})
      } else {
        setUserData(resData);
        dispatch({type:"user",playload:false})
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="mainHome">
        <div className="textHome">
          {
            userData.mgs === 'not found'?
            <>
              <h2>Welcome</h2>
          <p>We are the MERN developer</p>
            </>
          :<>
          <h2>Welcome {userData.uName}</h2>
      <p>We are the {userData.work}</p>
        </>
          }
          
        </div>
        <div className="homeLeft"></div>
        <div className="homeRignt"></div>
      </section>
    </>
  );
};

export default Home;