// Mycopunk weapon/resource/upgrade-grid reference data.
// Re-fetched and re-read directly from each source on 2026-11-12 (curl -sL -A "Mozilla/5.0 (Macintosh) Chrome/120 Safari/537.36").
// No numbers invented; blanks shown as "not published".

const SOURCE_WEAPONS = "https://bloxodes.com/wiki/mycopunk/weapons";
const SOURCE_RESOURCES = "https://deltiasgaming.com/?p=282308";
const SOURCE_UPGRADE_GRID = "https://powerupgaming.co.uk/2026/10/21/mycopunk-diffraction-driver-guide-best-upgrades-tips/";

const WEAPONS = [
  { name: "Au-Si Jackrabbit", slot: "Primary", type: "Ricochet Shotgun", availability: "Loadout weapon", unlock: "Armament License", desc: "Its shells bounce before hitting, making it useful against enemies around corners.", source: SOURCE_WEAPONS },
  { name: "DMLR", slot: "Primary", type: "Precision Energy Rifle", availability: "Loadout weapon", unlock: "Armament License", desc: "Accurate energy shots build toward a powerful laser beam.", source: SOURCE_WEAPONS },
  { name: "Diffraction Driver", slot: "Primary", type: "Ion Scattergun", availability: "Loadout weapon", unlock: "Reach level 10 and spend resources", desc: "Fires a wide energy cone; spinning its halo tightens the spread and extends its reach.", source: SOURCE_WEAPONS },
  { name: "FR.15833 Plate Launcher", slot: "Primary", type: "Repurposed Construction Tool", availability: "Loadout weapon", unlock: "Armament License", desc: "Launches metal plates that stick to targets and can be recalled magnetically.", source: SOURCE_WEAPONS },
  { name: "Globbler", slot: "Primary", type: "Acidic Grenade Launcher", availability: "Loadout weapon", unlock: "Complete Ground Zero and recover the hidden blueprint", desc: "Lobs bouncing globs of acid that can leave corrosive puddles.", source: SOURCE_WEAPONS },
  { name: "Gunship Cannon", slot: "Primary", type: "High-Caliber Repeating Cannon", availability: "Loadout weapon", unlock: "Armament License", desc: "A salvaged gunship cannon that fires large explosive shells.", source: SOURCE_WEAPONS },
  { name: "Lead Flinger", slot: "Primary", type: "Revolver", availability: "Loadout weapon", unlock: "Armament License", desc: "Its heavy slugs fire quickly, and a kill speeds up the next reload.", source: SOURCE_WEAPONS },
  { name: "Shocklance", slot: "Primary", type: "Electron Railgun", availability: "Loadout weapon", unlock: "Complete the Overtime Assignment", desc: "Its electric coil pierces enemies in a line.", source: SOURCE_WEAPONS },
  { name: "Swarm Launcher", slot: "Primary", type: "Remote-Control Pellet Launcher", availability: "Loadout weapon", unlock: "Armament License", desc: "A hovering pellet swarm tracks enemies when released.", source: SOURCE_WEAPONS },
  { name: "The Accelerator", slot: "Primary", type: "Accelerating Burst SMG", availability: "Loadout weapon", unlock: "Complete the Oxythane Breach Special Assignment", desc: "Its bursts grow with successive trigger pulls, and it can fire while sprinting.", source: SOURCE_WEAPONS },
  { name: "The Carver", slot: "Primary", type: "Industrial Cutting Tool", availability: "Loadout weapon", unlock: "Assemble a Broken Frame with four Weapon Modules", desc: "A chainsaw built from salvaged weapon parts for close-range combat.", source: SOURCE_WEAPONS },
  { name: "The Cycler", slot: "Primary", type: "Battery-Powered Submachine Gun", availability: "Loadout weapon", unlock: "Armament License", desc: "This standard energy SMG runs on battery cartridges.", source: SOURCE_WEAPONS },
  { name: "Trident S2", slot: "Primary", type: "Kinetic Multishot Rifle", availability: "Loadout weapon", unlock: "Armament License", desc: "Its automatic fire sends three bullets with each shot.", source: SOURCE_WEAPONS },

  { name: "A16 Beam Ripper", slot: "Heavy", type: "Heavy Railgun", availability: "Temporary mission pickup", unlock: "Heavy weapon pickup or call-down during a mission", desc: "Charges a powerful piercing shot.", source: SOURCE_WEAPONS },
  { name: "G6 Streetsweeper", slot: "Heavy", type: "Heavy Shotgun", availability: "Temporary mission pickup", unlock: "Heavy weapon pickup or call-down during a mission", desc: "A short-range shotgun that fires a heavy burst of acidic energy.", source: SOURCE_WEAPONS },
  { name: "Laser Cannon", slot: "Heavy", type: "Heavy Laser Emitter", availability: "Temporary mission pickup", unlock: "Heavy weapon pickup or call-down during a mission", desc: "Its wide laser beam ignites targets along its path.", source: SOURCE_WEAPONS },
  { name: "The Last Argument", slot: "Heavy", type: "Heavy Rocket Launcher", availability: "Temporary mission pickup", unlock: "Heavy weapon pickup or call-down during a mission", desc: "A heavy rocket launcher found as a temporary mission pickup.", source: SOURCE_WEAPONS },
];

