let buttons = document.getElementById("buttons");
let output = document.querySelector("input");
console.log(output);

buttons.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.id) {
      case "AC":
        output.value = " ";
        break;
      case "btnPoint":
        if (!output.value.includes(".")) {
          output.value = output.value + ".";
        }
        break;
      case "btn1":
        output.value = output.value += "1";
        break;
      case "btn2":
        output.value = output.value += "2";
        break;
      case "btn3":
        output.value = output.value += "3";
        break;
      case "btn4":
        output.value = output.value += "4";
        break;
      case "btn5":
        output.value = output.value += "5";
        break;
      case "btn6":
        output.value = output.value += "6";
        break;
      case "btn7":
        output.value = output.value += "7";
        break;
      case "btn8":
        output.value = output.value += "8";
        break;
      case "btn9":
        output.value = output.value += "9";
        break;
      case "btn0":
        output.value = output.value += "0";
        break;
      case "btnSub":
        output.value = output.value += "-";
        break;
      case "btnAdd":
        output.value = output.value += "+";
        break;
      case "btnMul":
        output.value = output.value += "*";
        break;
      case "btnDiv":
        output.value = output.value += "/";
        break;
      case "btnMod":
        output.value = output.value += "%";
        break;

      case "btn00":
        output.value = output.value += "00";
        break;
      case "btnOB":
        output.value = output.value += "(";
        break;
      case "btnCB":
        output.value = output.value += ")";
        break;
      case "btnEqualTo":
        if (output.value) {
          output.value = eval(output.value);
        }
        break;
      case "del":
        output.value = output.value.substring(0, output.value.length - 1);
        break;
    }
  }
});
