document.getElementById("signUp").addEventListener("submit", function(event) {
    // Get form elements
    const firstName = document.getElementById("FirstName").value.trim();
    const lastName = document.getElementById("LastName").value.trim();
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check for empty fields
    if (firstName === "" || lastName === "" || email === "" || password === "") {
        alert("Please fill in all fields before submitting.");
        event.preventDefault(); // Prevent form submission
    }
});