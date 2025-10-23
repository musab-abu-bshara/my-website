function sendEmail() {
  const Data = {
    to_email: "musab.f.abubshara@gmail.com",
    from_email: document.getElementById('email').value,
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    needs: document.getElementById('needs').value,
    subject: "Contact From my-website",
  }

  emailjs.send("service_n7fhupj", "template_9pko78c", Data)
  .then(function(response) {
    console.log("Email sent successfully:", response);
  }, function(error) {
    console.error("Error sending email:", error);
  });
  }

document.getElementById('contact_submition')
.addEventListener('click', function(event) {
  event.preventDefault();
  sendEmail();
});