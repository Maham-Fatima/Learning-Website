let clicked = false;
let jindex = 0;
let cindex = 0;
let phpindex = 0;
let pythonIndex = 0;
let javaScriptIndex = 0;
let qindex = 0;

let question = [][5];

let username = null;
let useremail = null;

let score = 0;

var javaSelected = false;
var cSelected = false;
var phpSelected = false;
var pythonSelected = false;
var javascriptSelected = false;

var javaQuizSelected = false;
var cQuizSelected = false;
var phpQuizSelected = false;
var pythonQuizSelected = false;
var javascriptQuizSelected = false;
var quizSelected = false;

const javadiv = document.getElementById("javaContent");
const javavideo = document.getElementById("javaVideo").children;
const cdiv = document.getElementById("cContent");
const cVideo = document.getElementById("cVideo").children;
const phpdiv = document.getElementById("phpContent");
const phpVideo = document.getElementById("phpVideo").children;
const pythondiv = document.getElementById("pythonContent");
const pythonVideo = document.getElementById("pythonVideo").children;
const javaScriptDiv = document.getElementById("javascriptContent");
const javaScriptVideo = document.getElementById("javascriptVideo").children;

const uname = document.getElementById("name");
const email = document.getElementById("email");

const quizLogin = document.getElementById("login");
const quizPage = document.getElementById("quiz");

const quest = document.getElementById("quest");
const radioAns = document.getElementsByName("option");
const option1 = document.getElementById("optlabel1");
const option2 = document.getElementById("optlabel2");

const javaQuiz = [
  [
    "What does JVM stand for?",
    "Java Virtual Machine",
    "JavaScript Virtual Machine",
    "0",
  ],
  [
    "Which of the following is NOT a Java primitive data type?",
    "String",
    "int",
    "1",
  ],
  [
    "What keyword is used to define a class in Java?",
    "class",
    "interface",
    "0",
  ],
  ["What is the output of 10 == 9?", "false", "true", "0"],
  [
    "Which loop is known as a pre-test loop in Java?",
    "for loop",
    "while loop",
    "1",
  ],
];

const pythonQuiz = [
  ["What is the output of print(3 + 5 * 2)?", "13", "16", "1"],
  [
    "Which of the following data types is immutable in Python?",
    "List",
    "Tuple",
    "1",
  ],
  [
    "What is the correct way to create a comment in Python?",
    "// This is a comment",
    "# This is a comment",
    "1",
  ],
  [
    "Which built-in function can be used to find the length of a string in Python?",
    "length()",
    "len()",
    "1",
  ],
  [
    "What is the result of 'hello' + 'world'?",
    "helloworld",
    "hello world",
    "0",
  ],
];

const phpQuiz = [
  [
    "What does PHP stand for?",
    "Personal Home Page",
    "Hypertext Preprocessor",
    "1",
  ],
  [
    "Which of the following is used to declare a variable in PHP?",
    "$",
    "@",
    "0",
  ],
  ["How do you end a PHP statement?", ".", ";", "1"],
  [
    "Which of the following is a correct way to output text in PHP?",
    "echo 'Hello World';",
    "print 'Hello World';",
    "0",
  ],
  ["What is the correct way to start a PHP block?", "<script>", "<?php", "1"],
];
const cQuiz = [
  [
    "What does printf() function do in C?",
    "Prints formatted output to the console",
    "Scans input from the console",
    "0",
  ],
  ["Which keyword is used to define a function in C?", "function", "void", "1"],
  [
    "What is the correct syntax for a single-line comment in C?",
    "//",
    "#",
    "0",
  ],
  [
    "Which operator is used for memory allocation in C?",
    "malloc()",
    "alloc()",
    "0",
  ],
  ["What is the output of 5 + 7 in C?", "12", "13", "0"],
];

const javascriptQuiz = [
  ["What does 'JS' stand for?", "JavaScript", "JustScript", "0"],
  [
    "Which keyword is used to declare a variable in JavaScript?",
    "var",
    "let",
    "1",
  ],
  ["What is the result of '5' + 2 in JavaScript?", "'52'", "'7'", "0"],
  [
    "Which method is used to add a new element to the end of an array in JavaScript?",
    "push()",
    "add()",
    "0",
  ],
  ["What is the output of 3 === '3' in JavaScript?", "true", "false", "1"],
];

