let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        // this.setPreFight();
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
        '_crest.png" class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Attack: ' + player.attack + '</p><p>Defense: ' + player.defense + '</p><p>Speed: ' +player.speed + '</p></div>';

    },
    // setPreFight: function() {

    // }
}
