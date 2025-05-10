window.onload = function () {
    emailjs.init("YUIOpTi61T6uxkCWu");

    document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm('service_q11dhco', 'template_1rzyr9p', this)
        .then(() => {
            document.getElementById("contact-form").reset()
            alert("Messaggio inviato!")})
        .catch((error) => alert("Errore: " + error.message));
    });
};