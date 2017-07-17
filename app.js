var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var basicCard1 = new BasicCard("What team was Charles Barkley drafted by?", "Philadelphia 76ers");
var basicCard2 = new BasicCard("Who is the NBA's all-time leading scorer?", "Kareem Abdul-Jabbar");

var clozeCard1 = new ClozeCard("Adam Silver is the commissioner of the NBA", "Silver");
var clozeCard2 = new ClozeCard("The 2016 MVP was Russell Westbrook", "Russell Westbrook");
