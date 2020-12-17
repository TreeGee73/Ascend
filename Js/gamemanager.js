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
                player = new Player(classType, 120, 70, 20, 100);
                break;
            case "mage":
                 player = new Player(classType, 100, 150, 0, 75);
                 break;
            case "hunter":
                 player = new Player(classType, 150, 90, 30, 80);
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
        let enemy1 = new Enemy("Troll", 150, 50, 30, 70);
        let chooseRandom = Math.floor(Math.random() * Math.floor(2));
        console.log(chooseRandom);
        switch (chooseRandom){
            case 0:
                enemy = enemy0;
                break;
            case 1:
                enemy = enemy1;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        // add other actions above as well as in playerMoves in player js
    
        getEnemy.innerHTML = '<img src="../img/enemies/' + enemy.classType.toLowerCase() + 
        '.png" class="img-avatar"><div><h3>' + enemy.classType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Attack: ' + enemy.attack + '</p><p>Defense: ' + enemy.defense + '</p><p>Speed: ' +enemy.speed + '</p></div>';
    }
    
}
