// Page navigation functions
function hidePages() {
  const pages = document.querySelectorAll(".container:not(.navbar)");
  pages.forEach((page) => (page.style.display = "none"));
}

function showPage(className) {
  hidePages();
  document.querySelector(`.container.${className}`).style.display = "block";
  // Close the navigation bar if it's open (for mobile view)
  const navCollapse = $(".navbar-collapse");
  if (navCollapse.hasClass("in")) {
    navCollapse.collapse("hide");
  }
}

function showHomePage() {
  showPage("home");
}
function showMerchPage() {
  showPage("merch");
}
function showTshirtsPage() {
  showPage("tshirts");
}
function showPantsPage() {
  showPage("pants");
}
function showSellPage() {
  showPage("sell");
}
function showContactPage() {
  showPage("contact");
}
function showHistoryPage() {
  showPage("history");
}
function showMissionPage() {
  showPage("mission");
}

// Form submission handlers
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add contact form submission logic here
    alert("Thank you for your message. We will respond shortly.");
  });

document.getElementById("sellForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  // Add sell form submission logic here
  alert("Thank you for listing your item. It will be reviewed shortly.");
});

// Modal functions
function showSignupModal() {
  $("#signupModal").modal("show");
}

function showLoginModal() {
  $("#loginModal").modal("show");
}

function showForgotPasswordModal() {
  $("#loginModal").modal("hide");
  $("#forgotPasswordModal").modal("show");
}

// Form handlers for authentication
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword")
    .value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Add signup logic here
  alert(
    "Account created successfully! Please check your email for verification."
  );
  $("#signupModal").modal("hide");
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  // Add login logic here
  alert("Login successful!");
  $("#loginModal").modal("hide");
});

document
  .getElementById("forgotPasswordForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add password reset logic here
    alert("Password reset link has been sent to your email.");
    $("#forgotPasswordModal").modal("hide");
  });

// Show home page by default
showHomePage();
