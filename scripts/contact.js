document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMsg = document.querySelector(
      "[data-testid='test-contact-success']"
    );
    let valid = true;

    document
      .querySelectorAll(".error")
      .forEach((err) => (err.textContent = ""));
    successMsg.classList.add("hidden");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name.value.trim()) {
      document.getElementById("error-name").textContent = "Name is required.";
      valid = false;
    }

    if (!email.value.trim()) {
      document.getElementById("error-email").textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email.value)) {
      document.getElementById("error-email").textContent =
        "Enter a valid email.";
      valid = false;
    }

    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent =
        "Subject is required.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      successMsg.classList.remove("hidden");
      this.reset();
    }
  });
