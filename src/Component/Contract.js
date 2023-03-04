import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";

const Contract = () => {
  // data fetch
  useEffect(() => {
    fetchData();
  },[]);
  // data get
  const [userData, setUserData] = useState({});
  // input feld
  const [mgs, setMgs] = useState({
    name: "",
    email: "",
    number: "",
    text: "",
  });
  // input data get
  const textChange = (e) => {
    const { name, value } = e.target;
    setMgs((p) => {
      return { ...p, [name]: value };
    });
  };
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
        setUserData(resData);
      } else {
        setUserData(resData);
        setMgs({ ...setMgs, name: resData.uName, email: resData.email });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // message send function
  const mgsSend = async (e) => {
    e.preventDefault();
    const { name, email, number, text } = mgs;
    if (name && email && number && text) {
      try {
        const res = await fetch("/messagesend", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            number,
            text,
          }),
        });
        setMgs((p) => {
          return { ...p, number: "", text: "" };
        });
        const resData = await res.json();
        if (res.status !== 200) {
          toast.success(resData.mgs, { position: "top-center" });
        } else {
          toast.warning(resData.mgs, { position: "top-center" });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("fill the form properly", { position: "top-center" });
    }
  };
  // return data
  return (
    <>
      <section className="mainCon">
        <div className="cardCon">
          {/* card start  */}
          <div className="cardStyle">
            <div className="logoCard">
              <AccountCircleIcon />
            </div>
            <div className="textCard">
              <h3>Name</h3>
              {userData.mgs ? <p>Unknown</p> : <p>{userData.fName}</p>}
            </div>
          </div>
          {/* card end  */}
          <div className="cardStyle">
            <div className="logoCard">
              <EmailIcon />
            </div>
            <div className="textCard">
              <h3>Email</h3>
              {userData.mgs ? <p>Unknown</p> : <p>{userData.email}</p>}
            </div>
          </div>
          {/* end  */}
          <div className="cardStyle">
            <div className="logoCard">
              <WorkIcon />
            </div>
            <div className="textCard">
              <h3>Work</h3>
              {userData.mgs ? <p>Unknown</p> : <p>{userData.work}</p>}
            </div>
          </div>
        </div>

        <div className="boxCon">
          <form method="post">
            <h1>Get Touch</h1>
            <div className="texEmlNum">
              <input
                onChange={textChange}
                id="name"
                name="name"
                type="text"
                value={mgs.name}
                placeholder="Your Name"
              />

              <input
                onChange={textChange}
                id="email"
                name="email"
                type="email"
                value={mgs.email}
                placeholder="Your Email"
              />

              <input
                onChange={textChange}
                value={mgs.number}
                id="number"
                name="number"
                type="number"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="textArea">
              <textarea
                onChange={textChange}
                value={mgs.text}
                name="text"
                id="text"
                placeholder="Message"
              />
            </div>
            <Button onClick={mgsSend} variant="contained" type="submit">
              Send
            </Button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contract;