// Source dated 2025-07-11 (deltiasgaming.com byline). Mycopunk hit 1.0 after this date —
// numbers/descriptions below may have changed since. Not an official source.
const RESOURCES_SOURCE_DATE = "2025-07-11";
const RESOURCES_STALE = true; // source predates the game's 1.0 release

const RESOURCES = [
  { name: "Gats", rarity: "Standard", desc: "Standard galactic currency. Typically used as payment for low-level Saxon employees (where law permits).", howToGet: "You get this resource by completing missions.", source: SOURCE_RESOURCES },
  { name: "Romphus", rarity: "Rare", desc: "A rare fungus that occasionally grows on enemy shells, given the right environmental conditions, is harvested by destroying the infected area.", howToGet: "This resource is dropped by enemies.", source: SOURCE_RESOURCES },
  { name: "Gussula", rarity: "Rare", desc: "A unique, docile fungus that can be found atop a stem. Harvest it with an unarmed strike.", howToGet: "This resource spawns randomly on the map. Punch the resource and it will try to run away. Punch it again to collect it.", source: SOURCE_RESOURCES },
  { name: "Beezia", rarity: "Rare", desc: "An exceptionally difficult fungus to keep alive. Release it from a container to harvest.", howToGet: "You can find this resource inside containers during missions.", source: SOURCE_RESOURCES },
  { name: "Yeuco", rarity: "Rare", desc: "A sticky fruiting body that combines with metal to form a valuable resource. Harvest it by coating enemy cores and destroying them.", howToGet: "You'll find this randomly during the missions. To acquire it, you'll have to pick it up and throw it at an enemy. When you kill the coated enemy, they'll drop the harvested item.", source: SOURCE_RESOURCES },
  { name: "Upgrade Point", rarity: "Rare", desc: "Use it to unlock new upgrades for any character.", howToGet: "You gain Upgrade Points each time you level up.", source: SOURCE_RESOURCES },
  { name: "Saxonite", rarity: "Epic", desc: "Proprietary resource of Saxon Industries, mined on New Atlas. Exhibits emit radiation that affects gravity, time, and space, making it ideal for long-distance space travel.", howToGet: "You get this by completing missions on the highest difficulty.", source: SOURCE_RESOURCES },
];

// Upgrade grid facts — Diffraction Driver guide, dated 2026-10-21, post-1.0.
const UPGRADE_GRID = {
  cellSizes: [
    { rarity: "Standard", cells: "not published", note: "Standard upgrades take up smaller slots (exact cell count not stated by the source)." },
    { rarity: "Rare", cells: 2 },
    { rarity: "Epic", cells: 3 },
    { rarity: "Exotic", cells: 4 },
  ],
  stackingRule: "Identical upgrades generally do not stack, so pick a wide variety. Elemental upgrades are usually exclusive and take up the hollow nodes.",
  gridExpansion: "Grid size can be expanded with Oddity or Contraband pieces (examples named by the source: Boundary Incursion, Edge Fault).",
  placementNote: "Placement order matters; hold Ctrl (PC) or L3 (PS5) to preview the application order.",
  diffractionDriver: {
    unlock: "Reach Player Level 10",
    upgradeCount: 29,
    mechanics: "Fires a short-range cone of ion pellets. Holding secondary fire spins up the halo, which tightens the cone/reduces spread and extends effective range.",
    archetypes: [
      { name: "Crowd Clearer", features: "Maximize base cone width, pellet count, and AoE on-hit or on-kill. Keep the halo for emergencies only." },
      { name: "Precision Scatter", features: "Invest heavily in spread reduction, range, and damage. Spin the halo constantly for mid-range dominance." },
      { name: "Status Spreader", features: "Focus on elemental synergies and high fire rate. Excellent with cryo Snowball grenade synergy or Acid for softening big targets." },
    ],
  },
  source: SOURCE_UPGRADE_GRID,
};

function findWeapon(name) {
  return WEAPONS.find(w => w.name === name) || null;
}

function findResource(name) {
  return RESOURCES.find(r => r.name === name) || null;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    WEAPONS, RESOURCES, UPGRADE_GRID,
    RESOURCES_SOURCE_DATE, RESOURCES_STALE,
    SOURCE_WEAPONS, SOURCE_RESOURCES, SOURCE_UPGRADE_GRID,
    findWeapon, findResource,
  };
}
