// var urlParams = new URLSearchParams(window.location.search)
// To get the character -> urlParams.get("character")

// on page load
// check if character exists
// if he doesnt -> redirect to '/'
// else do the following
// hit api for chosen character
// hit api for random enemy
// populate html with chose character and enemy data

let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "warrior":
        player = new Player(classType, 200, 50, 40, 60, 1);
        break;
      case "rogue":
        player = new Player(classType, 120, 90, 20, 100, 1);
        break;
      case "mage":
        player = new Player(classType, 80, 150, 0, 75, 1);
        break;
      case "hunter":
        player = new Player(classType, 120, 90, 30, 80, 1);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
      '<img src="../img/' +
      classType.toLowerCase() +
      '_crest.png" class="img-avatar"><div><h3>' +
      classType +
      '</h3><p class="health-player">Health: ' +
      player.health +
      '</p><p class="attack-player">Attack: ' +
      player.attack +
      '</p><p class="defense-player">Defense: ' +
      player.defense +
      '</p><p class="speed-player">Speed: ' +
      player.speed +
      '</p><p class="player-exp">XP: ' +
      player.exp +
      "</p></div>";
  },
  setPreFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = "<p>Task: Find an enemy!</p>";
    getActions.innerHTML =
      '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Find enemy</a>';
    // getArena.style.visibility = 'visible';
  },
  setFight: function () {
    function getPosts(category) {
      var categoryString = category || "";
      if (categoryString) {
        categoryString = "/category/" + categoryString;
      }
      $.get("/api/posts" + categoryString, function (data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty();
        } else {
          initializeRows();
        }
      });
    }
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector("#enemy");
    // create enemy
    let enemy0 = new Enemy("Goblin", 80, 40, 20, 50, 110);
    let enemy1 = new Enemy("Goblin Shaman", 75, 90, 20, 75, 110);
    let enemy2 = new Enemy("Troll", 200, 50, 30, 60, 110);
    let enemy3 = new Enemy("Hobgolin", 150, 70, 25, 50, 110);
    let enemy4 = new Enemy("Goblin Rider", 100, 70, 10, 110, 110);
    let chooseRandom = Math.floor(Math.random() * Math.floor(5));
    // console.log(player.exp);
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
    // getHeader.innerHTML = '<p>Task: Choose your move</p>';
    // getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    // add other actions above as well as in playerMoves in player js
    getEnemy.innerHTML =
      '<img src="../img/enemies/' +
      enemy.classType.toLowerCase() +
      '.png" class="img-avatar"><div><h3>' +
      enemy.classType +
      '</h3><p class="health-enemy">Health: ' +
      enemy.health +
      "</p><p>Attack: " +
      enemy.attack +
      "</p><p>Defense: " +
      enemy.defense +
      "</p><p>Speed: " +
      enemy.speed +
      '</p><p class="enemy-exp">XP: ' +
      enemy.exp +
      "</p></div>";
  },
};
