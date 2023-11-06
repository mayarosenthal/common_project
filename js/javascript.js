function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('active');
  }

  // Add click event listeners to the h3 elements of each dropdown
  document.getElementById('myDropdown1').addEventListener('click', function() {
    toggleDropdown('myDropdown1');
  });

  document.getElementById('myDropdown2').addEventListener('click', function() {
    toggleDropdown('myDropdown2');
  });

  document.getElementById('myDropdown3').addEventListener('click', function() {
    toggleDropdown('myDropdown3');
  });

  // Close the dropdowns if the user clicks outside of them
  window.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      if (!event.target.closest('.dropdown') && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
      }
    });
  });