const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operation) {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);

  let res;
  switch (operation) {
    case "+":
      res = val1 + val2;
      break;
    case "-":
      res = val1 - val2;
      break;
    case "*":
      res = val1 * val2;
      break;
    case "/":
      res = val1 / val2;
      break;
    case "%":
      res = val1 % val2;
      break;
    }

  result.textContent = `The ${operation} of ${val1} and ${val2} is ${res}.`;
  }

document.getElementById("add").addEventListener("click", () => calculate("+"));
document.getElementById("subtract").addEventListener("click", () => calculate("-"));
document.getElementById("multiply").addEventListener("click", () => calculate("*"));
document.getElementById("divide").addEventListener("click", () => calculate("/"));
document.getElementById("modulo").addEventListener("click", () => calculate("%"));
