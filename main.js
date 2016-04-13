var operators = ['+', '-', '*', '/'];

document.addEventListener('DOMContentLoaded', init);

function init(event) {
  createExercise();

  document.getElementById('inputBoard').addEventListener('click', numButtonClicked);
  document.getElementById('clear').addEventListener('click', clear);
  document.getElementById('submit').addEventListener('click', submit);
  document.getElementById('skip').addEventListener('click', skip);
  document.getElementById('buttonOp').addEventListener('click', toogleMinPos);
  document.getElementById('buttonDecimal').addEventListener('click', addDecimal);
}

function createExercise(){
  var numberA = Math.floor(Math.random()*10);
  var numberB = Math.floor(Math.random()*10);
  if(numberB === 0) numberB ++;
  var currentOperator = operators[randomInteger(operators.length)];
  var solution;

  switch(currentOperator){
    case '+':
      solution = numberA + numberB;
      break;
    case '-':
      solution = numberA - numberB;
      break;
    case '*':
      solution = numberA * numberB;
      break;
    case '*':
      solution = numberA / numberB;
      break;

  }



  document.getElementById('numA').textContent = numberA;
  document.getElementById('numB').textContent = numberB;
  document.getElementById('operator').textContent = currentOperator;
  document.getElementById('result').textContent = "?";
  document.getElementById('result').style.color = 'white';
}

function numButtonClicked() {
  if(event.target.matches('button') && !event.target.matches('button#buttonOp') && !event.target.matches('button#buttonDecimal')){
    if(document.getElementById('result').textContent === "?")
      document.getElementById('result').textContent = event.target.textContent;
    else
      document.getElementById('result').textContent += event.target.textContent;
  }
}

function clear() {
  document.getElementById('result').textContent = "?";
}

function submit() {
  var guess = document.getElementById('result').textContent;
  if(guess === '?'){
    document.getElementById('feedback').textContent = "Try to solve it first!";
    document.getElementById('feedback').style.color = '#84FF9F';
    return;
  } else{
    guess = parseInt(guess);
  }
  var numberA = document.getElementById('numA').textContent;
  var numberB = document.getElementById('numB').textContent;
  var currentOperator = document.getElementById('operator').textContent;
  var solution;

  switch(currentOperator){
    case '+':
      solution = parseInt(numberA) + parseInt(numberB);
      break;
    case '-':
      solution = numberA - numberB;
      break;
    case '*':
      solution = numberA * numberB;
      break;
    case '/':
      solution = parseFloat(numberA) / parseFloat(numberB);
      solution = solution.toFixed(2);
      break;
  }

  if(parseInt(guess) === parseInt(solution)){
    document.getElementById('feedback').textContent = "That's right! You nailed it!"
    document.getElementById('feedback').style.color = '#84FF9F';
    var currentScore = parseInt(document.getElementById('score').textContent);
    currentScore += 2;
    document.getElementById('score').textContent = currentScore;
    startNewGame();
  } else {
    document.getElementById('feedback').textContent = "Nope! The solution was: " + solution + ". Try again!";
    document.getElementById('feedback').style.color = 'red';
    document.getElementById('result').textContent = solution;
    document.getElementById('result').style.color = 'red';
    document.getElementById('score').textContent --;
    startNewGame();
  }
}

function startNewGame() {
  setTimeout(function(){
    createExercise();
    document.getElementById('feedback').textContent = "";
  }, 1500);
}

function skip(){
  var numberA = document.getElementById('numA').textContent;
  var numberB = document.getElementById('numB').textContent;
  var solution;
  var currentOperator = document.getElementById('operator').textContent;

  switch(currentOperator){
    case '+':
      solution = parseInt(numberA) + parseInt(numberB);
      break;
    case '-':
      solution = numberA - numberB;
      break;
    case '*':
      solution = numberA * numberB;
      break;
    case '/':
      solution = parseFloat(numberA) / parseFloat(numberB);
      solution = solution.toFixed(2);
      break;
  }

  document.getElementById('feedback').textContent = "The solution was: " + solution + ". Try again!";
  document.getElementById('feedback').style.color = 'red';
  document.getElementById('result').textContent = solution;
  document.getElementById('result').style.color = 'red';

  document.getElementById('score').textContent --;
  setTimeout(function(){
    createExercise();
    document.getElementById('feedback').textContent = "";
  }, 1500);
}

function randomInteger(max){
  var number = Math.random() * (max);
  return Math.floor(number);
}

function toogleMinPos(){
  var guess = document.getElementById('result').textContent;
  if(guess === "?") return;
  var inverse = parseInt(guess);
  inverse = -inverse;
  document.getElementById('result').textContent = inverse;
}

function addDecimal() {
  if(document.getElementById('result').textContent === '?' || document.getElementById('result').textContent.charAt(document.getElementById('result').textContent.length - 1 !== '.')) return;
  document.getElementById('result').textContent += '.';
}
