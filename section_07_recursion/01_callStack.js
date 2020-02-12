document.addEventListener("DOMContentLoaded", () => {
  let p = document.getElementById("confirmation")
  p.innerText = "Scripts Loaded"
});

function takeShower(){
  return "Showering"
}

function eatBreakfast(){
  let meal = makeBreakfast()
  return `Eating ${meal}`
}

function makeBreakfast(){
  let items = ["Oatmeal", "Eggs", "Smoothie"];
  return items[Math.floor(Math.random()*items.length)]
}

function wakeUp(){
  takeShower()
  eatBreakfast()
  console.log("Ready to go to work")
}

wakeUp()

/*
Here's what the callstack looks like when wakeup() is invoked:

wakeUp

|

takeShower
wakeUp

|

wakeUp

|

eatBreakfast
wakeUp

|

makeBreakfast
eatBreakfast
wakeUp

|

eatBreakfast
wakeUp

|

wakeUp

*/