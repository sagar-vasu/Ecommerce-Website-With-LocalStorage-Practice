var user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("name").innerHTML = user.name;
} else {
  alert("Please Login First");
  window.location.href = "../Login.html";
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "../Login.html";
}

function validation(id, name, description, author, price, upload) {
  if (!id) {
    alert("Enter ID");
    return false;
  } else if (!name) {
    alert("Enter Name");
    return false;
  } else if (!description) {
    alert("Enter Description");
    return false;
  } else if (!price) {
    alert("Enter Price");
    return false;
  } else if (!author) {
    alert("Enter author");
    return false;
  } else if (!upload) {
    alert("Enter Upload");
    return false;
  } else {
    return true;
  }
}

function addProduct() {
  var products = JSON.parse(localStorage.getItem("products"));
  var id = document.getElementById("product_id").value;
  var name = document.getElementById("product_name").value;
  var description = document.getElementById("product_description").value;
  var author = document.getElementById("author").value;
  var price = document.getElementById("price").value;
  var upload = document.getElementById("filebutton").files[0];

  if (upload) {
    var fReader = new FileReader();
    fReader.readAsDataURL(upload);
    fReader.onloadend = function (event) {
      var path = event.target.result;
      var productObj = {
        id,
        name,
        description,
        author,
        path,
        price,
        email: user.email,
      };

      if (check) {
        if (products === null) {
          var data = [];
          data.push(productObj);
          localStorage.setItem("products", JSON.stringify(data));
          alert("Product is added");
          window.location.href = "./SellerHome.html";
        } else {
          products.push(productObj);
          localStorage.setItem("products", JSON.stringify(products));
          alert("Product is added");
          window.location.href = "./SellerHome.html";
        }
      }
    };
  }

  var check = validation(id, name, description, author, price, upload);
}
