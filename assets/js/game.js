// var for player name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight  function
var fight = function() {
// Alert players they are starting the round
window.alert("Welcome to Robot Gladiators!");

// ask a player if they would like to fight or skip 
var promptFight = window.prompt('Would you like to Fight or Skip this battle?" Enter "FIGHT" or "SKIP" to choose.');

// if a player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health reamining. "
    );

// check enemy's heath 
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
} else {
    window.alert(enemyName + " still has" + enemyHealth + " health left. ")
}

// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
);

// check players health
if (playerHealth <=0) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}

// if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
     var confirmSkip = window.confirm(" Are you sure you'd like to quit?");

     // if yes (true), leave fight
     if (confirmSkip) {
         window.alert(playerName + " has decided to skip this fight. Goodbye!");
         // subtratc money from playerMoney for skipping
         playerMoney = playerMoney - 2;
     }
    // if no (false), ask question again by running fight() again
     else {
         fight();
     } 
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
    };

    // run fight function to start game
    fight();


























