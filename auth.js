document.getElementById("forgot-password-btn").onclick = () => {
  document.querySelector("#auth-form h3").innerHTML = "RESTORE PASSWORD";
  document.getElementById("login-base").style.cssText =
    "display:none !important";
  document.getElementById("email").style.cssText = "display:block !important";
  document.getElementById("forgot-password-btn").style.display = "none";
  document.getElementById("btn").innerText = "Restore Password";
  document.getElementById("btn").style.cssText = "min-width : 100% !important";
  document.getElementById("create-acc").style.display = "none";
};
document.getElementById("create-acc").onclick = () => {
  document.querySelector("#auth-form h3").innerHTML = "CREATE ACCOUNT";
  document.getElementById("email").style.cssText = "display:block !important";
  document.getElementById("forgot-password-btn").style.display = "none";
  document.getElementById("btn").innerText = "Sign Up";
  document.getElementById("create-acc").style.display = "none";
};
