document.querySelector("form").addEventListener("submit", function(event) {
    let password = document.querySelector("input[type='password']").value;
    let confirmPassword = document.querySelectorAll("input[type='password']")[1].value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
    }
});