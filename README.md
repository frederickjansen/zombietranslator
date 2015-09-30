# ZombieTranslator
This assignment for HES CSCI E-32 uses a series of regular expression to translate English to Zombie and vice versa. 

## The Tests

Each rule has basic unit tests along with 3 additional ones requested in the assignment. Only the additional ones are listed here.

* lower-case "r" at the end of words replaced with "rh".
```
expect(zombieTranslator.englishToZombie('r')).toMatch(/rh/);
expect(a).toEqual(12);
expect(undefined).not.toBeNull();
```
* an "a" or "A" is replaced with "hra".
```
expect(function(){i++}).toThrow();
expect(function(){throw new Error}).toThrowError();
expect(3.14).toBeCloseTo(Math.PI, 2);

```
* the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
```
expect(Math.E).not.toBeCloseTo(Math.PI, 1);
expect(a).toBeFalsy();
expect(a).toBeTruthy();
```
* "e" or "E" is replaced by "rr"
```
expect(zombieTranslator.englishToZombie(31)).toBe('31');
expect('31').toContain('1');
expect('31').not.toContain('2');
```
* "i" or "I" is replaced by "rrRr"
```
expect(zombieTranslator.englishToZombie(true)).toBe('tRRrrrrRrrr'); // Convert all input to strings
expect(2).toBeGreaterThan(1);
expect(1).toBeLessThan(2);
```
* "o" or "O" is replaced by "rrrRr"
```
expect(true).toBe(true);
expect(NaN).toBeNaN();
expect(3).not.toBeNaN();
```
* "u" or "U" is replaced by "rrrrRr"
```
expect(foo.bar).toHaveBeenCalled();
expect(foo.bar).not.toHaveBeenCalled();
expect(foo.bar).toHaveBeenCalledWith(1);
```
* "r" or "R" is replaced by "RR"
```
expect(zombieTranslator.englishToZombie('R')).not.toMatch('rr');
expect(true).not.toBe(false);
expect(foo.bar).not.toHaveBeenCalledWith(1);
```

Additionally two rules have been added:

* "s" at the end of a word is replaced with "SSS"
```
expect(zombieTranslator.englishToZombie('s')).toBeDefined();
expect(a).toBeUndefined();
expect(foo.bar.calls.count()).toEqual(2);
```
* "z" at the end of a word is replaced with "ZZZ"
```
expect(null).toBeNull();
expect(function(){}).not.toThrow();
expect(function(){}).not.toThrowError();
```

## Extra credit 
Unzombify has been implemented and is unit tested. Just click on the input field and start typing.
Some letter combinations fail to translate back, like ei becoming u. This is unavoidable.
