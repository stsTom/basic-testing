import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 2,  b: 3,  action: Action.Add,          expected: 5    },
  { a: -1, b: 1,  action: Action.Add,          expected: 0    },
  { a: -4, b: -6, action: Action.Add,          expected: -10  },
  { a: 10, b: 4,  action: Action.Subtract,     expected: 6    },
  { a: 3,  b: 7,  action: Action.Subtract,     expected: -4   },
  { a: -5, b: -3, action: Action.Subtract,     expected: -2   },
  { a: 3,  b: 4,  action: Action.Multiply,     expected: 12   },
  { a: 99, b: 0,  action: Action.Multiply,     expected: 0    },
  { a: -3, b: -4, action: Action.Multiply,     expected: 12   },
  { a: 10, b: 2,  action: Action.Divide,       expected: 5    },
  { a: 7,  b: 2,  action: Action.Divide,       expected: 3.5  },
  { a: 9,  b: -3, action: Action.Divide,       expected: -3   },
  { a: 2,  b: 10, action: Action.Exponentiate, expected: 1024 },
  { a: 5,  b: 0,  action: Action.Exponentiate, expected: 1    },
  { a: 2,  b: -2, action: Action.Exponentiate, expected: 0.25 },
];

const invalidCases = [
  { a: 1,         b: 2,         action: 'invalid',  description: 'unknown action string' },
  { a: 1,         b: 2,         action: null,        description: 'null action'           },
  { a: '5',       b: 2,         action: Action.Add,  description: 'string a'              },
  { a: 5,         b: null,      action: Action.Add,  description: 'null b'                },
  { a: undefined, b: undefined, action: Action.Add,  description: 'undefined args'        },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected for $a $action $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each(invalidCases)(
    'should return null for $description',
    ({ a, b, action }) => {
      expect(simpleCalculator({ a, b, action })).toBeNull();
    },
  );
});