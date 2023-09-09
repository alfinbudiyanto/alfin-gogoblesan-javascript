const targetObject1 = document.getElementById("targetObject1"); // background
const targetObject2 = document.getElementById("targetObject2"); // text
const selection = document.getElementById("selection");
const input = document.getElementById("inputValue");

function update() {
  const userSelect = selection.options.selectedIndex;

  switch (userSelect) {
    case 1:
      targetObject1.style.backgroundColor = input.value;
      break;
    case 2:
      targetObject2.style.color = input.value;
      break;
    case 3:
      targetObject2.style.fontSize = input.value + "px";
      break;
    case 4:
      targetObject2.style.fontFamily = input.value;
      break;
    case 5:
      targetObject1.style.width = input.value + "rem";
      break;
    case 6:
      targetObject1.style.height = input.value + "rem";
      break;
    default:
      break;
  }
}