function HideView() {
  document.getElementById("sidebar").classList.remove("hidden");
  document.getElementById("main").classList.add("md:ml-[320px]");
  document.getElementById("main").classList.remove("ml-[60px]");
}
function cancel() {
  document.getElementById("sidebar").classList.add("hidden");
  document.getElementById("sidebar").classList.remove("md:block");
  document.getElementById("main").classList.remove("md:ml-[320px]");
  document.getElementById("main").classList.add("ml-[60px]");
}
function displayMenu() {
  if (clicked === false) {
    document.getElementById("drop-down").classList.remove("hidden");
    document.getElementById("quizdrop-down").classList.remove("hidden");
    document.getElementById("menu-bar").classList.remove("hidden");
    clicked = true;
  } else {
    document.getElementById("drop-down").classList.add("hidden");
    document.getElementById("quizdrop-down").classList.add("hidden");
    document.getElementById("menu-bar").classList.add("hidden");
    clicked = false;
  }
}
function displayContent() {

  var selectElement = document.getElementById("courses-menu");
  var selectedValue = selectElement.value;
  var selectedeIndex = selectElement.selectedIndex;

  

  if (selectedValue === "java") {
  
  if (selectedeIndex !== 1) { 
    selectElement.selectedIndex = 1; 
  }
    displayJava();
  } else if (selectedValue === "c") {
    if (selectedeIndex !== 2) { 
      selectElement.selectedIndex = 2; 
    }
    displayC();
  } else if (selectedValue === "php") {
    if (selectedeIndex !== 3) { 
      selectElement.selectedIndex = 3; 
    }
    displayPhp();
  } else if (selectedValue === "javascript") {
    if (selectedeIndex !== 4) { 
      selectElement.selectedIndex = 4; 
    }
    displayJavaScript();
  } else if (selectedValue === "python") {
    if (selectedeIndex !== 5) { 
      selectElement.selectedIndex = 5; 
    }
    displayPython();
  } else{
    if (pythonSelected) {
      pythondiv.classList.add("hidden");
    }
    if(javaSelected){
      javadiv.classList.add("hidden")
    }
    if (javascriptSelected) {
      javaScriptDiv.classList.add("hidden");
    }
    if (cSelected) {
      cdiv.classList.add("hidden");
    }
    if (phpSelected) {
      phpdiv.classList.add("hidden");
    }
    if(quizSelected){
      if(!document.getElementById('result').classList.contains('hidden')){
        document.getElementById('result').classList.add('hidden')
      }
      if(!quizLogin.classList.contains('hidden')){
        quizLogin.classList.add('hidden')
      }
      if(!quizPage.classList.contains('hidden')){
        quizPage.classList.add('hidden');
      }
     resetSelected();
    }
  
   
  }
}
function resetSelected(){
  javaSelected = false;
  pythonSelected = false;
  javascriptSelected = false;
  phpSelected = false;
  cSelected = false;
  quizSelected = false;
}
// java menu
function displayJava() {
  var selectElement = document.getElementById("courses-menu");
  var selectedeIndex = selectElement.selectedIndex;
  if (selectedeIndex !== 1) { 
    selectElement.selectedIndex = 1; 
  }
  var selected = document.getElementById("quizzez-menu");
  if(selected.selectedIndex !== 0 ){
    selected.selectedIndex = 0;
  }
  
  if (pythonSelected) {
    pythondiv.classList.add("hidden");
  }
  if (javascriptSelected) {
    javaScriptDiv.classList.add("hidden");
  }
  if (cSelected) {
    cdiv.classList.add("hidden");
  }
  if (phpSelected) {
    phpdiv.classList.add("hidden");
  }
  if(quizSelected){
    if(!document.getElementById('result').classList.contains('hidden')){
      document.getElementById('result').classList.add('hidden')
    }
    if(!quizLogin.classList.contains('hidden')){
      quizLogin.classList.add('hidden')
    }
    if(!quizPage.classList.contains('hidden')){
      quizPage.classList.add('hidden');
    }
  }
  resetSelected();
  javaSelected = true;
  javadiv.classList.remove("hidden");
  javavideo[jindex].classList.remove("hidden");
}

