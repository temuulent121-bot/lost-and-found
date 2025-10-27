const form = document.getElementById("itemForm");
const board = document.getElementById("board");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const name = document.getElementById("itemName").value;
  const desc = document.getElementById("description").value;
  const contact = document.getElementById("contact").value;

  const card = document.createElement("div");
  card.classList.add("card", type);
  card.innerHTML = `
    <h3>${type === "lost" ? "🕵️‍♀️ Lost" : "📦 Found"}</h3>
    <p><b>Item:</b> ${name}</p>
    <p><b>Description:</b> ${desc}</p>
    <p><b>Contact:</b> ${contact}</p>
  `;

  board.appendChild(card);
  form.reset();
});