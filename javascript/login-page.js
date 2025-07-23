document.getElementById("signUp").addEventListener("submit", function(event) {
    // Get form elements
    const username = document.getElementById("UserName").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check for empty fields
    if (username === "" || password === ""){
        alert("Please fill in all fields before submitting.");
        event.preventDefault(); // Prevent form submission
    }
});