function show(id) {
  document.querySelectorAll(".section").forEach(el => {
    el.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}
