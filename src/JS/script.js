const fotoG = document.getElementById("foto-g");
const imgMarvel = document.getElementById("img-marvel");
const imgDC = document.getElementById("img-dc");

fotoG.src = "https://placehold.co/1200x400?text=Heróis";
imgMarvel.src = "https://placehold.co/600x300?text=Marvel";
imgDC.src = "https://placehold.co/600x300?text=DC";

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
