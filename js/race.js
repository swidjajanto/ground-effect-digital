// Simple toggle: from Race -> Build when user switches off

const modeSwitch = document.getElementById("modeSwitch");
const buildLabel = document.getElementById("buildLabel");
const raceLabel = document.getElementById("raceLabel");

if (modeSwitch) {
  // we're starting in Race mode
  modeSwitch.checked = true;
  raceLabel.classList.add("active");
  buildLabel.classList.remove("active");

  modeSwitch.addEventListener("change", () => {
    if (!modeSwitch.checked) {
      // go back to Build mode page
      window.location.href = "build.html"; // <-- change path if needed
    }
  });
}