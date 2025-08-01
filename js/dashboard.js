// Fetch leaderboard data and populate the list
fetch("https://intern-portal-backend-final.onrender.com/api/leaderboard")
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => {
    const list = document.getElementById("leaderboard-list");
    list.innerHTML = ""; // Clear any loading state
    data.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.name} — ₹${entry.donations}`;
      list.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Failed to fetch leaderboard data:", err);
    const list = document.getElementById("leaderboard-list");
    list.innerHTML = "<li>⚠️ Failed to load leaderboard data</li>";
  });

// Logout button event listener (if leaderboard.html includes a logout button)
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // Clear any user session data if used
    // localStorage.clear();
    window.location.href = "index.html";
  });
}