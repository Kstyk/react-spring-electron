import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [string, setString] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8081/hello`);
      setString(response.data);
      console.log(string);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="App">{string}</div>;
}

export default App;
