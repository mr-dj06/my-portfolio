function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.history.replaceState('','','/');

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a','button').forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior

          var href = this.getAttribute('href');
          var xhr = new XMLHttpRequest();
          xhr.open('GET', href);
          xhr.onload = function() {
              if (xhr.status === 404) {
                  window.location.href = '404.html'; // Redirect to custom error page
              } else {
                  window.location.href = href; // Proceed to the link if it exists
              }
          };
          xhr.onerror = function() {
              console.error('Error checking the link.');
          };
          xhr.send();
      });
  });
});
