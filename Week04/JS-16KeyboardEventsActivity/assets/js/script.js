const keyPressed = document.querySelector("#key");
const keyCode = document.querySelector("#code");
const eventStatus = document.querySelector("#status");

function keydownAction(event) {
  // TODO: Complete keydown function
  let keyPressedValue = event.key
  keyPressed.textContent = keyPressedValue
  let keyCodeValue = event.keyCode
  keyCode.textContent = keyCodeValue
  eventStatus.textContent = "KEYDOWN Event";
}

function keyupAction() {
  eventStatus.innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);