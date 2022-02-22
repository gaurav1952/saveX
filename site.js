const linkname = document.getElementById("links");
const btn = document.getElementById("btn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function addlinks(){
  counter += 1;
    return `
    <div class="userdata"><span>${counter}.</span>${linkname.value}</div>
    `
}
counter = 0;
btn.addEventListener("click", () => {
 
  console.log(linkname.value, counter);
  if (linkname.value != ''){
    const savedlinks = document.getElementById("savedLinks").innerHTML += addlinks();
  }
  else{
    modal.style.display = "block";

    }
   linkname.value = ""
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
