// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  const responseDiv = document.getElementById("response-message");
  const loading = document.getElementById("loading");

  responseDiv.textContent = "";
  loading.style.display = "block";

  try {
    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    loading.style.display = "none";

    if (!res.ok) throw new Error("Failed to send");

    const data = await res.json();
    responseDiv.textContent = data.message;
    responseDiv.style.color = "green";

    // Redirect after success
    setTimeout(() => {
      window.location.href = "/thank-you.html";
    }, 2000);
  } catch (err) {
    loading.style.display = "none";
    responseDiv.textContent = "❌ Error sending message.";
    responseDiv.style.color = "red";
    console.error("Request failed:", err);
  }
});






// Dark mode toggle logic
const toggleButton = document.getElementById('dark-mode-toggle');

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '☀️ Light Mode';
} else {
  toggleButton.textContent = '🌙 Dark Mode';
}

// Toggle dark mode and save preference
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  toggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

alert(data.message);
document.getElementById("contact-form").reset();

