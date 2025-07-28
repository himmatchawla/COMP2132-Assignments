//set today date as default, and set minimum date as today
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();
if (currentMonth < 10) currentMonth = '0' + currentMonth;
if (currentDay < 10) currentDay = '0' + currentDay;
const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;
const dateInput = document.getElementById('apptDate');
dateInput.value = formattedDate;
dateInput.min = formattedDate;


// show and hide password
const password = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');
toggleBtn.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    toggleBtn.textContent = 'Hide';
  } else {
    password.type = 'password';
    toggleBtn.textContent = 'Show';
  }
});


//tooltip
const tooltipDisplay = document.getElementById('tooltipText');
const icon = document.getElementById('tooltipTrigger');
icon.addEventListener('mouseover', () => tooltipDisplay.style.display = 'inline-block');
icon.addEventListener('mouseout', () => tooltipDisplay.style.display = 'none');


//  form validation
const form = document.getElementById('apptForm');
const errorContainer = document.getElementById('errorContainer');

form.addEventListener('submit', function (e) {
  let errors = [];

  const first = document.getElementById('firstname');
  const last = document.getElementById('lastname');
  const id = document.getElementById('studentID');
  const pass = document.getElementById('password');
  const course = document.getElementById('course');

  const studentNumberRegEx = /^a0[0-9]{7}$/i;

  [first, last, id, pass, course].forEach(el => el.classList.remove('error'));

  errorContainer.innerHTML = '';
  errorContainer.style.display = 'none';

  if (!first.value.trim()) {
    errors.push("Firstname is required.");
    first.classList.add('error');
  }

  if (!last.value.trim()) {
    errors.push("Lastname is required.");
    last.classList.add('error');
  }

  if (!id.value.trim()) {
    errors.push("Student ID is required.");
    id.classList.add('error');
  } else if (!studentNumberRegEx.test(id.value)) {
    errors.push("Student ID must follow A01234567 format.");
    id.classList.add('error');
  }

  if (!pass.value.trim()) {
    errors.push("Password is required.");
    pass.classList.add('error');
  }

  if (course.value === "Choose your course:") {
    errors.push("Please select a course.");
    course.classList.add('error');
  }

  if (errors.length > 0) {
    e.preventDefault();
    errorContainer.innerHTML = `<strong>Form Submission Failed!</strong><ul><li>${errors.join("</li><li>")}</li></ul>`;
    errorContainer.style.display = 'block';
  }
});
