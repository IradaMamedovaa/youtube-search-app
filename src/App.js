import React, { useState, useEffect } from "react";
import "./App.scss";
import List from "./Components/List/List";
import SearchBar from "./Components/SearchBar/SearchBar";
import youtubeIcon from "./youtube-logo.svg";

const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (value.length > 0) {
        fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&q=${value}`
        )
          .then((response) => response.json())
          .then((responseData) => {
            setResult(responseData.items);
          })
          .catch((error) => console.log(error));
      } else {
        setResult([]);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [value]);

  const onChangeEvent = (e) => {
    setValue(e.target.value);
  };
  const onSubmitEvent = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>
        <img src={youtubeIcon} alt="youtubeIcon" />
        <SearchBar
          onChangeEvent={onChangeEvent}
          onSubmitEvent={onSubmitEvent}
          value={value}
        />
      </header>
      {result && <List result={result} />}
    </div>
  );
};

export default App;
