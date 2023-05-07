let string = "";
let buttons = document.querySelectorAll(".cbutton");
console.log(buttons);
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.value == "=") {
      try {
        string = eval(string);
        document.querySelector(".screen").value = string;
      } catch {
        document.querySelector(".screen").value = "Invalid expression";
        setTimeout(() => {
          string = "";
          document.querySelector(".screen").value = string;
        }, 3000);
      }
    } else if (e.target.value == "AC") {
      string = "";
      document.querySelector(".screen").value = string;
    } else if (e.target.value == "delete") {
      string = string.slice(0, -1);
      document.querySelector(".screen").value = string;
    } else {
      // console.log(e.target)
      string = string + e.target.value;
      document.querySelector(".screen").value = string;
    }
  });
});
