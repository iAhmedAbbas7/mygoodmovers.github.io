// Modal Appear on Content Load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var quoteByPhoneModal = new bootstrap.Modal(
      document.getElementById("quoteByPhoneModal")
    );
    quoteByPhoneModal.show();
  }, 10000);
});
