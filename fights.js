
var wayne = {
    reportDamage: function(damage, hitType) {
        console.log(`<**(${this.name})`, "Nothing yet");
    },
    trashTalk: function(damage, hitT) {
        var insult = "";
        if (damage > 10) {
            insult = "You're made of spare parts aren't you bud";
        } else if (damage > 15) {

        }
        console.log(`!!>[${this.name}]:`, insult);
    },
    takePunch: function(otherFighter) {
        this.health = this.health - otherFighter.strength;
        this.reportDamage();
    },
    givePunch: function(otherFighter) {
        otherFighter.takePunch(this);
        this.trashTalk();
    },
    takeKick: function() {
        this.health = this.health - (otherFighter.strength + 2);
        console.log("Now if you ever hit me and I find out about it...");
    },
    giveKick: function(otherFighter) {
        otherFighter.takeKick(this);
        this.trashTalk();
    },
    takeThrow: function(otherFighter) {
        this.health = this.health - (otherFighter.strength + 4);
    },
    giveThrow: function() {
    },
    takeTrashTalk: function() {
    },
    giveTrashTalk: function() {
    },
    fight: function(otherFighter) {
        this.giveKick(otherFighter);
    },

    name: "wayne",
    skill: 20,
    health: 100,
    speed: 20,
    strength: 20,
    stamina: 20
};

var pillboy = {
    reportDamage: function(damage, hitType) {
        console.log(`<**(${this.name})`, "Nothing yet");
    },
    trashTalk: function(damage, hitT) {
        var insult = "hurts huh";
        if (damage > 10) {
            insult = "well there";
        } else if (damage > 18) {

        }
        console.log(`!!>[${this.name}]:`, insult);
    },
    takePunch: function(otherFighter) {
        this.health = this.health - otherFighter.strength;
        this.reportDamage();
    },
    givePunch: function(otherFighter) {
        otherFighter.takePunch(this);
        this.trashTalk();
    },
    takeKick: function(otherFighter) {
        this.health = this.health - (otherFighter.strength + 2);
        this.reportDamage();
        console.log("Now if you ever hit me and I find out about it...");
    },
    giveKick: function() {
    },
    takeThrow: function(otherFighter) {
        this.health = this.health - (otherFighter.strength + 4);
    },
    giveThrow: function() {
    },
    takeTrashTalk: function() {
    },
    giveTrashTalk: function() {
    },

    fight: function(otherFighter) {
        this.givePunch(otherFighter);
    },

    name: "pillboy",
    skill: 16,
    health: 100,
    speed: 15,
    strength: 16,
    stamina: 12
};

var daryl = {
    name: "daryl",
    skill: 10,
    health: 100,
    speed: 12,
    strength: 14,
    stamina: 11
};

var fighters = {
    // name to fighter
    "wayne": wayne,
    "pillboy": pillboy,
    "daryl": daryl
};


var fightClub = {
    startMatch: function(fighter1, fighter2) {
        console.log("\nNEW MATCH!!", fighter1.name, "vesus", fighter2.name);
        fighter1.fight(fighter2);
    }
}

fightClub.startMatch(pillboy, wayne);
fightClub.startMatch(wayne, pillboy);


console.log("\n\n=====================================\nFIGHTER OVER!");