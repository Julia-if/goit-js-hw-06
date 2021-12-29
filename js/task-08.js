const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
const response = {};

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    response.email = email.value;
    response.password = password.value;
    console.log(response);
    event.currentTarget.reset();
}