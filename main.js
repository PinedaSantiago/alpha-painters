// Optional: Show a welcome alert (you can delete this if you don’t want it)
window.onload = function () {
  setLanguage('en'); // Set default language to English
  // alert("Welcome to Alpha Painters!"); // Uncomment if you want an alert
};

// Translation strings for English and Spanish
const translations = {
  en: {
    title: "Alpha Painters",
    "welcome-msg": "Welcome to Alpha Painters!",
    description: "We provide professional painting services for homes and businesses."
  },
  es: {
    title: "Alpha Painters",
    "welcome-msg": "¡Bienvenido a Pintores Alpha!",
    description: "Ofrecemos servicios profesionales de pintura para hogares y negocios."
  }
};

// Function to switch languages dynamically
function setLanguage(lang) {
  for (const id in translations[lang]) {
    const element = document.getElementById(id);
    if (element) {
      element.innerText = translations[lang][id];
    }
  }
}

