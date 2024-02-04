var keys = document.querySelectorAll("#calc span");
var operators = ["+", "-", "x", "÷"];
var decimalAdded = false;

const calculator = document.getElementById("calc");
calculator.addEventListener("click", () => {
  const input = document.querySelector(".display");
  input.focus();
}, true); // Capture phase


function handleKeyDown(event) {
  const input = document.querySelector(".display");
  const btnVal = event.key;
  calculator.focus();

  console.log("Key pressed:", btnVal);
console.log("Current display value:", input.innerHTML);


  if (btnVal == "C") {
    input.innerHTML = "";
    decimalAdded = false;
  } else if (btnVal == "=") {
    // Calculate and display result
    const equation = input.innerHTML.replace(/x/g, "*").replace(/÷/g, "/");
    try {
      input.innerHTML = eval(equation);
    } catch (error) {
      // Handle calculation errors
    }
    decimalAdded = false;
  } else if (operators.includes(btnVal)) {
    const lastChar = input.innerHTML[input.innerHTML.length - 1];
    if (input.innerHTML != "" && operators.indexOf(lastChar) == -1) {
      input.innerHTML += btnVal;
    } else if (input.innerHTML == "" && btnVal == "-") {
      input.innerHTML += btnVal;
    } else if (operators.indexOf(lastChar) > -1 && input.innerHTML.length > 1) {
      input.innerHTML = input.innerHTML.replace(/.$/, btnVal);
    }
    decimalAdded = false;
  } else if (btnVal == ".") {
    if (!decimalAdded) {
      input.innerHTML += btnVal;
      decimalAdded = true;
    }
  } else if (/[0-9]/.test(btnVal)) {
    input.innerHTML += btnVal;
  }

}



for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function (e) {
    var input = document.querySelector(".display");
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;

    if (btnVal == "C") {
      input.innerHTML = "";
      decimalAdded = false;
    } else if (btnVal == "=") {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, "*").replace(/÷/g, "/");

      if (operators.indexOf(lastChar) > -1 || lastChar == ".")
        equation = equation.replace(/.$/, "");

      if (equation) input.innerHTML = eval(equation);

      decimalAdded = false;
    } else if (operators.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];

      if (inputVal != "" && operators.indexOf(lastChar) == -1)
        input.innerHTML += btnVal;
      else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;

      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    } else if (btnVal == ".") {
      if (!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }else if (btnVal == "√") {
      // Handle sqrt functionality here
      try {
        const inputVal = parseFloat(input.innerHTML);
        input.innerHTML = Math.sqrt(inputVal);
        decimalAdded = true;
      } catch (error) {
        // Handle errors (e.g., invalid input)
      }
    } else {
      input.innerHTML += btnVal;
    }

    // prevent page jumps
    e.preventDefault();
  };
}

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