function JavaPre() {
  if (jindex > 0) {
    javavideo[jindex].classList.add("hidden");
    jindex--;
    javavideo[jindex].classList.remove("hidden");
  } else {
    javavideo[jindex].classList.add("hidden");
    jindex = javavideo.length - 1;
    javavideo[jindex].classList.remove("hidden");
  }
}
function javaNext() {
  if (jindex < javavideo.length - 1) {
    javavideo[jindex].classList.add("hidden");
    jindex++;
    javavideo[jindex].classList.remove("hidden");
  } else {
    javavideo[jindex].classList.add("hidden");
    jindex = 0;
    javavideo[jindex].classList.remove("hidden");
  }
}
// C menu
function displayC() {
  var selectElement = document.getElementById("courses-menu");
  var selectedeIndex = selectElement.selectedIndex;

  var selected = document.getElementById("quizzez-menu");
  if(selected.selectedIndex !== 0 ){
    selected.selectedIndex = 0;
  }

  if (selectedeIndex !== 2) { 
    selectElement.selectedIndex = 2; 
  }
 
  if (javaSelected) {
    javadiv.classList.add("hidden");
  }
  if (javascriptSelected) {
    javaScriptDiv.classList.add("hidden");
  }
  if (pythonSelected) {
    pythondiv.classList.add("hidden");
  }
  if (phpSelected) {
    phpdiv.classList.add("hidden");
  }
  if(quizSelected){
    if(!document.getElementById('result').classList.contains('hidden')){
      document.getElementById('result').classList.add('hidden')
    }
    if(!quizLogin.classList.contains('hidden')){
      quizLogin.classList.add('hidden')
    }
    if(!quizPage.classList.contains('hidden')){
      quizPage.classList.add('hidden');
    }
  }
  resetSelected();
  cSelected = true;
  cdiv.classList.remove("hidden");

  cVideo[cindex].classList.remove("hidden");
}

function CPre() {
  if (cindex > 0) {
    cVideo[cindex].classList.add("hidden");
    cindex--;
    cVideo[cindex].classList.remove("hidden");
  } else {
    cVideo[cindex].classList.add("hidden");
    cindex = cVideo.length - 1;
    cVideo[cindex].classList.remove("hidden");
  }
}

function CNext() {
  if (cindex < cVideo.length - 1) {
    cVideo[cindex].classList.add("hidden");
    cindex++;
    cVideo[cindex].classList.remove("hidden");
  } else {
    cVideo[cindex].classList.add("hidden");
    cindex = 0;
    cVideo[cindex].classList.remove("hidden");
  }
}


//php menu
function displayPhp() {

  var selectElement = document.getElementById("courses-menu");
  var selectedeIndex = selectElement.selectedIndex;

  var selected = document.getElementById("quizzez-menu");
  if(selected.selectedIndex !== 0 ){
    selected.selectedIndex = 0;
  }

  if (selectedeIndex !== 3) { 
    selectElement.selectedIndex = 3; 
  }
  
  if (javaSelected) {
    javadiv.classList.add("hidden");
  }
  if (javascriptSelected) {
    javaScriptDiv.classList.add("hidden");
  }
  if (cSelected) {
    cdiv.classList.add("hidden");
  }
  if (pythonSelected) {
    pythondiv.classList.add("hidden");
  }
  if(quizSelected){
    if(!document.getElementById('result').classList.contains('hidden')){
      document.getElementById('result').classList.add('hidden')
    }
    if(!quizLogin.classList.contains('hidden')){
      quizLogin.classList.add('hidden')
    }
    if(!quizPage.classList.contains('hidden')){
      quizPage.classList.add('hidden');
    }
  }
  resetSelected();
  phpSelected = true;
  phpdiv.classList.remove("hidden");
  phpVideo[phpindex].classList.remove("hidden");
}

function PhpPre() {
  if (phpindex > 0) {
    phpVideo[phpindex].classList.add("hidden");
    phpindex--;
    phpVideo[phpindex].classList.remove("hidden");
  } else {
    phpVideo[phpindex].classList.add("hidden");
    phpindex = phpVideo.length - 1;
    phpVideo[phpindex].classList.remove("hidden");
  }
}

function PhpNext() {
  if (phpindex < phpVideo.length - 1) {
    phpVideo[phpindex].classList.add("hidden");
    phpindex++;
    phpVideo[phpindex].classList.remove("hidden");
  } else {
    phpVideo[phpindex].classList.add("hidden");
    phpindex = 0;
    phpVideo[phpindex].classList.remove("hidden");
  }
}

