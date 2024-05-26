// Submenu Dropdown Handling
document
  .querySelectorAll(".dropdown-submenu .dropdown-toggle")
  .forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      let submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("show");
      }
    });
  });

// Submenu Closing on Outside Parent Click
document.addEventListener("click", function (e) {
  let openedSubmenus = document.querySelectorAll(
    ".dropdown-submenu .dropdown-menu.show"
  );
  openedSubmenus.forEach(function (submenu) {
    if (!submenu.parentElement.contains(e.target)) {
      submenu.classList.remove("show");
    }
  });
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("scroll-navbar");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 750) {
      navbar.style.top = "0";
      scrollToTopBtn.classList.add("show");
      scrollToTopBtn.classList.remove("hide");
    } else {
      navbar.style.top = "-100px";
      scrollToTopBtn.classList.add("hide");
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the search icon button and modal elements
  const searchIconButton = document.getElementById("offcanvas-search-menu");
  const searchCompanyModal = new bootstrap.Modal(
    document.getElementById("searchCompanyModal")
  );

  // Add click event listener to search icon button
  searchIconButton.addEventListener("click", function () {
    searchCompanyModal.show();
  });

  // Close the modal when the close button is clicked
  document
    .querySelector("#searchCompanyModal .btn-close")
    .addEventListener("click", function () {
      searchCompanyModal.hide();
    });
});
