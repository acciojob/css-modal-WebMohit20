//your JS code here. If required.
let btn=document.getElementById("#openModal");
let modal = document.getElementById("myModal");
let close = document.querySelector("span");
btn.addEventListener("click",()=>{
	modal.style.display = "block;"
})


close.addEventListener("click",()=>{
	modal.style.display = "none;"
})


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}