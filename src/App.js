import React, { useState } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard/UserCard";
import { Switch, Route, useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  const NAME_URL = "https://r6tab.com/api/search.php?platform=uplay&search=";
  const USER_DATA_URL = "https://r6tab.com/api/player.php?p_id=";
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const onUsernameInput = event => {
    setUsername(event.target.value);
  };

  const searchUsername = event => {
    event.preventDefault();
    setUserData({});
    setLoading(true);
    fetch(NAME_URL + username)
      .then(response => response.json())
      .then(data => {
        if (data.totalresults > 0) {
          const basicUserData = data.results.find(
            user => user.p_name === username
          );
          if (basicUserData === undefined) {
            setLoading(false);
            return;
          }
          const { p_id } = basicUserData;
          fetch(USER_DATA_URL + p_id)
            .then(response => response.json())
            .then(data => {
              if (data.playerfound) {
                setUserData(data);
                history.push("/userCard/" + username);
              } else {
                history.push("/");
              }
              setLoading(false);
            });
        }
      });
  };

  return (
    <div className="app">
      <Header />
      <form onSubmit={searchUsername}>
        <label className="formLabel">Username: </label>
        <input
          className="formLabel"
          onChange={onUsernameInput}
          type="text"
          value={username}
        />
        <button className="formLabel" type="submit">
          search
        </button>
      </form>
      {loading ? <div className="loader"></div> : null}
      {!loading && (
        <Switch>
          <Route path="/userCard">
            <UserCard userData={userData} />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
