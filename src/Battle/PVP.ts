import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private playerOne: Fighter,
    private playerTwo: Fighter,
  ) { super(playerOne); }

  fight(): number {
    while (this.shouldContinueBattle()) {
      this.playerOne.attack(this.playerTwo);
      if (this.playerTwo.lifePoints === -1) return 1;

      this.playerTwo.attack(this.playerOne);
      if (this.playerOne.lifePoints === -1) return -1;
    }

    return super.fight();
  }

  private shouldContinueBattle(): boolean {
    return this.playerOne.lifePoints !== -1 && this.playerTwo.lifePoints !== -1;
  }
}