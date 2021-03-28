// Вариант 1

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('The selected character is already in the team!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }
}

// Вариант 2

/* export default class Team {
  constructor() {
    this.members = new Set();
  }

  checkUnique(player) {
    let hasPlayer = true;
    this.members.forEach((member) => {
      if (JSON.stringify(member) === JSON.stringify(player)) hasPlayer = false;
    });
    return hasPlayer;
  }

  add(character) {
    if (this.checkUnique(character)) {
      this.members.add(character);
    } else {
      throw new Error('The selected character is already in the team!');
    }
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (this.checkUnique(character)) this.members.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }
} */
