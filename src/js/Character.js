export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) throw new Error('Error: wrong name length');

    this.name = name;
    this.type = '';
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health === 0) throw new Error('It\'s not possible to level up for a dead character');
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }
}
