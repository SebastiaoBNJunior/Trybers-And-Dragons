import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  receiveDamage(attackPoints: number): number {
    this._lifePoints = attackPoints - this._lifePoints;
    if (this._lifePoints <= 0) { 
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    this.receiveDamage(enemy.strength);
  }
}