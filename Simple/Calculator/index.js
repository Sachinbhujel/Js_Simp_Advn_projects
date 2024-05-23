function number(e) {
    document.getElementById("total_shown").innerHTML += e.textContent;
  }
  
  function answer() {
    let total_shown = document.getElementById("total_shown").innerHTML;
  
    let firstNumber, secondNumber, result;
    if (total_shown.includes("+")) {
      firstNumber = total_shown.slice(0, total_shown.indexOf("+"));
      secondNumber = total_shown.slice(total_shown.indexOf("+") + 1);
      result = parseInt(firstNumber) + parseInt(secondNumber);
    } else if (total_shown.includes("-")) {
      firstNumber = total_shown.slice(0, total_shown.indexOf("-"));
      secondNumber = total_shown.slice(total_shown.indexOf("-") + 1);
      result = parseInt(firstNumber) - parseInt(secondNumber);
    } else if (total_shown.includes("*")) {
      firstNumber = total_shown.slice(0, total_shown.indexOf("*"));
      secondNumber = total_shown.slice(total_shown.indexOf("*") + 1);
      result = parseInt(firstNumber) * parseInt(secondNumber);
    } else if (total_shown.includes("/")) {
      firstNumber = total_shown.slice(0, total_shown.indexOf("/"));
      secondNumber = total_shown.slice(total_shown.indexOf("/") + 1);
      result = parseInt(firstNumber) / parseInt(secondNumber);
    }

  
    document.getElementById("total_shown").innerHTML = result;
  }  

  function clear_result(){
    document.getElementById("total_shown").innerHTML = "0";
  }