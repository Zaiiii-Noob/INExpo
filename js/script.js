welcome();
function welcome() {
  const nameGreeting = prompt("Please enter your name:");
  if (nameGreeting) {
    document.getElementById("NamaPengunjung").innerText = nameGreeting;
  }
}

// submit form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("messageForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // cegah reload halaman

    const name = document.getElementById("name").value.trim();
    const tglLahir = document.getElementById("tglLahir").value;
    const genderEl = document.querySelector('input[name="sex"]:checked'); // radio
    const gender = genderEl ? genderEl.value : "-";
    const komentar = document.getElementById("komentar").value.trim();

    // tampilkan ke panel "Your Identity"
    document.getElementById("name1").textContent = name || "Visitor";
    document.getElementById("tglLahir1").textContent = tglLahir || "-";
    document.getElementById("sex1").textContent = gender;
    document.getElementById("komentar1").textContent = komentar || "-";
  });
});
