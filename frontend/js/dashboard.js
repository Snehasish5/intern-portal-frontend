// Fetch intern data and populate dashboard
fetch("https://intern-portal-backend-final.onrender.com/api/intern")
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  })
  .then(data => {
    document.getElementById("intern-name").textContent = data.name;
    document.getElementById("referral-code").textContent = data.referral_code;
    document.getElementById("donations").textContent = data.donations;
  })
  .catch(err => {
    console.error("Failed to fetch intern data:", err);
    alert("Failed to load intern data. Please try again later.");
  });

// Logout button event listener
document.getElementById('logout-btn').addEventListener('click', () => {
  // Clear any user data from localStorage/sessionStorage here if used
  // localStorage.clear();

  // Redirect to login page
  window.location.href = "index.html";
});