let playerSelect = require("player");

let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    // this.setFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "warrior":
        player = new Player(classType, "Bruth Spiritreaper", 200, 50, 40, 60, 1);
        break;
      case "rogue":
        player = new Player(classType, "Lacina", 120, 90, 20, 100, 1);
        break;
      case "mage":
        player = new Player(classType, "Ziu Qaim", 80, 150, 0, 75, 1);
        break;
      case "hunter":
        player = new Player(classType, "Gwendolyn Helton", 120, 90, 30, 80, 1);
        break;
    }
    // let getInterface = document.querySelector(".interface");
    // getInterface.innerHTML = '<img src="../img/' + classType.toLowerCase() +
    // '_crest.png" class="img-avatar"><div><h3>' + classType + '</h3><h2 class="health-player">Health: '
    //  + player.health + '</h2><h2 class="attack-player">Attack: ' + player.attack + '</h2><h2 class="defense-player">Defense: ' + player.defense +
    //  '</h2><h2 class="speed-player">Speed: ' +player.speed + '</h2><h2 class="player-exp">XP: '+ player.exp + '</p></div>';

    getPlayerAttack.textContent = `Attack: ${player.attack}`;
    getPlayerDefense.textContent = `Defense: ${player.defense}`;
    getPlayerHealth.textContent = `Health: ${player.health}`;
    getSpeed.textContent = `Speed: ${player.speed}`;
    getPlayerExp.textContent = `XP: ${player.exp}`;
    getPlayerName.textContent = `${player.name}`;
    getEnemyHealth = `Health: ${enemy.health}`;
  },
//   setPreFight: function () {
//     // Link to buttons
//     let getActions = document.querySelector(".actions");
//     getHeader.innerHTML = "<p>Task: Find an enemy!</p>";
//     getActions.innerHTML =
//       '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Find enemy</a>';
//     // getArena.style.visibility = 'visible';
//   },
  setFight: function () {
    // Link to buttons
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // create enemy
    let enemy0 = new Enemy("Goblin", 80, 40, 20, 50, 110);
    let enemy1 = new Enemy("Goblin Shaman", 75, 90, 20, 75, 110);
    let enemy2 = new Enemy("Troll", 200, 50, 30, 60, 110);
    let enemy3 = new Enemy("Hobgolin", 150, 70, 25, 50, 110);
    let enemy4 = new Enemy("Goblin Rider", 100, 70, 10, 110, 110);
    let chooseRandom = Math.floor(Math.random() * Math.floor(5));
    console.log(player.exp);
    // console.log(enemy.exp);

    switch (chooseRandom) {
      case 0:
        enemy = enemy0;
        break;
      case 1:
        enemy = enemy1;
        break;
      case 2:
        enemy = enemy2;
        break;
      case 3:
        enemy = enemy3;
        break;
      case 4:
        enemy = enemy4;
        break;
    }
}
}
    // getHeader.innerHTML = "<p>Task: Choose your move</p>";
    // getActions.innerHTML =
    //   '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    // add other actions above as well as in playerMoves in player js

//     getEnemy.innerHTML =
//       '<img src="../img/enemies/' +
//       enemy.classType.toLowerCase() +
//       '.png" class="img-avatar"><div><h3>' +
//       enemy.classType +
//       '</h3><p class="health-enemy">Health: ' +
//       enemy.health +
//       "</p><p>Attack: " +
//       enemy.attack +
//       "</p><p>Defense: " +
//       enemy.defense +
//       "</p><p>Speed: " +
//       enemy.speed +
//       '</p><p class="enemy-exp">XP: ' +
//       enemy.exp +
//       "</p></div>";
//   },

