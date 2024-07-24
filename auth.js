let FormType = 0;
document.getElementById("forgot-password-btn").onclick = () => {
  FormType = 1;
  document.querySelector("#auth-form h3").innerHTML = "RESTORE PASSWORD";
  document.getElementById("login-base").style.cssText =
    "display:none !important";
  document.getElementById("alert").classList.add("d-none");
  document.getElementById("email").style.cssText = "display:block !important";
  document.getElementById("forgot-password-btn").style.display = "none";
  document.getElementById("btn").innerText = "Restore Password";
  document.getElementById("btn").style.cssText = "min-width : 100% !important";
  document.getElementById("create-acc").innerText = "back";
  document.getElementById("create-acc").onclick = () => {
    document.getElementById("create-acc").innerText =
      "dont have an account?register";
    document.getElementById("alert").classList.add("d-none");
    document.getElementById("btn").innerText = "Login";
    document.querySelector("#auth-form h3").innerHTML = "Login";
    document.getElementById("forgot-password-btn").style.display = "block";
    document.getElementById("email").style.cssText = "display:none !important";
    document.getElementById("login-base").style.cssText =
      "display:block !important";
  };
};
document.getElementById("create-acc").onclick = () => {
  FormType = 2;
  console.log("ah");
  document.getElementById("create-acc").innerText =
    "already have an accoutn?login";
  document.getElementById("alert").classList.add("d-none");
  document.querySelector("#auth-form h3").innerHTML = "CREATE ACCOUNT";
  document.getElementById("email").style.cssText = "display:block !important";
  document.getElementById("forgot-password-btn").style.display = "none";
  document.getElementById("btn").innerText = "Sign Up";
  document.getElementById("create-acc").onclick = () => {
    document.getElementById("alert").classList.add("d-none");
    document.getElementById("btn").innerText = "Login";
    document.querySelector("#auth-form h3").innerHTML = "Login";
    document.getElementById("forgot-password-btn").style.display = "block";
    document.getElementById("email").style.cssText = "display:none !important";
  };
};
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("auth-form").onsubmit = (evt) => {
    evt.preventDefault();
  };
  if (FormType === 0) {
    if (
      document.getElementById("userName").value === "" ||
      document.getElementById("password").value === ""
    ) {
      document.getElementById("alert").innerText =
        "please enter the correct email and password";
      document.getElementById("alert").classList.remove("d-none");
    } else if (
      document.getElementById("userName").value !== "" &&
      document.getElementById("password").value !== ""
    ) {
      document.getElementById("alert").classList.add("d-none");
      window.location.reload();
    }
  } else if (FormType === 1) {
    if (document.getElementById("emailField").value === "") {
      document.getElementById("alert").innerText =
        "please enter your email to restore password";
      document.getElementById("alert").classList.remove("d-none");
    } else {
      document.getElementById("alert").classList.add("d-none");
      window.location.reload();
    }
  } else {
    if (
      document.getElementById("userName").value === "" ||
      document.getElementById("password").value === "" ||
      document.getElementById("emailField").value === ""
    ) {
      document.getElementById("alert").classList.remove("d-none");
      document.getElementById("alert").innerText =
        "please enter all the fields to create your account";
    } else if (
      document.getElementById("userName").value !== "" &&
      document.getElementById("password").value !== "" &&
      document.getElementById("emailField").value !== ""
    ) {
      document.getElementById("alert").classList.add("d-none");
      window.location.reload();
    }
  }
});
