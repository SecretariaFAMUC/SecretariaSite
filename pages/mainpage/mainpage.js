const containerLogin = document.getElementById("containerLogin");
const openContainerLogin = document.getElementById("openContainerLogin")
const closeLoginButton =  document.getElementById("closeLoginButton");

closeLoginButton.addEventListener("click", () => {
    containerLogin.classList.remove("containerLogin");
    containerLogin.classList.add("containerLoginHide");
    document.body.style.overflow = "visible";
});

openContainerLogin.addEventListener("click", () => {
    containerLogin.classList.remove("containerLoginHide");
    containerLogin.classList.add("containerLogin");
    document.body.style.overflow = "hidden";
});

const openContainerRegister = document.getElementById("openContainerRegister");
const containerRegister = document.getElementById("containerRegister");
const backLoginButton = document.getElementById("backLoginButton");
const closeRegisterButton = document.getElementById("closeRegisterButton");

openContainerRegister.addEventListener("click", () => {
    containerLogin.classList.remove("containerLogin");
    containerLogin.classList.add("containerLoginHide");
    containerRegister.classList.remove("containerRegisterHide");
    containerRegister.classList.add("containerRegister");
});

backLoginButton.addEventListener("click", () => {
    containerRegister.classList.remove("containerRegister");
    containerRegister.classList.add("containerRegisterHide");
    containerLogin.classList.remove("containerLoginHide");
    containerLogin.classList.add("containerLogin");
});

closeRegisterButton.addEventListener("click", () => {
    containerRegister.classList.remove("containerRegister");
    containerRegister.classList.add("containerRegisterHide");
    document.body.style.overflow = "visible";
});

const containerForgetAccount = document.getElementById("containerForgetAccount");
const forgetAccountButton = document.getElementById("forgetAccountButton");
const backLoginButton2 = document.getElementById("backLoginButton2");
const closeForgetButton = document.getElementById("closeForgetButton");
const forgetTypeEmailSelect = document.getElementById("forgetTypeEmailSelect");
const forgetTypeNumberSelect = document.getElementById("forgetTypeNumberSelect");
const forgetTypeEmail = document.getElementById("forgetTypeEmail");
const forgetTypeNumber = document.getElementById("forgetTypeNumber");

forgetAccountButton.addEventListener("click", () => {
    containerLogin.classList.remove("containerLogin");
    containerLogin.classList.add("containerLoginHide");
    containerForgetAccount.classList.remove("containerForgetAccountHide");
    containerForgetAccount.classList.add("containerForgetAccount");
});

backLoginButton2.addEventListener("click", () => {
    containerForgetAccount.classList.remove("containerForgetAccount");
    containerForgetAccount.classList.add("containerForgetAccountHide");
    containerLogin.classList.remove("containerLoginHide");
    containerLogin.classList.add("containerLogin");
    forgetTypeNumber.classList.remove("forgetTypeNumber");
    forgetTypeNumber.classList.add("forgetTypeNumberHide");
    forgetTypeEmail.classList.remove("forgetTypeEmail");
    forgetTypeEmail.classList.add("forgetTypeEmailHide");
});

closeForgetButton.addEventListener("click", () => {
    containerForgetAccount.classList.remove("containerForgetAccount");
    containerForgetAccount.classList.add("containerForgetAccountHide");
    forgetTypeNumber.classList.remove("forgetTypeNumber");
    forgetTypeNumber.classList.add("forgetTypeNumberHide");
    forgetTypeEmail.classList.remove("forgetTypeEmail");
    forgetTypeEmail.classList.add("forgetTypeEmailHide");
    document.body.style.overflow = "visible";
});

forgetTypeEmailSelect.addEventListener("click", () => {
    if (forgetTypeEmail.classList == "forgetTypeEmailHide") {
        forgetTypeEmail.classList.remove("forgetTypeEmailHide");
        forgetTypeEmail.classList.add("forgetTypeEmail");
        forgetTypeNumber.classList.remove("forgetTypeNumber");
        forgetTypeNumber.classList.add("forgetTypeNumberHide");
    }
});

forgetTypeNumberSelect.addEventListener("click", () => {
    if (forgetTypeNumber.classList == "forgetTypeNumberHide") {
        forgetTypeNumber.classList.remove("forgetTypeNumberHide");
        forgetTypeNumber.classList.add("forgetTypeNumber");
        forgetTypeEmail.classList.remove("forgetTypeEmail");
        forgetTypeEmail.classList.add("forgetTypeEmailHide");
    }
});


function validateField(event) {
    console.log(event.target)
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage()
} , 2000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
};

const backToTopButton = document.getElementById("backToTopButton");

backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
