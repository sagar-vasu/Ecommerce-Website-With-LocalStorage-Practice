document.getElementById("after").style.display = "none";
var data = localStorage.getItem("users");
data = JSON.parse(data);

function searchEmail() {
  var email = document.getElementById("email").value;

  if (!email) {
    alert("Please Enter Email");
  } else {
    var check = false;
    for (var i = 0; i < data.length; i++) {
      if (email === data[i].email) {
        check = true;
        localStorage.setItem("forgetEmail", JSON.stringify(email));
        document.getElementById("after").style.display = "block";
        document.getElementById("before").style.display = "none";
      }
    }
    if (check === false) {
      alert("No user foud with this address");
    }
  }
}

function updatePassword() {
  var oldPass = document.getElementById("oldPassword").value;
  var newPass = document.getElementById("newPassword").value;
  var forgetEmail = localStorage.getItem("forgetEmail");
  forgetEmail = JSON.parse(forgetEmail);

  if (!oldPass) {
    alert("enter old pass");
  } else if (!newPass) {
    alert("enter new password");
  } else {
    var flag = "yes";
    for (var i = 0; i < data.length; i++) {
      if (forgetEmail === data[i].email && oldPass === data[i].password) {
        flag = "no";
        data[i].password = newPass;
        localStorage.setItem("users", JSON.stringify(data));
        localStorage.removeItem("forgetEmail");
        alert("Password update successfully");
        window.location.href = "../Login.html";
      }
    }
    if (flag === "yes") {
      alert("Password cant be updated");
    }
  }
}
