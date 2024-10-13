import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private playerOne: Fighter,
    private opponents: (Fighter | SimpleFighter)[],
  ) { super(playerOne); }

  fight(): number {
    this.opponents.forEach((monster) => {
      while (this.playerOne.lifePoints > 0 && monster.lifePoints > 0) {
        monster.attack(this.playerOne);
        this.playerOne.attack(monster);
      }
    });
    return super.fight();
  }
}