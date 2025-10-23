// ========== Validation Functions ==========

// Validate name: Only letters (Arabic/English) and spaces, 2-50 characters
function validateName(name) {
  const nameRegex = /^[\u0621-\u064Aa-zA-Z\s]{2,50}$/;
  return nameRegex.test(name.trim());
}

// Validate email: Standard email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone: International format with country code
// Accepts: +970599123456, +1234567890, +441234567890, etc.
function validatePhone(phone) {
  // Remove spaces, dashes, parentheses for validation
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
  // Must start with + followed by country code (1-3 digits) and 7-14 more digits
  const phoneRegex = /^\+[1-9]\d{7,14}$/;
  return phoneRegex.test(cleanPhone);
}

// Main validation function
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const needs = document.getElementById("needs").value.trim();

  // 1. Validate Name (Required)
  if (!name) {
    alert("الرجاء إدخال الاسم");
    return false;
  }
  if (!validateName(name)) {
    alert("الاسم يجب أن يحتوي على أحرف فقط (عربي أو إنجليزي) بين 2-50 حرف");
    return false;
  }

  // 2. Validate Email OR Phone (At least one required)
  const hasEmail = email !== "";
  const hasPhone = phone !== "";

  if (!hasEmail && !hasPhone) {
    alert("يجب إدخال البريد الإلكتروني أو رقم الهاتف على الأقل");
    return false;
  }

  // Validate email format if provided
  if (hasEmail && !validateEmail(email)) {
    alert("البريد الإلكتروني غير صحيح");
    return false;
  }

  // Validate phone format if provided
  if (hasPhone && !validatePhone(phone)) {
    alert("رقم الهاتف غير صحيح. يجب أن يبدأ برمز الدولة (مثال: +970599123456)");
    return false;
  }

  // 3. Validate Message (Required)
  if (!needs) {
    alert("الرجاء إدخال رسالتك");
    return false;
  }
  if (needs.length < 10) {
    alert("الرسالة يجب أن تحتوي على 10 أحرف على الأقل");
    return false;
  }

  return true; // All validations passed
}

// Send email function
function sendEmail() {
  // Validate form before sending
  if (!validateForm()) {
    return; // Stop if validation fails
  }

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const needs = document.getElementById("needs").value.trim();

  // Prepare data
  const Data = {
    to_email: "musab.f.abubshara@gmail.com",
    from_email: email || "لم يتم تقديم بريد إلكتروني",
    name: name,
    phone: phone || "لم يتم تقديم رقم هاتف",
    needs: needs,
    subject: "Contact From my-website",
  };

  // Disable button during sending
  const submitBtn = document.getElementById("contact_submition");
  submitBtn.disabled = true;
  submitBtn.value = "جاري الإرسال...";

  // Send email
  emailjs
    .send("service_n7fhupj", "template_9pko78c", Data)
    .then(function (response) {
      console.log("✅ Email sent successfully:", response);
      alert("تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.");

      // Reset form
      document.getElementById("contact-form").reset();

      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.value = "إرسال";
    })
    .catch(function (error) {
      console.error("❌ Error sending email:", error);
      alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");

      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.value = "إرسال";
    });
}

// Event listeners - Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Prevent form default submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      sendEmail();
    });

  // Also handle button click (backup)
  document
    .getElementById("contact_submition")
    .addEventListener("click", function (event) {
      event.preventDefault();
      sendEmail();
    });
});
