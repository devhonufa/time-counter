const endDate = "12 Oct 2024 3:00 PM";
document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");
// function call
// const clock = () =>{

// }

// other option function call
function clock(){
  const end = new Date(endDate);
  const now = new Date();
  const differnt = (end - now) / 1000;
  if(differnt < 0) return;
  // convert into day
  inputs[0].value = Math.floor(differnt / 3600 / 24);
  // convert into hours
  inputs[1].value = Math.floor(differnt / 3600) % 24;
  // convert into min
  inputs[2].value = Math.floor(differnt / 60) % 60;
  // convert into sec
  inputs[3].value = Math.floor(differnt % 60);

}
/**
 * 1 day = 24 hrs
 * 1 hrs = 60 mins
 * 1 min = 3600 sec
 */
clock();
setInterval(
  () =>{
    clock();
  }, 1000
)