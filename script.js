
document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector(".wrapper");
  const signUpEnd = document.querySelector(".sign-up-end");

  const emailInput = document.getElementById("emailInput");
  const successMessageForm = document.getElementById("submitButton");

  const sendConfirmationText = document.querySelector(".sendConfirmation");
  const DismissMessageButton = document.getElementById("DismissButton");

  successMessageForm.addEventListener("click", submit);
  DismissMessageButton.addEventListener("click", toggleCard);

  function toggleCard() {
    signUpForm.classList.toggle("hidden");
    signUpEnd.classList.toggle("hidden");
  }

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  const validEmailMessage = document.querySelector('em');

  function submit(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
   
    if (validateEmail(email)) {
      sendConfirmationText.innerHTML = email;
      toggleCard();
      emailInput.value = "";
      signUpForm.classList.remove(validEmailMessage);
      validEmailMessage.classList.remove(validEmailMessage);
    } else {
      validEmailMessage.textContent = "Valid email required.";
      emailInput.style.border = "1px solid var(--primary-clr-Tomato)";
      emailInput.style.color = "var(--primary-clr-Tomato)";
      emailInput.style.backgroundColor = "hsla(4, 85%, 79%, 0.644)";
    }
  }
});
