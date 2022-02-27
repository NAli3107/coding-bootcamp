var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button

function increaseCount(){
  count ++;
  countEl.textContent = count; // or call setCounterText() function
}
incrementEl.addEventListener("click", increaseCount);


// TODO: Add event listener to decrement button 

function decreaseCount (){
  if (count >= 0){
    count --;
  }
  countEl.textContent = count; // or call setCounterText() function
}

decrementEl.addEventListener("click", decreaseCount)