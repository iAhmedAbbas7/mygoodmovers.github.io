document.addEventListener("DOMContentLoaded", function () {
  // Flatpickr Initialization
  flatpickr("#moveDate", {
    dateFormat: "Y-m-d",
    minDate: "today",
  });

  const findMovers = document.getElementById("findMovers");
  const searchCompanyInput = document.getElementById("searchCompany");
  const quoteByPhone = document.getElementById("quoteByPhone");
  const quoteModal = document.getElementById("quoteByPhoneModal");

  // Toggle Find Movers section
  findMovers.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("active");
    const hiddenContent = this.querySelector(".hidden-content");
    hiddenContent.style.display =
      hiddenContent.style.display === "block" ? "none" : "block";
    quoteByPhone.classList.remove("active");
  });

  // Prevent Find Movers section from closing when clicking inside the input field
  searchCompanyInput.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Hide the Find Movers input when clicking outside
  document.addEventListener("click", function (event) {
    if (!findMovers.contains(event.target)) {
      findMovers.classList.remove("active");
      findMovers.querySelector(".hidden-content").style.display = "none";
    }
  });

  // Add active class to Quote By Phone section when modal is shown
  quoteByPhone.addEventListener("click", function () {
    this.classList.add("active");
  });

  // Remove active class from Quote By Phone section when modal is hidden
  quoteModal.addEventListener("hidden.bs.modal", function () {
    quoteByPhone.classList.remove("active");
  });

  // Modal Steps Functionality
  const formFieldOne = document.getElementById("form-field-one");
  const formFieldTwo = document.getElementById("form-field-two");
  const formFieldThree = document.getElementById("form-field-three");

  const nextBtn = document.getElementById("next_btn");
  const nextTwoBtn = document.getElementById("next_two");
  const prevBtn = document.getElementById("prev_btn");
  const prevTwoBtn = document.getElementById("prev_two");

  nextBtn.addEventListener("click", function () {
    formFieldOne.classList.add("d-none");
    formFieldTwo.classList.remove("d-none");
  });

  nextTwoBtn.addEventListener("click", function () {
    formFieldTwo.classList.add("d-none");
    formFieldThree.classList.remove("d-none");
  });

  prevBtn.addEventListener("click", function () {
    formFieldTwo.classList.add("d-none");
    formFieldOne.classList.remove("d-none");
  });

  prevTwoBtn.addEventListener("click", function () {
    formFieldThree.classList.add("d-none");
    formFieldTwo.classList.remove("d-none");
  });

  // Reset the modal to initial state when hidden
  quoteModal.addEventListener("hidden.bs.modal", function () {
    formFieldOne.classList.remove("d-none");
    formFieldTwo.classList.add("d-none");
    formFieldThree.classList.add("d-none");
  });
});
