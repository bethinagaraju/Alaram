import React from "react";

function RealTimeClock() {
  // Directly manipulating the DOM using setInterval
  const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Update the time directly in the DOM (using id to target the elements)
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
  };

  // Start the interval when the component renders
  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>
        Current Times: <span id="hours">0</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
      </h1>
    </div>
  );
}

export default RealTimeClock;
