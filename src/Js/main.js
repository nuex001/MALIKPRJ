export const Bulb = (e) => {
  e.target.classList.toggle("active");
  const r = document.querySelector(":root");
  if (e.target.classList.contains("active")) {
    r.style.setProperty("--background", "#fff");
    r.style.setProperty("--text", "#151515");
  } else {
    r.style.setProperty("--background", "#151515");
    r.style.setProperty("--text", "#fff");
  }
};

