function openMod(id) {
  document.getElementById(id).style.display = "flex";
}
function closeMod(id) {
  document.getElementById(id).style.display = "none";
}
function reveal() {
  const el = document.getElementById("explore");
  el.style.display = "block";
  window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
}
window.onclick = function (e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};
