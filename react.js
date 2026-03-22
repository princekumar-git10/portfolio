
localStorage.setItem("theme", "dark");

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



// Function to fetch the text and put it in the div
async function loadMyText() {
  try {
    // Fetch the local text file
    const response = await fetch('text.txt');

    // Convert the response to plain text
    const data = await response.text();

    // Find your div by ID and insert the text
    document.getElementById('text').innerText = data;
  } catch (error) {
    console.error('Error loading the text file:', error);
    document.getElementById('text').innerText = 'Failed to load content.';
  }
}

// Run the function when the page is ready
window.addEventListener('DOMContentLoaded', loadMyText);