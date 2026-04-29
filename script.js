console.log("JavaScript file connected successfully.");

const courseName = "Introduction to JavaScript";
let studentName = "Aina";
let score = 84;

console.log(courseName);
console.log(studentName);
console.log(score);



let age = 20;                // Number     
let city = "Seoul";        // String
let isStudent = true;            // Boolean
let emptyValue = null;           // Null
let subject;                     // Undefined

console.log(age, typeof age);
console.log(city, typeof city);
console.log(isStudent, typeof isStudent);
console.log(emptyValue, typeof emptyValue);
console.log(subject, typeof subject);


let marks = 98;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}


for (let i = 1; i <= 5; i++) {
    console.log("For loop number:", i);
}


let counter = 1;

while (counter <= 3) {
    console.log("While loop number:", counter);
    counter++;
}


let number = 1;

do {
    console.log("Do...while number:", number);
    number++;
} while (number <= 2);


function greetUser(name) {
    return "Hello, " + name + " !";
}

console.log(greetUser("Ali"));

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 7));


const multiplyNumbers = (x, y) => x * y;

console.log(multiplyNumbers(4, 6));

const mainTitle = document.getElementById("mainTitle");
const description = document.getElementById("description");
const outputBox = document.getElementById("outputBox");
const greetBtn = document.getElementById("greetBtn");
const colorBtn = document.getElementById("colorBtn");
const nameInput = document.getElementById("nameInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

console.log(mainTitle);
console.log(description);

mainTitle.textContent = "JavaScript DOM Lab";
description.textContent = "This text was updated using JavaScript.";


greetBtn.addEventListener("click", function () {
    const enteredName = nameInput.value;

    if (enteredName === "") {
        outputBox.textContent = "Please enter your name first.";
    } else {
        outputBox.textContent = greetUser(enteredName);
    }
});


colorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#2aae06";
    outputBox.textContent = "Background color changed successfully.";
});


addTaskBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "Practice JavaScript ";
    taskList.appendChild(newItem);
    console.log(newItem);
});






