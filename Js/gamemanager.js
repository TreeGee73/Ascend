let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    }, 
    resetPlayer: function (classType) {
        switch (classType) {
            case "warrior":
                player = new Player(classType, 200, 50, 40, 60);
                break;
            case "rogue":
                player = new Player(classType, 120, 90, 20, 100);
                break;
            case "mage":
                 player = new Player(classType, 80, 150, 0, 75);
                 break;
            case "hunter":
                 player = new Player(classType, 120, 90, 30, 80);
                 break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="../img/' + classType.toLowerCase() + 
        '_crest.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Attack: ' + player.attack + '</p><p>Defense: ' + player.defense + '</p><p>Speed: ' +player.speed + '</p></div>';

    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Find enemy</a>';
        // getArena.style.visibility = 'visible';
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // create enemy
        let enemy0 = new Enemy("Goblin", 80, 40, 20, 50);
        let enemy1 = new Enemy("Goblin Shaman", 75, 90, 20, 75);
        let enemy2 = new Enemy("Troll", 250, 50, 30, 60);
        let enemy3 = new Enemy("Hobgolin", 150, 70, 25, 50);
        let enemy4 = new Enemy("Goblin Rider", 100, 70, 10, 110);
        let chooseRandom = Math.floor(Math.random() * Math.floor(5));
        console.log(chooseRandom);
        switch (chooseRandom){
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
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        // add other actions above as well as in playerMoves in player js
    
        getEnemy.innerHTML = '<img src="../img/enemies/' + enemy.classType.toLowerCase() + 
        '.png" class="img-avatar"><div><h3>' + enemy.classType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Attack: ' + enemy.attack + '</p><p>Defense: ' + enemy.defense + '</p><p>Speed: ' +enemy.speed + '</p></div>';
    }
    
}
