let player;
    
function Player(classType, health, attack, defense, speed, exp) {
    this.classType = classType;
    // this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.exp = exp;
}

let PlayerMoves = {
    calcAttack: function () {
        // who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let playerAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = player.attack - enemy.defense;
        
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcTotal = calcBaseDamage + offsetDamage;
        return calcTotal;
        }
    
        let enemyAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = enemy.attack - player.defense;

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcTotal = calcBaseDamage + offsetDamage;
        return calcTotal;
        }
        let levelUp = function(){
            player.health += 25;
            player.attack += 10;
            player.defense += 10;
            player.speed += 5;
            player.exp -= 100;
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getPlayerAttack.innerHTML = 'Attack: ' + player.attack;
            getPlayerDefense.innerHTML = 'Defense: ' + player.defense;
            getPlayerSpeed.innerHTML = 'Speed: ' + player.speed;
            getPlayerExp.innerHTML = 'XP: ' + player.exp;
        }
        let getPlayerHealth = document.querySelector(".health-player");
        let getPlayerAttack = document.querySelector(".attack-player");
        // integrate these to html
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getEnemyAttack = document.querySelector(".attack-enemy");
        let getPlayerDefense = document.querySelector(".defense-player");
        let getEnemyDefense = document.querySelector(".defense-enemy");
        // let getPlayerSpeed = document.querySelector(".speed-player");
        // let getEnemySpeed = document.querySelector(".speed-enemy");
        // integrate these to html
        let getPlayerExp = document.querySelector(".player-exp");
        let getEnemyExp =document.querySelector(".enemy-exp");
        if (getPlayerSpeed >= getEnemySpeed) {
            let calcTotal = playerAttack();
            enemy.health = enemy.health - calcTotal;
            alert("You hit for " + calcTotal);
        if (enemy.health <= 0) {
            alert("You win!");
            debugger;
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
            player.exp = player.exp + enemy.exp;
            getPlayerExp.innerHTML = 'XP: ' + player.exp;
            if (player.exp >= 100){
                levelUp();
                // console.log(player.exp);
            }
            // setPreFight();
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            
            let totalDamage = enemyAttack();
            
            player.health = player.health - totalDamage;
            alert("Enemy hit for " + totalDamage);
        if (player.health <= 0) {
            alert("You Dead!");
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;

        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
    
        }
        }
        else if (getEnemySpeed >= getPlayerSpeed) {
            let calcTotal = enemyAttack();
            player.health = player.health - calcTotal;
            alert("Enemy hit for " + calcTotal);
        if (player.health <= 0) {
            alert("You lose!");
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            
            let totalDamage = playerAttack();
            
            enemy.health = enemy.health - totalDamage;
            alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
            alert("You Win!");
            debugger;
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
            player.exp = player.exp + enemy.exp;
            getPlayerExp.innerHTML = 'XP: ' + player.exp;
            if (player.exp >= 100){
                levelUp();
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getPlayerAttack.innerHTML = 'Attack: ' + player.attack;
                getPlayerDefense.innerHTML = 'Defense: ' + player.defense;
                getPlayerSpeed.innerHTML = 'Speed: ' + player.speed;
                // console.log(player.exp);
            }
            // setPreFight();
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
    
        }
        }
   
    }
}
