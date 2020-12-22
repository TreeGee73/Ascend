
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

let PlayerMoves = {
  toggleEnemy: function () {
    const enemyBox = document.querySelector(".btn-flee");
      if (enemyBox.style.display === "none"){
        enemyBox.style.display === "block"
      } else {enemyBox.style.display === "none"}
      },
    // playerAttack: function () {
    //   let calcBaseDamage;
    //   calcBaseDamage = player.attack - enemy.defense;
        
    //   let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    //   let calcTotal = calcBaseDamage + offsetDamage;
    //   return calcTotal;
    // },
    // enemyAttack: function () {
    //   let calcBaseDamage;
    //   calcBaseDamage = enemy.attack - player.defense;
      
    //   let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    //   let calcTotal = calcBaseDamage + offsetDamage;
    //   return calcTotal;
    // },

  calcAttack: function () {
    let getEnemyHealth = document.querySelector("#enemy-health");
    let getEnemyAttack = document.querySelector("#enemy-attack");
    let getPlayerDefense = document.querySelector("#player-defense");
    let getEnemyDefense = document.querySelector("#enemy-defense");
    let getPlayerName = document.querySelector("#player-name");
    let getPlayerHealth = document.querySelector("#player-health");
    let getPlayerAttack = document.querySelector("#player-attack");
    let getPlayerExp = document.querySelector("#player-exp");
    let getEnemyExp = document.querySelector("#enemy-exp");
    let getPlayerSpeed = document.querySelector("#player-speed");
    let getEnemySpeed = document.querySelector("#enemy-speed");


    // who attacks first
    let playerAttack = function () {
      let calcBaseDamage;
      calcBaseDamage = player.attack - enemy.defense;
      
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcTotal = calcBaseDamage + offsetDamage;
      return calcTotal;
    };
    // let renderStats = function (){
      //   getPlayerHealth.textContent = "Health: " + player.health;
      //   getPlayerAttack.textContent = "Attack: " + player.attack;
      //   getPlayerDefense.textContent = "Defense: " + player.defense;
      //   getPlayerSpeed.textContent = "Speed: " + player.speed;
      //   getPlayerExp.textContent = "XP: " + player.exp;
      // };
      let enemyAttack = function () {
        let calcBaseDamage;
        calcBaseDamage = enemy.attack - player.defense;
        
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcTotal = calcBaseDamage + offsetDamage;
        return calcTotal;
      };
      let levelUp = function () {
        player.health += 25;
        player.attack += 10;
        player.defense += 10;
        player.speed += 5;
        player.exp -= 100;
        // renderstats();
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getPlayerAttack.innerHTML = "Attack: " + player.attack;
        getPlayerDefense.innerHTML = "Defense: " + player.defense;
        getPlayerSpeed.innerHTML = "Speed: " + player.speed;
        getPlayerExp.innerHTML = "XP: " + player.exp;
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
        if (player.health <= 0) {
          alert("You Dead!");
          getPlayerHealth.textContent = "Health: 0";
          getEnemyHealth.textContent = "Health: " + enemy.health;
        } else {
          getPlayerHealth.textContent = "Health: " + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let calcTotal = enemyAttack();
      player.health = player.health - calcTotal;
      alert("Enemy hit for " + calcTotal);
      if (player.health <= 0) {
        alert("You lose!");
        getEnemyHealth.textContent = "Health: " + enemy.health;
        getPlayerHealth.textContent = "Health: 0";
      } else {
        getPlayerHealth.textContent = "Health: " + player.health;

        let totalDamage = this.playerAttack();

        enemy.health = enemy.health - totalDamage;
        alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
          alert("You Win!");
          // debugger;
          getPlayerHealth.textContent = "Health: " + player.health;
          getEnemyHealth.textContent = "Health: 0";
          player.exp = player.exp += enemy.exp;
          getPlayerExp.textContent = "XP: " + player.exp;
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
  if (player.speed >= enemy.speed){
  alert("Flee succesful!...Scaredy Cat");
  toggleEnemy();
  // function toggleEnemy(){
  // const enemyBox = document.querySelector(".btn-flee");
  //   if (enemyBox.style.display === "none"){
  //     enemyBox.style.display === "block"
  //   } else {enemyBox.style.display === "none"}
  //   };
  }
  else {
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
  // guardUp : function(){
  // player.defense * 2 == player.defense;
  //   let totalDamage = enemyAttack();
  //       player.health = player.health - totalDamage;
  //       alert("Enemy hit for " + totalDamage);
  //       if (player.health <= 0) {
  //         alert("You Dead!");
  //         getPlayerHealth.innerHTML = "Health: 0";
  //         getEnemyHealth.innerHTML = "Health: " + enemy.health;
  //       } else {
  //         getPlayerHealth.innerHTML = "Health: " + player.health;
  //     }
  //   },
}

