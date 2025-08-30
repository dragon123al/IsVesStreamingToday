const currentDate = new Date();
const dayIndex = currentDate.getDay();
// const testDayIndex = 0;
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = daysOfWeek[dayIndex];

const streamToday = (day) => {
  return day === "Monday" || day === "Tuesday" || day === "Thursday";
};

const statusElement = document.getElementById("stream-status");

const streamLink = "https://www.twitch.tv/vespernoctum";

if (streamToday(today)) {
  statusElement.innerHTML = `<a href="${streamLink}" target="_blank">Yes!</a>`;
} else {
  statusElement.textContent = "No.";
}

