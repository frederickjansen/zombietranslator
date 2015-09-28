define(['ZombieTranslator'], function (ZombieTranslator) {
  var zombieTranslator = new ZombieTranslator();
  describe('ZombieTranslator', function () {
    describe('englishToZombie single characters', function () {

      describe('e', function () {
        it('e should be RR', function () {
          expect(zombieTranslator.englishToZombie('e')).toBe('rr');
        });
        it('E should be RR', function () {
          expect(zombieTranslator.englishToZombie('E')).toBe('rr');
        });
      });

      describe('i', function () {
        it('i should be rrRr', function () {
          expect(zombieTranslator.englishToZombie('i')).toBe('rrRr');
        });
        it('I should be rrRr', function () {
          expect(zombieTranslator.englishToZombie('I')).toBe('rrRr');
        });
      });

      describe('o', function () {
        it('o should be rrrRr', function () {
          expect(zombieTranslator.englishToZombie('o')).toBe('rrrRr');
        });
        it('O should be rrrRr', function () {
          expect(zombieTranslator.englishToZombie('O')).toBe('rrrRr');
        });
      });

      describe('u', function () {
        it('u should be rrrrRr', function () {
          expect(zombieTranslator.englishToZombie('u')).toBe('rrrrRr');
        });
        it('U should be rrrrRr', function () {
          expect(zombieTranslator.englishToZombie('U')).toBe('rrrrRr');
        });
      });

      describe('r end', function () {
        it('r should be rh at end of word', function () {
          expect(zombieTranslator.englishToZombie('r')).toBe('rh');
        });

      });

      describe('r', function () {
        it('r should be RR in other cases', function () {
          expect(zombieTranslator.englishToZombie('rx')).toBe('RRx');
        });
        it('R should be RR', function () {
          expect(zombieTranslator.englishToZombie('R')).toBe('RR');
        });
      });

      describe('s', function () {
        it('s should be SSS at end of word', function () {
          expect(zombieTranslator.englishToZombie('s')).toBe('SSS');
        });
      });

      describe('z', function () {
        it('z should be ZZZ at end of word', function () {
          expect(zombieTranslator.englishToZombie('z')).toBe('ZZZ');
        });
      });

      describe('a', function () {
        it('a should be hra', function () {
          expect(zombieTranslator.englishToZombie('a')).toBe('hra');
        });
      });

      describe('capitalization', function () {
        it('the first letter of a sentence should be capitalized', function () {
          expect(zombieTranslator.englishToZombie('. a')).toBe('. Hra');
        });
      });
    });

    describe('englishToZombie full words', function() {
      it('JaZahn should be JhraZhrahn', function () {
        expect(zombieTranslator.englishToZombie('JaZahn')).toBe('JhraZhrahn');
      });
      it('petty should be prrtty', function () {
        expect(zombieTranslator.englishToZombie('petty')).toBe('prrtty');
      });
      it('pretty should be pRRrrtty', function () {
        expect(zombieTranslator.englishToZombie('pretty')).toBe('pRRrrtty');
      });
      it('brains should be bRRhrarrRrnSSS', function () {
        expect(zombieTranslator.englishToZombie('brains')).toBe('bRRhrarrRrnSSS');
      });
      it('onomatopoeia should be rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra', function () {
        expect(zombieTranslator.englishToZombie('onomatopoeia')).toBe('rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra');
      });
    });

    describe('englishToZombie sentences', function() {
      it('JaZahn should be JhraZhrahn', function () {
        expect(zombieTranslator.englishToZombie('JaZahn')).toBe('JhraZhrahn');
      });
      it('petty should be prrtty', function () {
        expect(zombieTranslator.englishToZombie('petty')).toBe('prrtty');
      });
      it('pretty should be pRRrrtty', function () {
        expect(zombieTranslator.englishToZombie('pretty')).toBe('pRRrrtty');
      });
      it('brains should be bRRhrarrRrnSSS', function () {
        expect(zombieTranslator.englishToZombie('brains')).toBe('bRRhrarrRrnSSS');
      });
      it('onomatopoeia should be rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra', function () {
        expect(zombieTranslator.englishToZombie('onomatopoeia')).toBe('rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra');
      });
    });

    describe('englishToZombie exceptions', function() {
      it('30 should be 30', function () {
        expect(zombieTranslator.englishToZombie('30')).toBe('30');
      });
      it('petty should be prrtty', function () {
        expect(zombieTranslator.englishToZombie('petty')).toBe('prrtty');
      });
      it('pretty should be pRRrrtty', function () {
        expect(zombieTranslator.englishToZombie('pretty')).toBe('pRRrrtty');
      });
      it('onomatopoeia should be rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra', function () {
        expect(zombieTranslator.englishToZombie('onomatopoeia')).toBe('rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra');
      });
    });
  });


});
