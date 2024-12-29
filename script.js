setInterval(() => {
  const snowflake = document.createElement("div");
  snowflake.textContent = "\u2744";
  snowflake.className = "snowflake";

  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.fontSize = `${10 + Math.random() * 20}px`;
  snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
  snowflake.style.animationDelay = `${Math.random() * 2}s`;

  document.body.appendChild(snowflake);

  snowflake.addEventListener("animationend", () => snowflake.remove());
}, 200);
