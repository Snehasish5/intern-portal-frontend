document.addEventListener("DOMContentLoaded", function () {
  const internName = document.getElementById("intern-name");
  const referralCode = document.getElementById("referral-code");
  const donations = document.getElementById("donations");

  fetch("https://intern-portal-backend-3lym.onrender.com/api/intern")
      .then(response => {
          if (!response.ok) {
              throw new Error("Failed to fetch intern data");
          }
          return response.json();
      })
      .then(data => {
          // Assuming `data` is an object like: { "name": "Snehasish", "referral": "snehasish2025", "donations": 1200 }
          internName.textContent = data.name || "N/A";
          referralCode.textContent = data.referral_code || "N/A";
          donations.textContent = data.donations || "0";
      })
      .catch(error => {
          console.error("Error loading intern data:", error);
          internName.textContent = "Error";
          referralCode.textContent = "-";
          donations.textContent = "-";
          alert("Failed to load intern data. Please try again later.");
      });
});
