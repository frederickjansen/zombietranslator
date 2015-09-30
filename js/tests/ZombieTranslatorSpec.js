define(['ZombieTranslator'], function (ZombieTranslator) {
  'use strict';

  var zombieTranslator = new ZombieTranslator();

  /*
   English to Zombie
   */
  describe('ZombieTranslator englishToZombie', function () {
    describe('englishToZombie single characters', function () {
      describe('e', function () {
        it('e should be rr', function () {
          expect(zombieTranslator.englishToZombie('e')).toBe('rr');
        });
        it('E should be RR', function () {
          expect(zombieTranslator.englishToZombie('E')).toBe('rr');
        });
        it('31 should be string 31', function () {
          expect(zombieTranslator.englishToZombie(31)).toBe('31');
        });
        it('31 to contain 1', function () {
          expect('31').toContain('1');
        });
        it('31 not to contain 2', function () {
          expect('31').not.toContain('2');
        });
      });

      describe('i', function () {
        it('i should be rrRr', function () {
          expect(zombieTranslator.englishToZombie('i')).toBe('rrRr');
        });
        it('I should be rrRr', function () {
          expect(zombieTranslator.englishToZombie('I')).toBe('rrRr');
        });
        it('true should be converted to string tRRrrrrRrrr', function () {
          expect(zombieTranslator.englishToZombie(true)).toBe('tRRrrrrRrrr');
        });
        it('2 should be greater than 1', function () {
          expect(2).toBeGreaterThan(1);
        });
        it('1 should be less than 2', function () {
          expect(1).toBeLessThan(2);
        });
      });

      describe('o', function () {
        it('o should be rrrRr', function () {
          expect(zombieTranslator.englishToZombie('o')).toBe('rrrRr');
        });
        it('O should be rrrRr', function () {
          expect(zombieTranslator.englishToZombie('O')).toBe('rrrRr');
        });
        it('true should be true', function () {
          expect(true).toBe(true);
        });
        it('NaN should be NaN', function () {
          expect(NaN).toBeNaN();
        });
        it('3 should not be NaN', function () {
          expect(3).not.toBeNaN();
        });
      });

      describe('u', function () {
        it('u should be rrrrRr', function () {
          expect(zombieTranslator.englishToZombie('u')).toBe('rrrrRr');
        });
        it('U should be rrrrRr', function () {
          expect(zombieTranslator.englishToZombie('U')).toBe('rrrrRr');
        });
        it('function should have been called', function () {
          var foo = {
            bar: function () {
            }
          };
          spyOn(foo, 'bar');
          foo.bar();
          expect(foo.bar).toHaveBeenCalled();
        });
        it('function should not have been called', function () {
          var foo = {
            bar: function () {
            }
          };
          spyOn(foo, 'bar');

          expect(foo.bar).not.toHaveBeenCalled();
        });
        it('function should have been called with parameter', function () {
          var foo = {
            bar: function (num) {
            }
          };
          spyOn(foo, 'bar');
          foo.bar(1);
          expect(foo.bar).toHaveBeenCalledWith(1);
        });
      });

      describe('r end', function () {
        it('r should be rh at end of word', function () {
          expect(zombieTranslator.englishToZombie('r')).toBe('rh');
        });
        it('r should match /rh/', function () {
          expect(zombieTranslator.englishToZombie('r')).toMatch(/rh/);
        });
        it("object a should equal 12", function () {
          var a = 12;
          expect(a).toEqual(12);
        });
        it('undefined should not be null', function () {
          expect(undefined).not.toBeNull();
        });
      });

      describe('r', function () {
        it('r should be RR in other cases', function () {
          expect(zombieTranslator.englishToZombie('rx')).toBe('RRx');
        });
        it('R should be RR', function () {
          expect(zombieTranslator.englishToZombie('R')).toBe('RR');
        });
        it('R should not match rr', function () {
          expect(zombieTranslator.englishToZombie('R')).not.toMatch('rr');
        });
        it('true should not be false', function () {
          expect(true).not.toBe(false);
        });
        it('function should not have been called with parameter', function () {
          var foo = {
            bar: function (num) {
            }
          };
          spyOn(foo, 'bar');
          foo.bar(2);
          expect(foo.bar).not.toHaveBeenCalledWith(1);
        });
      });

      describe('s', function () {
        it('s should be SSS at end of word', function () {
          expect(zombieTranslator.englishToZombie('s')).toBe('SSS');
        });
        it('return value should be defined', function () {
          expect(zombieTranslator.englishToZombie('s')).toBeDefined();
        });
        it('undefined value should be undefined', function () {
          var a;
          expect(a).toBeUndefined();
        });
        it('function should have been called twice', function () {
          var foo = {
            bar: function () {
            }
          };
          spyOn(foo, 'bar');
          foo.bar();
          foo.bar();
          expect(foo.bar.calls.count()).toEqual(2);
        });
      });

      describe('z', function () {
        it('z should be ZZZ at end of word', function () {
          expect(zombieTranslator.englishToZombie('z')).toBe('ZZZ');
        });
        it('null should be null', function () {
          expect(null).toBeNull();
        });
        it("don't throw an exception", function () {
          expect(function () {
          }).not.toThrow();
        });
        it("don't throw an error", function () {
          expect(function () {
          }).not.toThrowError();
        });
      });

      describe('a', function () {
        it('a should be hra', function () {
          expect(zombieTranslator.englishToZombie('a')).toBe('hra');
        });
        it("throw an exception", function () {
          expect(function () {
            i++
          }).toThrow();
        });
        it("throw an error", function () {
          expect(function () {
            throw new Error
          }).toThrowError();
        });
        it("close to pi", function () {
          expect(3.14).toBeCloseTo(Math.PI, 2);
        });
      });

      describe('capitalization', function () {
        it('the first letter of a sentence should be capitalized', function () {
          expect(zombieTranslator.englishToZombie('. a')).toBe('. Hra');
          expect(zombieTranslator.englishToZombie('? a')).toBe('? Hra');
          expect(zombieTranslator.englishToZombie('! a')).toBe('! Hra');
        });
        it("E not to be close to PI", function () {
          expect(Math.E).not.toBeCloseTo(Math.PI, 1);
        });
        it("undefined var to be falsy", function () {
          var a;
          expect(a).toBeFalsy();
        });
        it("defined var to be truthy", function () {
          var a = 'foo';
          expect(a).toBeTruthy();
        });
      });
    });

    describe('englishToZombie full words', function () {
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

    describe('englishToZombie sentences', function () {
      it('The quick brown fox jumps over the lazy dog', function () {
        expect(zombieTranslator.englishToZombie('The quick brown fox jumps over the lazy dog'))
          .toBe('Thrr qrrrrRrrrRrck bRRrrrRrwn frrrRrx jrrrrRrmpSSS rrrRrvrrrh thrr lhrazy drrrRrg');
      });
      it('Lorem ipsum', function () {
        expect(zombieTranslator.englishToZombie('Lorem ipsum dolor sit amet. consectetur adipiscing elit'))
          .toBe('LrrrRrRRrrm rrRrpsrrrrRrm drrrRrlrrrRrrh srrRrt hramrrt. CrrrRrnsrrctrrtrrrrRrrh hradrrRrprrRrscrrRrng rrlrrRrt');
      });
    });
  });

  /*
   Zombie to English
   */
  describe('ZombieTranslator zombieToEnglish', function () {
    describe('zombieToEnglish single characters', function () {
      describe('e', function () {
        it('rr should be e', function () {
          expect(zombieTranslator.zombieToEnglish('rr')).toBe('e');
        });
      });

      describe('i', function () {
        it('rrRr should be i', function () {
          expect(zombieTranslator.zombieToEnglish('rrRr')).toBe('i');
        });
      });

      describe('o', function () {
        it('rrrRr should be o', function () {
          expect(zombieTranslator.zombieToEnglish('rrrRr')).toBe('o');
        });
      });

      describe('u', function () {
        it('rrrrRr should be u', function () {
          expect(zombieTranslator.zombieToEnglish('rrrrRr')).toBe('u');
        });
      });

      describe('r end', function () {
        it('rh at end of word should be r', function () {
          expect(zombieTranslator.zombieToEnglish('rh')).toBe('r');
        });

      });

      describe('r', function () {
        it('r should be RR in other cases', function () {
          expect(zombieTranslator.zombieToEnglish('RRx')).toBe('rx');
        });
      });

      describe('s', function () {
        it('SSS at end of word should be s', function () {
          expect(zombieTranslator.zombieToEnglish('SSS')).toBe('s');
        });
      });

      describe('z', function () {
        it('ZZZ at end of word should be z', function () {
          expect(zombieTranslator.zombieToEnglish('ZZZ')).toBe('z');
        });
      });

      describe('a', function () {
        it('hra should be a', function () {
          expect(zombieTranslator.zombieToEnglish('hra')).toBe('a');
        });
      });

      describe('capitalization', function () {
        it('the first letter of a sentence should be lowercase', function () {
          expect(zombieTranslator.zombieToEnglish('. Hra')).toBe('. a');
          expect(zombieTranslator.zombieToEnglish('? Hra')).toBe('? a');
          expect(zombieTranslator.zombieToEnglish('! Hra')).toBe('! a');
        });
      });
    });
    describe('zombieToEnglish full words', function () {
      it('JhraZhrahn should be JaZahn', function () {
        expect(zombieTranslator.zombieToEnglish('JhraZhrahn')).toBe('JaZahn');
      });
      it('prrtty should be petty', function () {
        expect(zombieTranslator.zombieToEnglish('prrtty')).toBe('petty');
      });
      it('pRRrrtty should be pretty', function () {
        expect(zombieTranslator.zombieToEnglish('pRRrrtty')).toBe('pretty');
      });
      it('bRRhrarrRrnSSS should be brains', function () {
        expect(zombieTranslator.zombieToEnglish('bRRhrarrRrnSSS')).toBe('brains');
      });
    });

    describe('englishToZombie sentences', function () {
      it('The quick brown fox jumps over the lazy dog', function () {
        expect(zombieTranslator.zombieToEnglish('Thrr qrrrrRrrrRrck bRRrrrRrwn frrrRrx jrrrrRrmpSSS rrrRrvrrrh thrr lhrazy drrrRrg'))
          .toBe('The quick brown fox jumps over the lazy dog');
      });
      it('Lorem ipsum', function () {
        expect(zombieTranslator.zombieToEnglish('LrrrRrRRrrm rrRrpsrrrrRrm drrrRrlrrrRrrh srrRrt hramrrt. CrrrRrnsrrctrrtrrrrRrrh hradrrRrprrRrscrrRrng rrlrrRrt'))
          .toBe('Lorem ipsum dolor sit amet. consectetur adipiscing elit');
      });
    });
  });

});
