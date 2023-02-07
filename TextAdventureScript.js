const randomSeed = Math.floor(Math.random()*101)
const randomEvent = Math.floor(Math.random()*11)
var userOfClass
class Shopkeeper {
  constructor(gold, id, name, age){
    this.gold = 100
    this.id = 0
    this.name = "Dennis"
    this.age = 20       
  }
}
class Class {
    constructor(name, health, atk, magic, magicAtk, def, magicDef) {
      this.name = name
      this.health = 10
      this.atk = 10
      this.magic = 10
      this.magicAtk = 10
      this.def = 10
      this.magicDef = 10
      this.rep = 0
    }
  //this function checks the rep that you have sended it, and returns the rep associated with it
    calculateRep() {
      if (this.rep > 50) return 'Hero';
      else if (this.rep >= 0) return 'neutral';
      else if (this.rep < 0) return 'corrupted';
      else if (this.rep < -50) return 'Evil';
  
  
    }
  }
  //from here down will be customizing each of the classes, and adding abilities that will have their own cutomization later
  class Warrior extends Class {
    constructor(name, health, atk, magic, magicAtk, def, magicDef) {
      super(name, health, atk, magic, magicAtk, def, magicDef)
      this.ability = ['Anticipation', 'Full Counter', 'Seeing Red', 'Protect', 'Shield Bash', 'Rage']
      this.className = "Warrior"
      this.atk = 5 + atk
      this.magic = 4
      this.magicAtk = 1
      this.health = 15
    }
  
  }
  class Mage extends Class {
    constructor(name, health, atk, magic, magicAtk, def, magicDef) {
      super(name, health, atk, magic, magicAtk, def, magicDef)
      this.ability = ['Heat wave', 'Frost spear', 'Molten chains', 'Frozen Barrier', 'Eruption', 'Cone of coldness', 'Hellfire', 'Blizzard']
      this.className = 'Mage'
      this.atk = 2
      this.magic = 8 + magic
      this.magicAtk = 5 + magicAtk
      this.MagicDef = 8
      this.def = 3
      this.health = 10
  
    }
  }
  class Rogue extends Class {
    constructor(name, health, atk, magic, magicAtk, def, magicDef) {
      super(name, health, atk, magic, magicAtk, def, magicDef)
      this.ability = ['Pickpocket', 'Cheap shot', 'Honor among thieves', 'Know thy enemy', 'Trump Card', 'Blind shot','Assassination']
      this.className = 'Rogue'
      this.atk = 9 + atk
      this.magic = 5
      this.def = 2
      this.magicDef = 2
      this.magicAtk = 3 + magicAtk
      this.rep = -10
      this.health = 7
    }
  }
  class Paladin extends Class {
    constructor(name, health, atk, magic, magicAtk, def, magicDef) {
      super(name, health, atk, magic, magicAtk, def, magicDef)
      this.ability = ['Holy touch', 'Smite', 'Judgement day', 'Intevention', 'Retribution','All for one', 'One for all']
      this.className = "Paladin"
      this.atk = 4 + atk
      this.magic = 7
      this.def = 4 + def
      this.magicAtk = 6
      this.magicDef = 4 + magicDef
      this.rep = 10
      this.health = 20
    }
  }
  class Priest extends Class {
    constructor(name, health, atk, magic, magicAtk, magicDef, def) {
      super(name, health, atk, magic, magicAtk, def, magicDef)
      this.ability = ['Holy Touch',"Light's barrier", 'Blessing of light', 'Light Thy Way',]
      this.className = 'Priest'
      this.def = 4
      this.atk = 3
      this.magic = 5 + magic
      this.magicAtk = magicAtk + 6
      this.rep = 5
    }
  }
  class Nothing extends Class {
    constructor(name, health, atk,magic,magicAtk,magicDef, def){
      super(name, health, atk, magic, magicAtk, def, magicDef)
      this.ability = ['Give to thy poor', 'Beg']
    }
  }
  
  
  var heroes = [new Warrior("Macree", 2, 3, 1, 1, 4, 3), new Mage("Atlas", 10, 2, 15, 15, 2), new Rogue('Cooper', 12, 10, 8, 5, 4), new Paladin('Nickolas', 20, 6, 10, 9, 12), new Priest('Priest', 11, 3, 20, 10, 4), new Nothing('nothing', -9, -9, -9, -9, -9)]
  // This is the start of the div section. i will add mor explinations along the way.
 

  
