import React, { useState } from "react";
import TextBubble from "./components/TextBubble";
import UserCard from "./components/UserCard/UserCard";
import UserCardCompare from "./components/UserCardCompare";
import { Switch, Route, useHistory, Link } from "react-router-dom";

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
    setLoading(true);
    getUserData(username).then(userData => {
      if (userData !== null && userData.hasData) {
        setUserData(userData);
        history.push("/user/" + username);
      } else {
        history.push("/");
      }
      setLoading(false);
    });
  };

  const usernameSearchEndpoint = "/userData?username=";
  const getUserData = username => {
    return new Promise((resolve, reject) => {
      fetch(process.env.REACT_APP_BACKEND_URL + usernameSearchEndpoint + username)
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
      <Link style={{ textDecoration: "none" }} to="/">
        <TextBubble text="Rainbow 6 Siege Stat Tracker" type={"h1"} />
      </Link>

      <TextBubble
        type={"span"}
        text={
          <form>
            <label>Username: </label>
            <input
              id="username"
              onChange={onUsernameInput}
              type="text"
              value={username}
            />
            <button onClick={searchUsername} type="submit">
              search
            </button>{" "}
            <label>Compare With: </label>
            <input
              id="usernameCompare"
              onChange={onUsernameInput}
              type="text"
              value={usernameCompare}
            />
            <button onClick={compareUsers} type="submit">
              compare
            </button>
          </form>
        }
      ></TextBubble>

      {loading ? <div className="loader"></div> : null}
      {!loading && (
        <Switch>
          <Route exact path="/">
            <TextBubble
              text="Welcome to Rainbow 6 Siege Stat Tracker! Enter in a username
                above to find the stats of that user. You can also compare stats
                between users using the compare with option."
              type={"h3"}
            />
          </Route>
          <Route path="/user">
            <UserCard userData={userData} />
          </Route>
          <Route path="/compareUsers">
            <UserCardCompare
              userData={userData}
              userCompareData={userCompareData}
            />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
