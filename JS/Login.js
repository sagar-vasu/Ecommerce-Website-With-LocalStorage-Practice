function validation(email, password) {
  if (!email) {
    alert("Enter Email");
    return false;
  } else if (!password) {
    alert("Enter Password");
    return false;
  } else {
    return true;
  }
}

function loginNow() {
  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var validate = validation(email, password);
  if (validate) {
    var obj = {
      email,
      password,
    };

    var getUsers = JSON.parse(localStorage.getItem("users"));

    if (getUsers) {
      var flag = true;
      for (var i = 0; i < getUsers.length; i++) {
        if (
          getUsers[i].email === email &&
          password === getUsers[i].password &&
          getUsers[i].accountType === "Buyer"
        ) {
          localStorage.setItem("user", JSON.stringify(getUsers[i]));
          window.location.href = "../Pages/BuyerHome.html";
          flag = false;
        }

        if (
          getUsers[i].email === email &&
          password === getUsers[i].password &&
          getUsers[i].accountType === "Seller"
        ) {
          localStorage.setItem("user", JSON.stringify(getUsers[i]));
          window.location.href = "../Pages/SellerHome.html";
          flag = false;
        }
      }
      if (flag === true) {
        alert("Invalid Data");
      }
    } else {
      alert("Record end");
    }
  }
}
