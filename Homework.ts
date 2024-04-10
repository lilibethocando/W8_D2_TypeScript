// Interfaces - Attack, Defend, Collect
interface Attack {
    attack(): string;
}

interface Defend {
    defend(): string;
}

interface Collect {
    collectGold(amount: number): void;
}

// Classes for different attacking mechanisms
class AttackWithClub implements Attack {
    attack(): string {
        return "Attacking with a club.";
    }
}

class AttackWithSword implements Attack {
    attack(): string {
        return "Attacking with a sword.";
    }
}

class AttackWithBowAndArrow implements Attack {
    attack(): string {
        return "Shooting a bow and arrow.";
    }
}

// Classes for different defending mechanisms
class DefendsWithShield implements Defend {
    defend(): string {
        return "Defending with a shield.";
    }
}

class DefendsWithArmor implements Defend {
    defend(): string {
        return "Defending with armor.";
    }
}

class DefendsWithTunic implements Defend {
    defend(): string {
        return "Defending with only a tunic... yikes!";
    }
}

// Abstract Character class that implements the interfaces 

abstract class Character implements Attack, Defend, Collect {
    protected _gold: number = 0;
    protected abstract attackAbility$: Attack;
    protected abstract defendAbility$: Defend;

    constructor(protected _name: string) {}

    attack(): string {
        return `${this._name} is ${this.attackAbility$.attack()}`;
    }

    defend(): string {
        return `${this._name} is ${this.defendAbility$.defend()}`;
    }

    collectGold(amount: number): void {
        this._gold += amount;
    }

    toString(): string {
        return `${this.constructor.name} {\n` +
            `  _name: '${this._name}',\n` +
            `  _gold: ${this._gold},\n` +
            `  'attackAbility$': ${this.attackAbility$.constructor.name} {},\n` +
            `  'defendAbility$': ${this.defendAbility$.constructor.name} {}\n` +
            `}`;
    }
}

// Classes that inherit from Character
class Ogre extends Character {
    protected attackAbility$: Attack = new AttackWithClub();
    protected defendAbility$: Defend = new DefendsWithShield();
}

class Peon extends Character {
    protected attackAbility$: Attack = new AttackWithClub();
    protected defendAbility$: Defend = new DefendsWithShield();
}

class Knight extends Character {
    protected attackAbility$: Attack = new AttackWithSword();
    protected defendAbility$: Defend = new DefendsWithArmor();
}

class Archer extends Character {
    protected attackAbility$: Attack = new AttackWithBowAndArrow();
    protected defendAbility$: Defend = new DefendsWithTunic();
}

let shrek = new Ogre('Shrek');
let peon = new Peon('Beth');
let brian = new Knight('Brian');
let legolas = new Archer('Legolas');

let allChars: Character[] = [shrek, peon, brian, legolas]
console.log(allChars)

function getRandomNumber():number{
    return Math.ceil(Math.random()*25)
}

getRandomNumber()

for (let char of allChars) {
    console.log(char.attack());
    console.log(char.defend());
    char.collectGold(getRandomNumber());
    console.log(`${char._name} has collected ${char._gold} gold. Their total gold is ${char._gold}`);
}