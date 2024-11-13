import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("green");

  useEffect(() => {
    let timer;

    if (light === "green") {
      timer = setInterval(() => setLight("yellow"), 5000);
    } else if (light === "yellow") {
      timer = setInterval(() => setLight("red"), 5000);
    } else if (light === "red") {
      timer = setInterval(() => setLight("green"), 5000);
    }

    return () => clearInterval(timer);
  }, [light]);
  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          border: "5px solid black",
          width: "150px",
          margin: "150px auto",
          padding: "10px",
          borderRadius: "100px",
          backgroundColor: "#3339"
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: light === "green" ? "green" : "white",
            margin: "10px auto",
          }}
        />
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: light === "yellow" ? "yellow" : "white",
            margin: "10px auto",
          }}
        />
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: light === "red" ? "red" : "white",
            margin: "10px auto",
          }}
        />
      </div>
    </div>
  );
};

export default TrafficLight;
