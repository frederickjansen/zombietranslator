define(['ZombieTranslator'], function (ZombieTranslator) {
  var zombieTranslator = new ZombieTranslator();
  describe('ZombieTranslator', function () {
    describe('englishToZombie', function () {
      it('e should be RR', function () {
        expect(zombieTranslator.englishToZombie('e')).toBe('rr');
      });
      it('E should be RR', function () {
        expect(zombieTranslator.englishToZombie('E')).toBe('rr');
      });
      it('i should be rrRr', function () {
        expect(zombieTranslator.englishToZombie('i')).toBe('rrRr');
      });
      it('I should be rrRr', function () {
        expect(zombieTranslator.englishToZombie('I')).toBe('rrRr');
      });
      it('o should be rrrRr', function () {
        expect(zombieTranslator.englishToZombie('o')).toBe('rrrRr');
      });
      it('O should be rrrRr', function () {
        expect(zombieTranslator.englishToZombie('O')).toBe('rrrRr');
      });
      it('u should be rrrrRr', function () {
        expect(zombieTranslator.englishToZombie('u')).toBe('rrrrRr');
      });
      it('U should be rrrrRr', function () {
        expect(zombieTranslator.englishToZombie('U')).toBe('rrrrRr');
      });
      it('r should be RR', function () {
        expect(zombieTranslator.englishToZombie('r')).toBe('RR');
      });
      it('R should be RR', function () {
        expect(zombieTranslator.englishToZombie('R')).toBe('RR');
      });
    });
  });


});
