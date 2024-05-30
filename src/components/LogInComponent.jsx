import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppData } from "../contexts/AppContext";
import { Button } from "react-bootstrap";

function LogInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const { userData, setIsLoggedIn, matchedFlightsData, setMatchedFlightsData } =
    useContext(AppData);

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const loginHandler = () => {
    let isValid = true;

    if (!email) {
      isValid = false;
      setNameErrorMessage("Name is Required");
    }
    if (!password) {
      isValid = false;
      setPasswordErrorMessage("Password is Required");
    }
    if (isValid) {
      let userByEmail = userData.find((user) => {
        if (user.email === email) {
          return true;
        }
      });

      let userByPassword = () => {
        if (userByEmail) {
          if (userByEmail.password === password) {
            return true;
          }
        }
      };

      if (!userByEmail) {
        setNameErrorMessage(
          "Sorry! There isn't any account associated with that email address"
        );
      }

      if (!userByPassword) {
        setPasswordErrorMessage("Wrong Password! Please Check...");
      }
      if (userByEmail && userByPassword) {
        setIsLoggedIn(true);

        if (matchedFlightsData.length !== 0) {
          goTo("/flight-lists");
        } else {
          goTo("/search-flights");
        }
      }
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Log In</h1>
        <div className="signUpBox border rounded p-3">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setNameErrorMessage("");
                }}
              />
              <span>{nameErrorMessage}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordErrorMessage("");
                }}
              />
              <span>{passwordErrorMessage}</span>
            </div>
            <div className="text-center  my-3 ">
              <Button
                type="button"
                className="btn btn-primary "
                onClick={loginHandler}
              >
                Log In
              </Button>
            </div>
          </form>
          <div className=" text-center">
            <p>
              Don't Have An Account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInComponent;
