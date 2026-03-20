
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }
  window.scrollTo(0, 0);
});


document.addEventListener("DOMContentLoaded", () => {
  const topNav = document.getElementById("topNavbar");
  const bottomNav = document.getElementById("bottomNavbar");

  const observer = new IntersectionObserver((entries) => {
    // If the top bar is NOT intersecting (meaning it's scrolled off-screen)
    if (!entries[0].isIntersecting) {
      bottomNav.classList.add("show");
    } else {
      bottomNav.classList.remove("show");
    }
  }, { threshold: 0 }); // Trigger as soon as 1px of topNav leaves/enters

  observer.observe(topNav);
});



