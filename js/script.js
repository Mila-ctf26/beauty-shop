console.log("JavaScriptfunktioniert!");
// Alle Aktionsbuttons finden
const buttons = document.querySelectorAll(".action-button");

buttons.forEach((button) => {
  const label = button.querySelector(".action-label");

  // Nur Merken-Buttons auswählen
  if (label.textContent.trim() === "Merken") {
    button.addEventListener("click", () => {
      const icon = button.querySelector(".action-icon");

      // Herz beim Klicken ändern
      if (icon.textContent === "♡") {
        icon.textContent = "♥";
      } else {
        icon.textContent = "♡";
      }
      button.classList.toggle("is-favorite")
    });
  }
});

// Vergleichsbuttons auswählen
const compareButtons = document.querySelectorAll(".action-button");

compareButtons.forEach((button) => {
  const label = button.querySelector(".action-label");

  // Nur Vergleichen-Buttons auswählen
  if (label && label.textContent.trim() === "Vergleichen") {
    button.addEventListener("click", () => {
      button.classList.toggle("is-comparing");
    });
  }
});

// Warenkorb-Buttons auswählen
const cartButtons = document.querySelectorAll(".product-button");

// Warenkorb-Zähler auswählen
const cartCount = document.querySelector("#cart-count");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {

    // Prüfen, ob das Produkt schon hinzugefügt wurde
   if (!button.classList.contains("is-added")) {
  // Produkt zum Warenkorb hinzufügen
  cartCount.textContent = Number(cartCount.textContent) + 1;

  button.textContent = "+ Hinzugefügt";
  button.classList.add("is-added");
} else {
  // Produkt aus dem Warenkorb entfernen
  cartCount.textContent = Number(cartCount.textContent) - 1;

  button.textContent = "In den Warenkorb";
  button.classList.remove("is-added");
}

  });
});