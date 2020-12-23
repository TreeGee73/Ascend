let enemy;
let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    // this.setPreFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "warrior":
        player = new Player(
          classType,
          "Bruth Spiritreaper",
          200,
          50,
          40,
          50,
          0,
          "warrior.jpg"
        );
        break;
      case "rogue":
        player = new Player(
          classType,
          "Lacina",
          120,
          90,
          20,
          100,
          0,
          "rogue.jpg"
        );
        break;
      case "mage":
        player = new Player(
          classType,
          "Ziu Qaim",
          80,
          150,
          0,
          75,
          0,
          "mage.jpg"
        );
        break;
      case "hunter":
        player = new Player(
          classType,
          "Gwendolyn Helton",
          120,
          90,
          30,
          80,
          0,
          "hunter.jpg"
        );
        break;
    }
    // let getInterface = document.querySelector('.interface');
    // getInterface.innerHTML = '<img src="images/' + classType.toLowerCase() +
    // '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: '
    //  + player.health + '</p><p class="attack-player">Attack: ' + player.attack + '</p><p class="defense-player">Defense: ' + player.defense +
    //  '</p><p class="speed-player">Speed: ' +player.speed + '</p><p class="player-exp">XP: '+ player.exp + '</p></div>';
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = `<div class="row"><div class="col-md-5 player-div"><div class="row"><div class="col-md-8"><h2 class="champName" id="player-name">${player.name}</h2></div><div class="col-md-4"><h2 class="champ-health" id="player-health">HP: ${player.health}</h2></div></div><div class="row"><div class="col-md-5 boost"><div class="row"><div><h2 id="player-attack">Attack: ${player.attack}</h2></div></div><div class="row"><div><h2 id="player-defense">Defense: ${player.defense}</h2></div></div><div class="row"><div><h2 id="player-speed">Speed: ${player.speed}</h2></div></div><div class="row"><div><h2 id="player-exp">Exp: ${player.exp}</h2></div></div></div><div class="col-md-5"><img src="/assets/images/${player.image}" class="char-pix" alt="${player.name}" /></div></div><div class="row actions"><a href="#" onclick="GameManager.setFight()"><button class="btn btn-prefight" id="find-enemy">Find an Enemy!</button></a></div></div><div class="col-md-2"><div class="row"><img src="https://comicvine1.cbsistatic.com/uploads/original/11130/111300953/5440456-4284025-6271335549-vs.pn.png" alt="versus" class="versus" /></div></div><div class="col-md-5 enemy" style="show"></div>`;
  },
  // setPreFight: function() {
  //     let getHeader = document.querySelector(".header");
  //     let getActions = document.querySelector(".actions");
  //     let getArena = document.querySelector(".arena");
  //     // getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
  //     // getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Find enemy</a>';
  //     // getArena.style.visibility = 'visible';
  // },
  setFight: async function () {
    // let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    let enemies = await fetch("/api/enemies");
    enemies = await enemies.json();
    let randomIndex = Math.floor(Math.random() * enemies.length);
    let { attack, classType, defense, exp, health, image, speed } = enemies[
      randomIndex
    ];
    enemy = new Enemy(classType, health, attack, defense, speed, exp, image);
    console.log(enemy);
    // new Enemy("Goblin", 80, 40, 20, 50, 110, "goblin.jpg");
    // getHeader.innerHTML = '<p>Task: Choose your move</p>';
    getActions.innerHTML =
      '<a href="#" class="btn-attack" onclick="PlayerMoves.calcAttack()"><button class="btn btnAttack" id="start">Attack!</button></a>' +
      '<a href="#" class="btn-flee" onclick="PlayerMoves.flee()"><button class="btn btnFlee">Flee!</button></a>';
      // '<a href="#" class="btn-guard" onclick="PlayerMoves.guardUp()"><button class="btn btnAttack">Guard</button></a>' +
      // '<a href="#" class="btn-charge" onclick="PlayerMoves.chargeUp()"><button class="btn btnFlee">Charge Up</button></a>';
      // '<a href="#" class="btn-guard" onclick="PlayerMoves.guardUp()"><button class="btn btnGuard">Guard!</button></a>';
      // '<a href="#" class="btn-charge" onclick="PlayerMoves.chargeUp()"><button class="btn btnCharge">Flee!</button></a>';
    // add other actions above as well as in playerMoves in player js
    // getEnemy.innerHTML = '<img src="images/' + enemy.classType.toLowerCase() +
    // '.jpg" class="img-avatar"><div><h3>' + enemy.classType + '</h3><p class="health-enemy">Health: '
    //  + enemy.health + '</p><p>Attack: ' + enemy.attack + '</p><p>Defense: ' + enemy.defense +
    //  '</p><p>Speed: ' +enemy.speed + '</p><p class="enemy-exp">XP: '+ enemy.exp + '</p></div>';
    getEnemy.innerHTML = `<div class="row"><div class="col-md-8"><h2 class="enemyName" id="enemy-name">${enemy.classType}</h2></div><div class="col-md-4"><h2 class="enemyHealth" id="enemy-health">HP: ${enemy.health}</h2></div></div><div class="row"><div class="col-md-5"><img src="/assets/images/${enemy.image}" class="enemy-pix" alt="${enemy.classType}" /></div></div>`;
  },
};