//python menu
function displayPython() {
  
  var selectElement = document.getElementById("courses-menu");
  var selectedeIndex = selectElement.selectedIndex;

  var selected = document.getElementById("quizzez-menu");
  if(selected.selectedIndex !== 0 ){
    selected.selectedIndex = 0;
  }

  if (selectedeIndex !== 5) { 
    selectElement.selectedIndex = 5; 
  }

  if (javaSelected) {
    javadiv.classList.add("hidden");
  }
  if (javascriptSelected) {
    javaScriptDiv.classList.add("hidden");
  }
  if (cSelected) {
    cdiv.classList.add("hidden");
  }
  if (phpSelected) {
    phpdiv.classList.add("hidden");
  }
  if(quizSelected){
    if(!document.getElementById('result').classList.contains('hidden')){
      document.getElementById('result').classList.add('hidden')
    }
    if(!quizLogin.classList.contains('hidden')){
      quizLogin.classList.add('hidden')
    }
    if(!quizPage.classList.contains('hidden')){
      quizPage.classList.add('hidden');
    }
  }
  resetSelected();
  pythonSelected = true;
  pythondiv.classList.remove("hidden");
  pythonVideo[pythonIndex].classList.remove("hidden");
}

function PythonPre() {
  if (pythonIndex > 0) {
    pythonVideo[pythonIndex].classList.add("hidden");
    pythonIndex--;
    pythonVideo[pythonIndex].classList.remove("hidden");
  } else {
    pythonVideo[pythonIndex].classList.add("hidden");
    pythonIndex = pythonVideo.length - 1;
    pythonVideo[pythonIndex].classList.remove("hidden");
  }
}

function PythonNext() {
  if (pythonIndex < pythonVideo.length - 1) {
    pythonVideo[pythonIndex].classList.add("hidden");
    pythonIndex++;
    pythonVideo[pythonIndex].classList.remove("hidden");
  } else {
    pythonVideo[pythonIndex].classList.add("hidden");
    pythonIndex = 0;
    pythonVideo[pythonIndex].classList.remove("hidden");
  }
}

//javascript menu
function displayJavaScript() {
  var selectElement = document.getElementById("courses-menu");
  var selectedeIndex = selectElement.selectedIndex;

  var selected = document.getElementById("quizzez-menu");
  if(selected.selectedIndex !== 0 ){
    selected.selectedIndex = 0;
  }

  if (selectedeIndex !== 4) { 
    selectElement.selectedIndex = 4; 
  }

  if (javaSelected) {
    javadiv.classList.add("hidden");
  }
  if (pythonSelected) {
    pythondiv.classList.add("hidden");
  }
  if (cSelected) {
    cdiv.classList.add("hidden");
  }
  if (phpSelected) {
    phpdiv.classList.add("hidden");
  }
  if(quizSelected){
    if(!document.getElementById('result').classList.contains('hidden')){
      document.getElementById('result').classList.add('hidden')
    }
    if(!quizLogin.classList.contains('hidden')){
      quizLogin.classList.add('hidden')
    }
    if(!quizPage.classList.contains('hidden')){
      quizPage.classList.add('hidden');
    }
  }
  resetSelected();
  javascriptSelected = true;

  javaScriptDiv.classList.remove("hidden");
  javaScriptVideo[javaScriptIndex].classList.remove("hidden");
}

function JavaScriptPre() {
  if (javaScriptIndex > 0) {
    javaScriptVideo[javaScriptIndex].classList.add("hidden");
    javaScriptIndex--;
    javaScriptVideo[javaScriptIndex].classList.remove("hidden");
  } else {
    javaScriptVideo[javaScriptIndex].classList.add("hidden");
    javaScriptIndex = javaScriptVideo.length - 1;
    javaScriptVideo[javaScriptIndex].classList.remove("hidden");
  }
}

function JavaScriptNext() {
  if (javaScriptIndex < javaScriptVideo.length - 1) {
    javaScriptVideo[javaScriptIndex].classList.add("hidden");
    javaScriptIndex++;
    javaScriptVideo[javaScriptIndex].classList.remove("hidden");
  } else {
    javaScriptVideo[javaScriptIndex].classList.add("hidden");
    javaScriptIndex = 0;
    javaScriptVideo[javaScriptIndex].classList.remove("hidden");
  }
}

// Quiz
function resetSelectedQuiz(){
  javaQuizSelected = false;
  pythonQuizSelected = false;
  javascriptQuizSelected = false;
  phpQuizSelected = false;
  cQuizSelected = false;
}


