
  document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarBasic');
    var navbarLinks = navbarCollapse.querySelectorAll('.nav-link');
    var navbarButton = document.getElementById('navbarButton');

    function collapseNavbar() {
      if (window.getComputedStyle(navbarButton).display !== 'none') {
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    }

    navbarLinks.forEach(function (link) {
      link.addEventListener('click', collapseNavbar);
    });

    window.addEventListener('scroll', collapseNavbar);
  });

