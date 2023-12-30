function displayDateAndTime() {
  let curDateObject = new Date();
  let curHours = curDateObject.getHours() - 12;
  let curMin = curDateObject.getMinutes();
  let curSec = curDateObject.getSeconds();

  let curDate = curDateObject.getDate();
  let curMonth = curDateObject.getMonth();
  let curYear = curDateObject.getFullYear();

  document.getElementById("hours").innerHTML = curHours;
  document.getElementById("min").innerHTML = curMin;
  document.getElementById("sec").innerHTML = curSec;

  document.getElementById("date").innerHTML = curDate;
  document.getElementById("month").innerHTML = curMonth;
  document.getElementById("year").innerHTML = curYear;
}