function quizDisplay() {

  var selected = document.getElementById("quizzez-menu").value;
  
  var selectElement = document.getElementById("courses-menu");
  var selectedIndex = selectElement.selectedIndex;
  if (selectedIndex !== 0) { 
    selectElement.selectedIndex = 0; 
  }

  quizSelected = true;
  resetSelectedQuiz();

  if (javaSelected) {
    javadiv.classList.add("hidden");
  }
  if (pythonSelected) {
    pythondiv.classList.add("hidden");
  }
  if (cSelected) {
    cdiv.classList.add("hidden");
  }
  if (phpSelected) {
    phpdiv.classList.add("hidden");
  }
  if (javascriptSelected) {
    javaScriptDiv.classList.add("hidden");
  }
  if(quizSelected){
    if(!document.getElementById('result').classList.contains('hidden')){
      document.getElementById('result').classList.add('hidden')
    }
    if(!quizLogin.classList.contains('hidden')){
      quizLogin.classList.add('hidden')
    }
    if(!quizPage.classList.contains('hidden')){
      quizPage.classList.add('hidden');
    }
  }
  switch (selected) {
    case "java":
      qindex = 0;
      javaQuizSelected = true;
      document.getElementById('title').textContent = 'Java Quiz';
      question = javaQuiz;
      break;

    case "c":
      qindex = 0;
      cQuizSelected = true;
      document.getElementById('title').textContent = 'C Quiz';
      question = cQuiz;
      break;

    case "php":
      qindex = 0;
      phpQuizSelected = true;
      document.getElementById('title').textContent = 'Php Quiz';
      question = phpQuiz;
      break;

    case "python":
      qindex = 0;
      pythonQuizSelected = true;
      document.getElementById('title').textContent = 'Python Quiz';
      question = pythonQuiz;
      break;

    case "javascript":
      qindex = 0;
      javascriptQuizSelected = true;
      document.getElementById('title').textContent = 'Javascript Quiz';
      question = javascriptQuiz;
      break;

    case "custom":
      quizLogin.classList.add("hidden");
      break;
  }
  if (
    javaQuizSelected ||
    javascriptQuizSelected ||
    pythonQuizSelected ||
    phpQuizSelected ||
    cQuizSelected
  ) 
  {
    
    quizLogin.classList.remove("hidden");
  }
}

function submit() {
  let nameCheck = /[A-Za-z]+/;
  let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let both = true;
  if (nameCheck.test(uname.value)) {
    username = uname;
  } else {
    both = false;
    document.getElementById("name-error").textContent =
      "Incorrect name format remove space, numbers, symbol";
  }
  if (emailCheck.test(email.value)) {
    useremail = email;
  } else {
    both = false;
    document.getElementById("email-error").textContent =
      "Incorrect email re-enter";
  }

  if (both) {
    quizLogin.classList.add('hidden');
    QuizQuestion();
  }
}

var timer; 
var timeLeft = 10; 

function startTimer() {
  
  document.getElementById('time').textContent = 'Time left: ' + timeLeft + 's';
  
  timeLeft--;

  if (timeLeft < 0) {
    
    NextQuestion();
  } else {
    
    timer = setTimeout(startTimer, 1000); 
  }
}

function resetTimer() {
  
  clearTimeout(timer);
  timeLeft = 10;
}

function NextQuestion() {
    
  resetTimer();
    if (question[qindex][3] === CheckAns()) {
    
      score++;
    }
    qindex++;
    resetOption();
  if (qindex < question.length) {
    startTimer();
    quest.textContent = question[qindex][0];
    option1.textContent = question[qindex][1];
    option2.textContent = question[qindex][2];
    
  } else {
     quizPage.classList.add('hidden');
     document.getElementById('n').textContent = 'Name: '+username.value ;
     document.getElementById('e').textContent = 'Email: '+useremail.value;
     document.getElementById('score').textContent = 'Score: '+score ;
     
     document.getElementById('result').classList.remove('hidden');
  }
}

function QuizQuestion() {
  score = 0;

  quest.textContent = question[0][0];
  option1.textContent = question[0][1];
  option2.textContent = question[0][2];
  
  quizPage.classList.remove("hidden");
  startTimer();
  
}

function CheckAns() {
  var userAns = null;
  if (radioAns[0].checked) {
    userAns = radioAns[0].value;
  } else if (radioAns[1].checked) {
    userAns = radioAns[1].value;
  }
  return userAns;
}

function resetOption(){
  if (radioAns[0].checked) {
    radioAns[0].checked = false;
  } else if (radioAns[1].checked) {
    radioAns[1].checked = false;
  }
}
