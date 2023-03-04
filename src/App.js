import React, { useEffect, useState, createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Manu from "./Component/Manu";
import Home from "./Component/Home";
import About from "./Component/About";
import Contract from "./Component/Contract";
import Ragister from "./Component/Ragister";
import Login from "./Component/Login";
import Loading from "./Component/Loading";
import Logout from "./Component/Logout";
import Error from "./Component/Error";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import {initialState, reducer} from './reducer/Reducer'
const dispatch = (val) => {
  console.log(val);
};

export const userContext = createContext()  
const App = () => {
  const [state, dispatch] = useReducer(reducer,initialState);

  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  // loding require
  if (loading) {
    return <Loading />;
  }
  return (
    <React.StrictMode>
      <userContext.Provider value={{state, dispatch}}>
      <Manu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/ragister" element={<Ragister />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </userContext.Provider>
    </React.StrictMode>
  );
};

export default App;
export { dispatch };
