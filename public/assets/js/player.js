
let player;

function Player(classType, name, health, attack, defense, speed, exp, image) {
  this.classType = classType;
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.defense = defense;
  this.speed = speed;
  this.exp = exp;
  this.image = image;
}
// let playerAttack = function () {
  //   let calcBaseDamage;
  //   calcBaseDamage = player.attack - enemy.defense;
  
  //   let offsetDamage = Math.floor(Math.random() * Math.floor(10));
  //   let calcTotal = calcBaseDamage + offsetDamage;
  //   return calcTotal;
  // }
  //   let enemyAttack = function () {
    //     let calcBaseDamage;
    //     calcBaseDamage = enemy.attack - player.defense;
    
    //     let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    //     let calcTotal = calcBaseDamage + offsetDamage;
    //     return calcTotal;
    //   }
    
    let PlayerMoves = {
      calcAttack: function () {
        let getPlayerHealth = document.querySelector("#player-health");
      let getEnemyHealth = document.querySelector("#enemy-health");
      let getEnemyAttack = document.querySelector("#enemy-attack");
      let getPlayerDefense = document.querySelector("#player-defense");
      let getEnemyDefense = document.querySelector("#enemy-defense");
      let getPlayerName = document.querySelector("#player-name");
      let getPlayerAttack = document.querySelector("#player-attack");
      let getPlayerExp = document.querySelector("#player-exp");
      let getEnemyExp = document.querySelector("#enemy-exp");
      let getPlayerSpeed = document.querySelector("#player-speed");
      let getEnemySpeed = document.querySelector("#enemy-speed");
      let playerAttack = function () {
        let calcBaseDamage;
        calcBaseDamage = player.attack - enemy.defense;
        
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcTotal = calcBaseDamage + offsetDamage;
        return calcTotal;
      };
      let enemyAttack = function () {
        let calcBaseDamage;
        calcBaseDamage = enemy.attack - player.defense;
        
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcTotal = calcBaseDamage + offsetDamage;
        return calcTotal;
      };


    // who attacks first
    let renderStats = function (){
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getPlayerAttack.innerHTML = "Attack: " + player.attack;
        getPlayerDefense.innerHTML = "Defense: " + player.defense;
        getPlayerSpeed.innerHTML = "Speed: " + player.speed;
        getPlayerExp.innerHTML = "XP: " + player.exp;
      };
      let levelUp = function () {
        player.health += 20;
        player.attack += 10;
        player.defense += 5;
        player.speed += 5;
        player.exp -= 100;
        renderStats();
        // getPlayerHealth.innerHTML = "Health: " + player.health;
        // getPlayerAttack.innerHTML = "Attack: " + player.attack;
        // getPlayerDefense.innerHTML = "Defense: " + player.defense;
        // getPlayerSpeed.innerHTML = "Speed: " + player.speed;
        // getPlayerExp.innerHTML = "XP: " + player.exp;
      };
      // integrate these to html
      // let getPlayerSpeed = document.querySelector("#speed-player");
      // let getEnemySpeed = document.querySelector("#speed-enemy");
      // integrate these to html
      getPlayerSpeed = player.speed;
      getEnemySpeed = enemy.speed;
      // if (player.speed >= enemy.speed) {
      if (getPlayerSpeed >= getEnemySpeed) {
        let calcTotal = playerAttack();
        enemy.health = enemy.health - calcTotal;
        alert("You hit for " + calcTotal);
        if (enemy.health <= 0) {
          alert("You win!");
        // debugger;
        getPlayerHealth.textContent = "Health: " + player.health;
        getEnemyHealth.textContent = "Health: 0";
        player.exp = player.exp += enemy.exp;
        console.log(player.exp);
        getPlayerExp.textContent = "XP: " + player.exp;
        GameManager.setFight();
        // restart
        if (player.exp >= 100) {
          levelUp();
          // console.log(player.exp);
        }
        // setPreFight();
      } else {
        getEnemyHealth.textContent = "Health: " + enemy.health;

        let totalDamage = enemyAttack();

        player.health = player.health - totalDamage;
        alert("Enemy hit for " + totalDamage);
        getPlayerHealth.textContent = "Health: 0";
        getEnemyHealth.textContent = "Health: " + enemy.health;
        if (player.health <= 0) {
          alert("You Dead! Refresh to startover");
        } else {
          getPlayerHealth.textContent = "Health: " + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let calcTotal = enemyAttack();
      player.health = player.health - calcTotal;
      alert("Enemy hit for " + calcTotal);
      getEnemyHealth.textContent = "Health: " + enemy.health;
      getPlayerHealth.textContent = "Health: 0";
      if (player.health <= 0) {
        alert("You lose! Refresh to startover");
      } else {
        getPlayerHealth.textContent = "Health: " + player.health;

        let totalDamage = playerAttack();

        enemy.health = enemy.health - totalDamage;
        alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
          alert("You Win!");
          // debugger;
          getPlayerHealth.textContent = "Health: " + player.health;
          getEnemyHealth.textContent = "Health: 0";
          player.exp = player.exp += enemy.exp;
          getPlayerExp.textContent = "XP: " + player.exp;
          GameManager.setFight();
          // restart
          if (player.exp >= 100) {
            levelUp();
            // renderstats();
            
            // console.log(player.exp);
          }
          // setPreFight();
        } else {
          getEnemyHealth.textContent = "Health: " + enemy.health;
        }
      }
    }
  },
  flee : function(){
    let getPlayerHealth = document.querySelector("#player-health");
    let getEnemyHealth = document.querySelector("#enemy-health");
    let enemyAttack = function () {
      let calcBaseDamage;
      calcBaseDamage = enemy.attack - player.defense;
      
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcTotal = calcBaseDamage + offsetDamage;
      return calcTotal;
    };
  if (player.speed >= enemy.speed){
  alert("Flee succesful!...Scaredy Cat");
  GameManager.setFight();
  // document.getElementById(".enemy").style.display = "none";
  // debugger;
  // toggleEnemy();
  // function toggleEnemy(){
  //   const enemyBox = document.querySelector(".enemy");
  //   if (enemyBox.style.display === "visible"){
  //     enemyBox.style.display === "hide"
  //   } else {enemyBox.style.display === "visible"}
  // } 
 } else {
      let calcTotal = enemyAttack();
      player.health = player.health - calcTotal;
      alert("Enemy hit for " + calcTotal);
      if (player.health <= 0) {
      getEnemyHealth.innerHTML = "Health: " + enemy.health;
      getPlayerHealth.innerHTML = "Health: 0";
      alert("You lose!");
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;
      }
    }
  },
  guardUp : function(){
    let getPlayerDefense = document.querySelector("#player-defense");
    let getPlayerHealth = document.querySelector("#player-health");
    let getEnemyHealth = document.querySelector("#enemy-health");
    let enemyAttack = function () {
      let calcBaseDamage;
      calcBaseDamage = enemy.attack - player.defense;
      
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcTotal = calcBaseDamage + offsetDamage;
      return calcTotal;
    };
    player.defense * 2 === player.defense;
    getPlayerDefense.innerHTML = "Defense" + player.defense
    let totalDamage = enemyAttack();
        player.health = player.health - totalDamage;
        alert("Enemy hit for " + totalDamage);
        player.defense/2 === player.defense;
        if (player.health <= 0) {
          alert("You Dead!");
          getPlayerHealth.innerHTML = "Health: 0";
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
      }
  },
  chargeUp : function(){
    let getPlayerHealth = document.querySelector("#player-health");
    let getEnemyHealth = document.querySelector("#enemy-health");
    let getPlayerAttack = document.querySelector("#player-attack");
    let enemyAttack = function () {
      let calcBaseDamage;
      calcBaseDamage = enemy.attack - player.defense;
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcTotal = calcBaseDamage + offsetDamage;
      return calcTotal;
    };
    let playerAttack = function () {
      let calcBaseDamage;
      calcBaseDamage = player.attack - enemy.defense;  
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcTotal = calcBaseDamage + offsetDamage;
      return calcTotal;
      };
      let calcTotal = enemyAttack();
      player.health = player.health - calcTotal;
      alert("Enemy hit for " + calcTotal);
      if (player.health <= 0) {
      getEnemyHealth.innerHTML = "Health: " + enemy.health;
      getPlayerHealth.innerHTML = "Health: 0";
      alert("You lose!");
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;
      };
      if (getPlayerSpeed >= getEnemySpeed) {
        calcTotal*2.5 ==calcTotal;
        let calcTotal*2.5 = playerAttack();
        enemy.health = enemy.health - calcTotal;
        alert("You hit for " + calcTotal);
        if (enemy.health <= 0) {
          alert("You win!");
        // debugger;
        getPlayerHealth.textContent = "Health: " + player.health;
        getEnemyHealth.textContent = "Health: 0";
        player.exp = player.exp += enemy.exp;
        console.log(player.exp);
        getPlayerExp.textContent = "XP: " + player.exp;
        calcTotal/2.5 ==calcTotal;
        GameManager.setFight();
        // restart
        if (player.exp >= 100) {
          levelUp();
          // console.log(player.exp);
        }
        // setPreFight();
      } else {
        getEnemyHealth.textContent = "Health: " + enemy.health;

        let totalDamage = enemyAttack();

        player.health = player.health - totalDamage;
        alert("Enemy hit for " + totalDamage);
        getPlayerHealth.textContent = "Health: 0";
        getEnemyHealth.textContent = "Health: " + enemy.health;
        if (player.health <= 0) {
          alert("You Dead! Refresh to startover");
        } else {
          getPlayerHealth.textContent = "Health: " + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let calcTotal = enemyAttack();
      player.health = player.health - calcTotal;
      alert("Enemy hit for " + calcTotal);
      getEnemyHealth.textContent = "Health: " + enemy.health;
      getPlayerHealth.textContent = "Health: 0";
      if (player.health <= 0) {
        alert("You lose! Refresh to startover");
      } else {
        getPlayerHealth.textContent = "Health: " + player.health;

        let totalDamage = playerAttack();

        enemy.health = enemy.health - totalDamage;
        alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
          alert("You Win!");
          // debugger;
          getPlayerHealth.textContent = "Health: " + player.health;
          getEnemyHealth.textContent = "Health: 0";
          player.exp = player.exp += enemy.exp;
          getPlayerExp.textContent = "XP: " + player.exp;
          GameManager.setFight();
          // restart
          if (player.exp >= 100) {
            levelUp();
            // renderstats();
            
            // console.log(player.exp);
          }
          // setPreFight();
        } else {
          getEnemyHealth.textContent = "Health: " + enemy.health;
        }
      }
    }
}
}
