import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AutoCompleteInput from "./components/AutoCompleteInput";

const arraySuggestion = ["Dawid", "Guzik ", "Dominika", "Adrian"];

function App() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      const userNames = result.data.map((user) => user.name);
      setSuggestions(userNames);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <AutoCompleteInput placeholder="Type Name" suggestions={suggestions} />
    </div>
  );
}

export default App;
