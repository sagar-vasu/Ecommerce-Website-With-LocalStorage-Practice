function logout() {
  localStorage.removeItem("user");
  window.location.href = "../Login.html";
}
