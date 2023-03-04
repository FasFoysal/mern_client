import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useMediaQuery } from "react-responsive";
import { userContext } from "../App";

const Manu = () => {
  const { state } = useContext(userContext);
  const [click, setClick] = useState(false);
  const isMoble = useMediaQuery({
    query: "(min-width: 450px)",
  });
  // responsive
  return (
    <>
      <DehazeIcon
        className="resManu"
        onClick={() => {
          click ? setClick(false) : setClick(true);
        }}
      />
      <section className="manu">
        <div className="imgdiv">
          <NavLink to="/">
            <img
              className="animate__animated animate__pulse animate__infinite	infinite"
              src="./img/logo.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="link">
          {isMoble || click ? (
            <>
              {state ? (
                <>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/contract"
                  >
                    Contract
                  </NavLink>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/logout"
                  >
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/contract"
                  >
                    Contract
                  </NavLink>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/ragister"
                  >
                    Ragister
                  </NavLink>
                  <NavLink
                    style={{ display: `${click}` }}
                    className="exNav"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Manu;
