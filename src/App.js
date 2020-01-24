import React, { useState } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard/UserCard";
import UserCardCompare from "./components/UserCardCompare";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import axios from 'axios'

const App = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameCompare, setUsernameCompare] = useState("");
  const [userData, setUserData] = useState({});
  const [userCompareData, setUserCompareData] = useState({});
  const [loading, setLoading] = useState(false);

  const onUsernameInput = event => {
    event.target.id === "username"
      ? setUsername(event.target.value)
      : setUsernameCompare(event.target.value);
  };

  const compareUsers = event => {
    event.preventDefault();
    setUserData({});
    setUserCompareData({});
    setLoading(true);
    Promise.all([getUserData(username), getUserData(usernameCompare)]).then(
      ([userData, userCompareData]) => {
        if (userData.hasData && userCompareData.hasData) {
          setUserData(userData);
          setUserCompareData(userCompareData);
          history.push(
            "/compareUsers/username=" +
              username +
              "&usernameCompare=" +
              usernameCompare
          );
        } else {
          history.push("/");
        }
        setLoading(false);
      }
    );
  };

  const searchUsername = event => {
    event.preventDefault();
    setUserData({});
    setLoading(true);
    getUserData(username).then(userData => {
      setUserData(userData);
      if (userData !== null) {
        setUserData(userData);
        history.push("/user/" + username);
      } else {
        history.push("/");
      }
      setLoading(false);
    });
  };

  const getUserData = username => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:8080/userData?username=" + username)
        .then(response => response.json())
        .then(data => {
          if (data.hasData) {
            setLoading(false);
            resolve(data);
          } else {
            resolve(null);
          }
        })
        .catch(() => resolve(null));
    });
  };

  return (
    <div className="app">
      <Link style={{textDecoration: "none"}} to="/"><Header /></Link>
      <form>
        <label className="formLabel">Username: </label>
        <input
          id="username"
          className="formLabel"
          onChange={onUsernameInput}
          type="text"
          value={username}
        />
        <button onClick={searchUsername} className="formLabel" type="submit">
          search
        </button>{" "}
        <label className="formLabel">Compare With: </label>
        <input
          id="usernameCompare"
          className="formLabel"
          onChange={onUsernameInput}
          type="text"
          value={usernameCompare}
        />
        <button onClick={compareUsers} className="formLabel" type="submit">
          compare
        </button>
      </form>

      {loading ? <div className="loader"></div> : null}
      {!loading && (
        <Switch>
          <Route exact path="/">
            <h4 className="whiteText">Welcome to Rainbow 6 Siege Stat Tracker! Enter in a username above to find the stats of that user. 
            You can also compare stats between users using the compare with option.</h4>
          </Route>
          <Route path="/user">
            <UserCard userData={userData} />
          </Route>
          <Route path="/compareUsers">
            <UserCardCompare userData={userData} userCompareData={userCompareData} />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
