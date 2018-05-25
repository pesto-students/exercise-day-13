const {
  join,
  last,
  line,
  lastIndexOf,
  meanMode,
} = require('./');

describe('1 join', () => {
  it("concatenates a list's elements to a string, with an separator string between elements", () => {
    const list = [1, 2, 3, 4];
    expect(join('~', list)).toBe('1~2~3~4');
  });
});

describe('2 last', () => {
  it('returns the last element of an ordered collection', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([1, 2])).toBe(2);
    expect(last([1])).toBe(1);
    expect(last([])).toBe(undefined);

    expect(last('abc')).toBe('c');
    expect(last('ab')).toBe('b');
    expect(last('a')).toBe('a');
    expect(last('')).toBe('');
  });

  it('throws if applied to null or undefined', () => {
    expect(() => { last(null); }).toThrow();
    expect(() => { last(undefined); }).toThrow();
  });
});

describe('3 line', () => {
  test('should correctly determine if 3 points are in straight line', () => {
    expect(line([[0, 0], [1, 1], [2, 2]])).toBe(true);
    expect(line([[0, 0], [0, 1], [1, 0]])).toBe(false);
    expect(line([[10, 5], [10, 50], [10, 500]])).toBe(true);
    expect(line([[8, 10.4], [-3, 6], [12, 12]])).toBe(true);
    expect(line([[20, 80], [4, 9], [-6, -35]])).toBe(false);
  });
});

describe('4 lastIndexOf', () => {
  it("returns a number indicating an object's last position in a list", () => {
    const list = [0, 10, 20, 30, 0, 10, 20, 30, 0, 10];
    expect(lastIndexOf(30, list)).toBe(7);
  });
  it('returns -1 if the object is not in the list', () => {
    const list = [0, 10, 20, 30];
    expect(lastIndexOf(40, list)).toBe(-1);
  });

  const input = [1, 2, 3, 4, 5, 1];
  it('returns the last index of the first item', () => {
    expect(lastIndexOf(1, input)).toBe(5);
  });
  it('returns the index of the last item', () => {
    expect(lastIndexOf(5, input)).toBe(4);
  });

  const list = ['a', 1, 'a'];
  list[-2] = 'a'; // Throw a wrench in the gears by assigning a non-valid array index as object property.

  it('finds a', () => {
    expect(lastIndexOf('a', list)).toBe(2);
  });
  it('does not find c', () => {
    expect(lastIndexOf('c', list)).toBe(-1);
  });
  it('does not consider "1" equal to 1', () => {
    expect(lastIndexOf('1', list)).toBe(-1);
  });
  it('returns -1 for an empty array', () => {
    expect(lastIndexOf('x', [])).toBe(-1);
  });

  it('finds function, compared by identity', () => {
    const f = () => {};
    const g = () => {};
    const list1 = [g, f, g, f];
    expect(lastIndexOf(f, list1)).toBe(3);
  });

  it('does not find function, compared by identity', () => {
    const f = () => {};
    const g = () => {};
    const h = () => {};
    const list2 = [g, f];
    expect(lastIndexOf(h, list2)).toBe(-1);
  });
});

describe('5 Mean == Mode', () => {
  test('should check correctly whether mean equals mode', () => {
    expect(meanMode([5])).toBe(true);
    expect(meanMode([1, 5, 9, 5])).toBe(true);
    expect(meanMode([15, 5, 10])).toBe(false);
    expect(meanMode([10, 15, 5, 10, 10])).toBe(true);
    expect(meanMode([6, 3, 9, 6])).toBe(true);
    expect(meanMode([6, 3, 9, 3, 9, 6])).toBe(false);
  });
});

