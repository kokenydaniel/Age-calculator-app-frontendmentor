const resultYears = document.querySelector("#resultYears");
const resultMonths = document.querySelector("#resultMonths");
const resultDays = document.querySelector("#resultDays");
const errorFieldDay = document.querySelector(".error-message-day");
const errorFieldMonth = document.querySelector(".error-message-month");
const errorFieldYear = document.querySelector(".error-message-year");

const calculate = () => {
  const day = parseInt(document.querySelector("#day").value, 10);
  const dayInput = document.querySelector("#day");
  const month = parseInt(document.querySelector("#month").value, 10);
  const monthInput = document.querySelector("#month");
  const year = parseInt(document.querySelector("#year").value, 10);
  const yearInput = document.querySelector("#year");
  const dayLabel = document.querySelector('label[for="day"]');
  const monthLabel = document.querySelector('label[for="month"]');
  const yearLabel = document.querySelector('label[for="year"]');

  errorFieldDay.innerHTML = "";
  errorFieldMonth.innerHTML = "";
  errorFieldYear.innerHTML = "";
  dayInput.style.borderColor = "";
  dayLabel.style.color = "";
  monthInput.style.borderColor = "";
  monthLabel.style.color = "";
  yearInput.style.borderColor = "";
  yearLabel.style.color = "";

  if (!day || day < 1 || day > 31) {
    errorFieldDay.innerHTML = "Must be a valid day";
    dayLabel.style.color = "var(--Light-red)";
    dayInput.style.borderColor = "var(--Light-red)";
  }
  if (!month || month < 1 || month > 12) {
    errorFieldMonth.innerHTML = "Must be a valid month";
    monthLabel.style.color = "var(--Light-red)";
    monthInput.style.borderColor = "var(--Light-red)";
  }
  if (!year || year > new Date().getFullYear()) {
    errorFieldYear.innerHTML = "Must be in the past";
    yearLabel.style.color = "var(--Light-red)";
    yearInput.style.borderColor = "var(--Light-red)";
  }

  if (
    errorFieldYear.innerHTML ||
    errorFieldMonth.innerHTML ||
    errorFieldDay.innerHTML
  ) {
    return;
  }

  let today = new Date();
  const birthDate = new Date(year, month - 1, day);
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  if (birthDay < 1 || birthDay > new Date(year, month, 0).getDate()) {
    errorFieldDay.innerHTML = "Must be a valid day";
    dayLabel.style.color = "var(--Light-red)";
    dayInput.style.borderColor = "var(--Light-red)";
  }
  if (isNaN(year) || birthYear > today.getFullYear()) {
    errorFieldYear.innerHTML = "Must be in the past";
    yearLabel.style.color = "var(--Light-red)";
    yearInput.style.borderColor = "var(--Light-red)";
  }
  if (isNaN(month) || birthMonth < 0 || birthMonth > 11) {
    errorFieldMonth.innerHTML = "Must be a valid month";
    monthLabel.style.color = "var(--Light-red)";
    monthInput.style.borderColor = "var(--Light-red)";
  }

  if (
    errorFieldYear.innerHTML ||
    errorFieldMonth.innerHTML ||
    errorFieldDay.innerHTML
  ) {
    return;
  }

  if (isNaN(birthDate.getTime()) || birthDate >= today) {
    errorFieldDay.innerHTML = "Must be a valid date";
    errorFieldMonth.innerHTML = "Must be a valid date";
    errorFieldYear.innerHTML = "Must be a valid date";
    return;
  }

  let timeDifference = today - birthDate;

  const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
  timeDifference -= years * 365.25 * 24 * 60 * 60 * 1000;

  const months = Math.floor(timeDifference / (30.44 * 24 * 60 * 60 * 1000));
  timeDifference -= months * 30.44 * 24 * 60 * 60 * 1000;

  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  resultYears.innerHTML = years;
  resultMonths.innerHTML = months;
  resultDays.innerHTML = days;
};
