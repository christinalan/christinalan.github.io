let colorButton;
let titlecolors = [
  "#7AC840",
  "#00D6C6",
  "#FF9218",
  "#D60000",
  "#1A00D6",
  "#AA0863",
];
let choice = 0;

// let count = 0;
// let button;
// button = document.getElementById("button");

// button.addEventListener("click", function () {});

//   count += 1;
//   document.getElementById("counter").innerHTML = count;

colorButton = document.getElementById("button-color");
colorButton.addEventListener("click", function () {
  document.body.style.color = titlecolors[choice];
  choice = (choice + 1) % 6;
});
