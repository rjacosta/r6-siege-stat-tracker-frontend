const attackOps = [
  "Kali",
  "Amaru",
  "Nokk",
  "Gridlock",
  "Nomad",
  "Maverick",
  "Lion",
  "Finka",
  "Dokkaebi",
  "Zofia",
  "Ying",
  "Jackal",
  "Hibana",
  "Capitao",
  "Blackbeard",
  "Buck",
  "Sledge",
  "Thatcher",
  "Ash",
  "Thermite",
  "Montagne",
  "Twitch",
  "Blitz",
  "IQ",
  "Fuze",
  "Glaz"
];

const defenseOps = [
  "Wamai",
  "Goyo",
  "Warden",
  "Mozzie",
  "Kaid",
  "Clash",
  "Maestro",
  "Alibi",
  "Vigil",
  "Ela",
  "Lesion",
  "Mira",
  "Echo",
  "Caveira",
  "Valkyrie",
  "Frost",
  "Mute",
  "Smoke",
  "Castle",
  "Pulse",
  "Doc",
  "Rook",
  "Jager",
  "Bandit",
  "Tachanka",
  "Kapkan"
];

const getOperatorType = opName => {
  if (defenseOps.includes(opName)) return "Defender";
  return "Attacker";
};

export default getOperatorType;
