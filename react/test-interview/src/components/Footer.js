import React, { useState, useEffect } from "react";
import "./Footer.css"; // This imports the CSS file for styling

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every minute
    const timerId = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
    return () => clearInterval(timerId); // Cleanup the timer on component unmount
  }, []);

  // Format the date and time
  const day = currentTime.toLocaleDateString(undefined, { weekday: "long" });
  const time = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }); // Exclude seconds

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Eliana Yepez</p>
      <p className="date-time">{`${day}, ${time}`}</p>{" "}
      {/* Display the current day and time without seconds */}
    </footer>
  );
};

export default Footer;
