document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
        alert(`Thank you, ${name}, for your message! We'll get back to you soon.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in both fields.");
    }
});
