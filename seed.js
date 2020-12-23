const db = require("./models");

seed();

async function seed() {
  await db.sequelize.sync({ force: true });
  // ENEMIES
  await db.enemy.create({
    classType: "Goblin Shaman",
    health: 75,
    attack: 90,
    defense: 20,
    speed: 75,
    exp: 110,
    image: "goblin-shaman.jpg",
  });
  await db.enemy.create({
    classType: "Troll",
    health: 200,
    attack: 50,
    defense: 30,
    speed: 60,
    exp: 110,
    image: "troll.jpg",
  });
  await db.enemy.create({
    classType: "Hobgoblin",
    health: 150,
    attack: 70,
    defense: 25,
    speed: 50,
    exp: 110,
    image: "hobgoblin.jpg",
  });
  await db.enemy.create({
    classType: "Goblin Rider",
    health: 100,
    attack: 70,
    defense: 10,
    speed: 60,
    exp: 110,
    image: "goblin-rider.jpg",
  });

  // CHARACTERS
  await db.character.create({
    classType: "warrior",
    name: "Bruth Spiritreaper",
    health: 200,
    attack: 50,
    defense: 40,
    speed: 60,
  });
  await db.character.create({
    classType: "rogue",
    name: "Lacina",
    health: 120,
    attack: 90,
    defense: 20,
    speed: 100,
  });
  await db.character.create({
    classType: "mage",
    name: "Ziu Qaim",
    health: 80,
    attack: 150,
    defense: 0,
    speed: 75,
  });
  await db.character.create({
    classType: "hunter",
    name: "Gwendolyn Helton",
    health: 120,
    attack: 90,
    defense: 30,
    speed: 80,
  });
}
