// Get the modal
var modal01 = document.getElementById('id01');
//var modal02 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = cancel;
 function cancel(event) {
    if (event.target == modal01) {
        modal01.style.display = "none";
    }
    // else if(event.target == modal02)
    // {
    //     modal02.style.display = "none"
    // }
}


// validation
var loadFile = function(event) {
    var preview = document.getElementById('preview');
    preview.src = URL.createObjectURL(event.target.files[0]);

};


document.getElementById("t2").value = localStorage.getItem("email");
document.getElementById("t3").value = localStorage.getItem("uname");
document.getElementById("t4").value = localStorage.getItem("pwd");
document.getElementById("t5").value = localStorage.getItem("pwd");
document.getElementById("preview").src = localStorage.getItem("image");

function setting(event) {

  var email = document.getElementById("t2").value;
  var uname = document.getElementById("t3").value;
  var pwd = document.getElementById("t4").value;
  var cpwd = document.getElementById("t5").value;
  var image = document.getElementById("preview").getAttribute("src");




  if (pwd == cpwd) {
    localStorage.setItem("email", email);
    localStorage.setItem("uname", uname);
    localStorage.setItem("pwd", pwd);
    localStorage.setItem("image", image);
    
    alert('sucss');
    // document.getElementById('id01').style.display='none';
  }
  else
    alert('please Enter Invaled Data');
}