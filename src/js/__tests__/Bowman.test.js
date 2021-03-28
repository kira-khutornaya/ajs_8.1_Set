import Bowman from '../Bowman';

describe('Bowman:', () => {
  const bowman = new Bowman('Ann');

  test('should throw error', () => {
    expect(() => new Bowman('a')).toThrow();
    expect(() => new Bowman('adkjhfdshfsf')).toThrow();
  });

  test('should return object', () => {
    expect(bowman).toMatchObject({
      name: 'Ann',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  describe('damage method:', () => {
    test('at a damage level of 60 should expect a health level of 55', () => {
      bowman.damage(60);
      expect(bowman.health).toBe(55);
    });

    test('at a damage level of 80 should expect a health level of 0', () => {
      bowman.damage(80);
      expect(bowman.health).toBe(0);
    });
  });

  describe('levelUp method:', () => {
    test('should throw error', () => {
      expect(() => bowman.levelUp()).toThrow();
    });

    test('should work correctly', () => {
      bowman.health = 30;
      bowman.levelUp();
      expect(bowman.level).toBe(2);
      expect(bowman.attack).toBe(30);
      expect(bowman.defence).toBe(30);
      expect(bowman.health).toBe(100);
    });
  });
});
