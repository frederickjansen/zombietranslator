define([], function () {
  function ZombieTranslator() {

  }

  ZombieTranslator.prototype.englishToZombie = function (str) {
    return str.replace(/(r\b|a|A|e|E|i|I|o|O|u|U|R)/ig, function (match, p1) {
      switch (p1) {
        case 'a':
          return 'hra';
        case 'A':
          return 'hra';
        case 'e':
          return 'rr';
        case 'E':
          return 'rr';
        case 'i':
          return 'rrRr';
        case 'I':
          return 'rrRr';
        case 'o':
          return 'rrrRr';
        case 'O':
          return 'rrrRr';
        case 'u':
          return 'rrrrRr';
        case 'U':
          return 'rrrrRr';
        case 'r':
          return 'RR';
        case 'R':
          return 'RR';
        default:
          return p1;
      }
    });
  };

  ZombieTranslator.prototype.zombieToEnglish = function (str) {

  };

  return ZombieTranslator;
});
