import Bowman from '../Bowman';
import Magician from '../Magician';
import Team from '../Team';

describe('Team:', () => {
  const team = new Team();

  describe('add method:', () => {
    const eva = new Magician('Eva');

    test('should add a new player to the team', () => {
      team.add(eva);
      team.add(new Bowman('Egor'));
      expect(team.members.size).toBe(2);
    });

    test('should throw error', () => {
      expect(() => team.add(eva)).toThrow();
    });
  });

  describe('addAll method:', () => {
    test('should add new players to the team', () => {
      const vova = new Bowman('Vova');
      vova.levelUp();
      team.addAll(vova, new Magician('Anna'), vova, new Bowman('Mary'));
      expect(team.members.size).toBe(5);
    });
  });

  describe('toArray method:', () => {
    test('should return array', () => {
      const expected = [
        {
          name: 'Eva', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
        },
        {
          name: 'Egor', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
        },
        {
          name: 'Vova', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
        },
        {
          name: 'Anna', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
        },
        {
          name: 'Mary', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
        },
      ];

      expect(team.toArray()).toMatchObject(expected);
    });
  });
});

/* describe('Team:', () => {
  const team = new Team();

  describe('add method:', () => {
    test('should throw error', () => {
      team.add(new Bowman('Ivan'));
      expect(() => team.add(new Bowman('Ivan'))).toThrow();
    });

    test('should add a new player to the team', () => {
      team.add(new Magician('Eva'));
      expect(team.members.size).toBe(2);
    });
  });

  describe('addAll method:', () => {
    test('should add new players to the team', () => {
      const vova = new Bowman('Vova');
      vova.levelUp();
      team.addAll(new Bowman('Vova'), new Magician('Anna'), vova, new Bowman('Vova'));
      expect(team.members.size).toBe(5);
    });
  });

  describe('toArray method:', () => {
    test('should return array', () => {
      const expected = [
        {
          name: 'Ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
        },
        {
          name: 'Eva', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
        },
        {
          name: 'Vova', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
        },
        {
          name: 'Anna', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
        },
        {
          name: 'Vova', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
        },
      ];

      expect(team.toArray()).toMatchObject(expected);
    });
  });
}); */
