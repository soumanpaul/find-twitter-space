import React from "react";
import Fields from "./query";
import "./App.css";
import axios from "axios";

function App() {
  const [splceList, setSpaceList] = React.useState([]);

  async function fetchData() {
    let config = {
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAADcnYgEAAAAAUZ%2BxF7HJmXJ%2BAJ%2FzIvTme0gvvRo%3DpgdYMBlUOH47c9FT8Ml5uqtiMYCJrWNufq7l1yaByC3fXakyKK",
      },
    };
    let url = `https://api.twitter.com/2/spaces/search?query=${Fields.query}&state=${Fields.state}&space.fields=${Fields.spaceFields}&expansions=${Fields.expansions}&user.fields=${Fields.userFields}&topic.fields=${Fields.topicFields}`;
    let res = await axios.get(url, config);
    setSpaceList(res.data.data);
    console.log("Response.........", res);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App glow">
      <p className="header-style">Find Twitter Space you want to join!</p>
      <p>
        {splceList.length > 0 &&
          splceList.map((itme) => <div className="card">{itme.title}</div>)}
      </p>
    </div>
  );
}

export default App;
