const currentTime = () => {
    var dateTime = new Date();
    var hrs = dateTime.getTime();
  
    document.getElementById("time").innerHTML = hrs;
  };
  setInterval(currentTime, 10);
  const currentDay = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const currentDayOfWeek = daysOfWeek[today.getDay()];
    const dayOfWeekElement = document.getElementById("currentDay");
    dayOfWeekElement.textContent = currentDayOfWeek;
  };
  currentDay();