document.addEventListener("DOMContentLoaded", function() {
  const snowflakesContainer = document.querySelector(".main");

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.animationDuration = (Math.random() * 2 + 1) + "s";
    snowflake.style.animationDelay = (Math.random()) + "s";
    snowflakesContainer.appendChild(snowflake);
  }
});
