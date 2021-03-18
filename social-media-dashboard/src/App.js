import "./App.css";
import "./Sample-data.js";
import Event from "./Components/Event";
import Platform from "./Components/Platform";
import Data from "./Sample-data";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark" : "light"}>
      <h1>Hello JS</h1>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setIsDark(!isDark)}
      >
        Switch themes
      </button>
      <div className="platformcontainer">
        {Data.platforms.map((platform, i) => {
          let myObject = Object.values(platform)[0];
          return (
            <Platform
              key={i}
              type={Object.keys(platform)}
              name={myObject.name}
              followers={myObject.followers}
              differ={myObject.difference}
            />
          );
        })}
      </div>

      <div className="eventcontainer">
        {Data.events.map((event, index) => (
          <Event
            key={index}
            platform={event.platform}
            type={event.type}
            number={event.amount}
            change={event.modifier}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
