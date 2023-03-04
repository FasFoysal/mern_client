import React, { useEffect,useState } from "react";
import BasicTabs from "./Tabs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const About = () => {
  
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  });
  // data get function get
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
      if (res.status !== 200) {
        toast.warn("plz login first", {
          position: "top-right",
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setUserData(resData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
        <section className="ragister">
          <div style={{ width: "50%" }} className="ragisnterContainer">
            <div className="aboutLeft">
              <img src="./img/login.svg" alt="me" />
              <div className="aboutMore">
                <p>{userData.uName}</p>
                <p>{userData.email}</p>
                <p>{userData.work}</p>
              </div>
            </div>
            <div className="aboutRight">
              <div className="aboutRightTop">
                <b>{userData.fName}</b>
                <p>{userData.work}</p>
              </div>
              <div className="aboutRightButtom">
                <BasicTabs data={userData} />
              </div>
            </div>
          </div>
        </section>

      <ToastContainer />
    </>
  );
};

export default About;
