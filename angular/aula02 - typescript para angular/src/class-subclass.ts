// classes

/* 
    data modifiers
    - public (onde todos veem)
    - private (onde somente a classe ve)
    - protected (onde somente a classe que herda ve)
*/

class Character {
    protected name?:string;
    stregth:number;
    skill:number

    constructor(name: string, stregth: number, skill: number) {
        
        this.name = this.name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attach with ${this.stregth} points`)
    }
}


//Charecter: superclass
// Magician: subclass
class Magician extends Character {
    magicPoints: number
    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill)
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 29, 12, 65);