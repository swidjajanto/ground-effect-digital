// ===== BUILD MODE MODULE LOGIC =====

const moduleHeading = document.getElementById("moduleHeading");
const moduleDescription = document.getElementById("moduleDescription");
const groups = document.querySelectorAll(".module-group");
const tabs = document.querySelectorAll(".module-tab");
const hotspots = document.querySelectorAll(".hotspot");
const blueprintImg = document.getElementById("moduleBlueprintImg");
const blueprintTitle = document.getElementById("moduleBlueprintTitle");
const blueprintLegend = document.getElementById("moduleBlueprintLegend");

const moduleCopy = {
  chassis: {
    title: "Chassis · Survival Cell & Structure",
    desc: "Carbon monocoque, impact structures, and cockpit that form the survival cell and carry all mechanical and aerodynamic loads.",
    bpTitle: "Chassis · Blueprint View",
    bpLegend:
      "Chapter 1 · Monocoque survival cell, impact structures, roll hoop and cockpit layout.",
    img: "../blueprints/ge-1.jpg",
  },
  "front-wing": {
    title: "Front Wing · First Contact with the Air",
    desc: "Multi-element assembly that sets initial balance, manages tyre wake, and feeds clean flow to the floor and chassis.",
    bpTitle: "Front Wing · Blueprint View",
    bpLegend: "Chapter 2 · Mainplane, flaps, endplates and pylons viewed from above.",
    img: "../blueprints/ge-2.jpg",
  },
  floor: {
    title: "Floor · Ground Effect Tunnels",
    desc: "Venturi tunnels and edges under the car that create low pressure and generate most of the car’s downforce.",
    bpTitle: "Floor · Blueprint View",
    bpLegend: "Chapter 3 · Tunnels, fences and diffuser expansion region.",
    img: "../blueprints/ge-3.jpg",
  },
  "rear-wing": {
    title: "Rear Wing · Drag, Downforce, and Wake",
    desc: "Mainplane, flap, beam wing and DRS that close the aero balance and control how the wake leaves the car.",
    bpTitle: "Rear Wing · Blueprint View",
    bpLegend: "Chapter 4 · Mainplane, flap, endplates and beam wing.",
    img: "../blueprints/ge-4.jpg",
  },
  "power-unit": {
    title: "Power Unit & Cooling · Hybrid Core",
    desc: "Turbo V6, hybrid units, exhaust and cooling circuits that turn fuel and heat into controlled power.",
    bpTitle: "Power Unit & Cooling · Blueprint View",
    bpLegend: "Chapter 5 · Engine block, turbo layout and cooling packaging.",
    img: "../blueprints/ge-5.jpg",
  },
  suspension: {
    title: "Suspension, Steering & Braking · Control Systems",
    desc: "Push / pull rods, wishbones, steering and brakes that translate chassis loads into grip and driver feedback.",
    bpTitle: "Suspension & Braking · Blueprint View",
    bpLegend: "Chapter 6 · Suspension geometry, steering assembly and brake package.",
    img: "../blueprints/ge-6.jpg",
  },
  tyres: {
    title: "Wheels & Tyres · Contact Patch",
    desc: "Tyre compounds, wheels and tyre management that define the only contact between the car and the circuit.",
    bpTitle: "Wheels & Tyres · Blueprint View",
    bpLegend: "Chapter 7 · Front and rear wheel/tyre assemblies.",
    img: "../blueprints/ge-7.jpg",
  },
};

function setActiveModule(module) {
  // Tabs
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.module === module);
  });

  // Hero hotspots
  hotspots.forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.module === module);
  });

  // Text
  moduleHeading.textContent = moduleCopy[module].title;
  moduleDescription.textContent = moduleCopy[module].desc;

  // Blueprint box
  blueprintTitle.textContent = moduleCopy[module].bpTitle;
  blueprintLegend.textContent = moduleCopy[module].bpLegend;
  blueprintImg.src = moduleCopy[module].img;
  blueprintImg.alt = moduleCopy[module].bpTitle;

  // Part groups – ONLY show the selected module
  groups.forEach((group) => {
    group.classList.toggle("active", group.dataset.module === module);
  });
}

// Tab clicks
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveModule(tab.dataset.module);
  });
});

// Hotspot clicks
hotspots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setActiveModule(dot.dataset.module);
  });
});

// Initial state
setActiveModule("chassis");

// ===== HEADER TOGGLE BEHAVIOUR =====
// (Change this URL to your actual race page)
const modeSwitch = document.getElementById("modeSwitch");
const buildLabel = document.getElementById("buildLabel");
const raceLabel = document.getElementById("raceLabel");

if (modeSwitch) {
  modeSwitch.checked = false; // stay in Build by default
  buildLabel.classList.add("active");
  raceLabel.classList.remove("active");

  modeSwitch.addEventListener("change", () => {
    if (modeSwitch.checked) {
      // Go to Race Mode page
      window.location.href = "../html/race.html"; // <-- update path if needed
    }
  });
}