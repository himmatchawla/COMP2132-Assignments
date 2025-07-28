// PART1 (finding target name)
const studentsArray = ["Jack", "Jane", "Janet", "Jeremy", "Jerome"];
studentsArray.push("Himmat", "Jesse", "Jill");
let targetName = prompt("Type your name: ");

let targetFound = false;
const studentList = document.getElementById("studentList");
document.getElementById("targetNameDisplay").textContent = targetName;
document.getElementById("studentCount").textContent = `There are ${studentsArray.length} student(s) in this list.`;

studentsArray.forEach(name => {
  const li = document.createElement("li");
  if (name.toLowerCase() === targetName.toLowerCase()) {
    li.innerHTML = `${name} &lt;-- target name found!`;
    li.classList.add("highlight");
    targetFound = true;
  } else {
    li.textContent = name;
  }
  studentList.appendChild(li);
});

document.getElementById("finalStudentReport").innerHTML = targetFound
  ? `<div class="success">👍 YES! Target name was found in the list</div>`
  : `<div class="failure">👎 NO, Target name was NOT found in the list</div>`;


// PART2 (tally even/odd sum)
const arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, -5];
let even = 0, odd = 0, sum = 0;

const numberList = document.getElementById("numberList");

arrayOfNumbers.forEach(num => {
  const li = document.createElement("li");
  li.textContent = num;
  numberList.appendChild(li);

  if (num !== 0) {
    num % 2 === 0 ? even++ : odd++;
  }

  sum += num;
});

document.getElementById("evenCount").textContent = `There are ${even} even number(s) in the array.`;
document.getElementById("oddCount").textContent = `There are ${odd} odd number(s) in the array.`;
document.getElementById("sumCount").textContent = `The sum of all array numbers is: ${sum}.`;

// PART3 (count up/down)
const countDiv = document.getElementById("countUpDown");

arrayOfNumbers.forEach(num => {
  const section = document.createElement("section");
  const header = document.createElement("h3");
  header.innerHTML = `Number: ${num}`;
  section.appendChild(header);

  if (num === 0) {
    const p = document.createElement("p");
    p.textContent = "There is no counting to be done.";
    section.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.textContent = num > 0 ? "Count down:" : "Count up:";
    section.appendChild(p);

    const ul = document.createElement("ul");
    if (num > 0) {
      for (let i = num; i >= 0; i--) {
        const li = document.createElement("li");
        li.textContent = i;
        ul.appendChild(li);
      }
    } else {
      for (let i = num; i <= 0; i++) {
        const li = document.createElement("li");
        li.textContent = i;
        ul.appendChild(li);
      }
    }
    section.appendChild(ul);
  }

  section.style.borderTop = "1px solid #555";
  section.style.paddingTop = "1rem";
  section.style.marginTop = "1rem";
  countDiv.appendChild(section);
});
