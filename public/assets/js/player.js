
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
  calcAttack: function () {
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
        getPlayerHealth.textContent = "Health: " + player.health;
        getPlayerAttack.textContent = "Attack: " + player.attack;
        getPlayerDefense.textContent = "Defense: " + player.defense;
        getPlayerSpeed.textContent = "Speed: " + player.speed;
        getPlayerExp.textContent = "XP: " + player.exp;
      };
      let getPlayerName = document.querySelector("#player-name");
      let getPlayerHealth = document.querySelector("#health-player");
      let getPlayerAttack = document.querySelector("#attack-player");
      // integrate these to html
      let getEnemyHealth = document.querySelector("#health-enemy");
      let getEnemyAttack = document.querySelector("#attack-enemy");
      let getPlayerDefense = document.querySelector("#defense-player");
      let getEnemyDefense = document.querySelector("#defense-enemy");
      // let getPlayerSpeed = document.querySelector("#speed-player");
      // let getEnemySpeed = document.querySelector("#speed-enemy");
      // integrate these to html
      let getPlayerExp = document.querySelector("#player-exp");
      let getEnemyExp = document.querySelector("#enemy-exp");
      let getPlayerSpeed = player.speed;
      let getEnemySpeed = enemy.speed;
      // if (player.speed >= enemy.speed)
      if (getPlayerSpeed >= getEnemySpeed) {
        let calcTotal = playerAttack();
        enemy.health = enemy.health - calcTotal;
        alert("You hit for " + calcTotal);
        if (enemy.health <= 0) {
          alert("You win!");
        debugger;
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
        player.exp = player.exp + enemy.exp;
        getPlayerExp.innerHTML = "XP: " + player.exp;
        if (player.exp >= 100) {
          levelUp();
          // console.log(player.exp);
        }
        // setPreFight();
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;

        let totalDamage = enemyAttack();

        player.health = player.health - totalDamage;
        alert("Enemy hit for " + totalDamage);
        if (player.health <= 0) {
          alert("You Dead!");
          getPlayerHealth.innerHTML = "Health: 0";
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let calcTotal = enemyAttack();
      player.health = player.health - calcTotal;
      alert("Enemy hit for " + calcTotal);
      if (player.health <= 0) {
        alert("You lose!");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;

        let totalDamage = playerAttack();

        enemy.health = enemy.health - totalDamage;
        alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
          alert("You Win!");
          debugger;
          getPlayerHealth.innerHTML = "Health: " + player.health;
          getEnemyHealth.innerHTML = "Health: 0";
          player.exp = player.exp + enemy.exp;
          getPlayerExp.innerHTML = "XP: " + player.exp;
          if (player.exp >= 100) {
            levelUp();
            // renderstats();
            
            // console.log(player.exp);
          }
          // setPreFight();
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }
  },
  // flee : function(){
  // if (player.speed >= enemy.speed){
  // alert("Flee succesful!...Scaredy Cat");
  // function toggleEnemy(){
  // const enemyBox = document.querySelector("#");
  //   if (#.style.display === "none"){
  //     #.style.display === "block"
  //   } else if {#.style.display === "none"};
  //   };
  // }
  // else {
  //     let calcTotal = enemyAttack();
  //     player.health = player.health - calcTotal;
  //     alert("Enemy hit for " + calcTotal);
  //     if (player.health <= 0) {
  //     getEnemyHealth.innerHTML = "Health: " + enemy.health;
  //     getPlayerHealth.innerHTML = "Health: 0";
  //     alert("You lose!");
  //     } else {
  //       getPlayerHealth.innerHTML = "Health: " + player.health;
  //     }
  //   }
  // },
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

