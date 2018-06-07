import { Meteor }          from 'meteor/meteor';
import { templatehelpers } from 'meteor/ostrio:templatehelpers';

if (Meteor.isServer) {
  return;
}

Tinytest.add('compare - gt', test => {
  test.equal(templatehelpers.compare(2, 'gt', 3), (2 > 3)); // Number
  test.equal(templatehelpers.compare(true, 'gt', false), (true > false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'gt', 'dsa'), ('asd' > 'dsa')); // String
});

Tinytest.add('compare - greaterThan', test => {
  test.equal(templatehelpers.compare(2, 'greaterThan', 3), (2 > 3)); // Number
  test.equal(templatehelpers.compare(true, 'greaterThan', false), (true > false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'greaterThan', 'dsa'), ('asd' > 'dsa')); // String
});

Tinytest.add('compare - >=', test => {
  test.equal(templatehelpers.compare(2, '>=', 3), (2 >= 3)); // Number
  test.equal(templatehelpers.compare(true, '>=', false), (true >= false)); // Boolean
  test.equal(templatehelpers.compare('asd', '>=', 'dsa'), ('asd' >= 'dsa')); // String
});

Tinytest.add('compare - gte', test => {
  test.equal(templatehelpers.compare(2, 'gte', 3), (2 >= 3)); // Number
  test.equal(templatehelpers.compare(true, 'gte', false), (true >= false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'gte', 'dsa'), ('asd' >= 'dsa')); // String
});

Tinytest.add('compare - greaterThanEqual', test => {
  test.equal(templatehelpers.compare(2, 'greaterThanEqual', 3), (2 >= 3)); // Number
  test.equal(templatehelpers.compare(true, 'greaterThanEqual', false), (true >= false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'greaterThanEqual', 'dsa'), ('asd' >= 'dsa')); // String
});

Tinytest.add('compare - <', test => {
  test.equal(templatehelpers.compare(2, '<', 3), (2 < 3)); // Number
  test.equal(templatehelpers.compare(true, '<', false), (true < false)); // Boolean
  test.equal(templatehelpers.compare('asd', '<', 'dsa'), ('asd' < 'dsa')); // String
});

Tinytest.add('compare - lt', test => {
  test.equal(templatehelpers.compare(2, 'lt', 3), (2 < 3)); // Number
  test.equal(templatehelpers.compare(true, 'lt', false), (true < false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'lt', 'dsa'), ('asd' < 'dsa')); // String
});

Tinytest.add('compare - lessThan', test => {
  test.equal(templatehelpers.compare(2, 'lessThan', 3), (2 < 3)); // Number
  test.equal(templatehelpers.compare(true, 'lessThan', false), (true < false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'lessThan', 'dsa'), ('asd' < 'dsa')); // String
});

Tinytest.add('compare - <=', test => {
  test.equal(templatehelpers.compare(2, '<=', 3), (2 <= 3)); // Number
  test.equal(templatehelpers.compare(true, '<=', false), (true <= false)); // Boolean
  test.equal(templatehelpers.compare('asd', '<=', 'dsa'), ('asd' <= 'dsa')); // String
});

Tinytest.add('compare - lte', test => {
  test.equal(templatehelpers.compare(2, 'lte', 3), (2 <= 3)); // Number
  test.equal(templatehelpers.compare(true, 'lte', false), (true <= false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'lte', 'dsa'), ('asd' <= 'dsa')); // String
});

Tinytest.add('compare - lessThanEqual', test => {
  test.equal(templatehelpers.compare(2, 'lessThanEqual', 3), (2 <= 3)); // Number
  test.equal(templatehelpers.compare(true, 'lessThanEqual', false), (true <= false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'lessThanEqual', 'dsa'), ('asd' <= 'dsa')); // String
});

Tinytest.add('compare - ===', test => {
  test.equal(templatehelpers.compare(2, '===', 3), (2 === 3)); // Number
  test.equal(templatehelpers.compare(true, '===', false), (true === false)); // Boolean
  test.equal(templatehelpers.compare('asd', '===', 'dsa'), ('asd' === 'dsa')); // String
});

Tinytest.add('compare - is', test => {
  test.equal(templatehelpers.compare(2, 'is', 3), (2 === 3)); // Number
  test.equal(templatehelpers.compare(true, 'is', false), (true === false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'is', 'dsa'), ('asd' === 'dsa')); // String
});

Tinytest.add('compare - !==', test => {
  test.equal(templatehelpers.compare(2, '!==', 3), (2 !== 3)); // Number
  test.equal(templatehelpers.compare(true, '!==', false), (true !== false)); // Boolean
  test.equal(templatehelpers.compare('asd', '!==', 'dsa'), ('asd' !== 'dsa')); // String
});

Tinytest.add('compare - isnt', test => {
  test.equal(templatehelpers.compare(2, 'isnt', 3), (2 !== 3)); // Number
  test.equal(templatehelpers.compare(true, 'isnt', false), (true !== false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'isnt', 'dsa'), ('asd' !== 'dsa')); // String
});

Tinytest.add('compare - ==', test => {
  test.equal(templatehelpers.compare(2, '==', 3), (2 == 3)); // Number
  test.equal(templatehelpers.compare(true, '==', false), (true == false)); // Boolean
  test.equal(templatehelpers.compare('asd', '==', 'dsa'), ('asd' == 'dsa')); // String
});

Tinytest.add('compare - isEqual', test => {
  test.equal(templatehelpers.compare(2, 'isEqual', 3), (2 == 3)); // Number
  test.equal(templatehelpers.compare(true, 'isEqual', false), (true == false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'isEqual', 'dsa'), ('asd' == 'dsa')); // String
});

Tinytest.add('compare - !=', test => {
  test.equal(templatehelpers.compare(2, '!=', 3), (2 != 3)); // Number
  test.equal(templatehelpers.compare(true, '!=', false), (true != false)); // Boolean
  test.equal(templatehelpers.compare('asd', '!=', 'dsa'), ('asd' != 'dsa')); // String
});

Tinytest.add('compare - isNotEqual', test => {
  test.equal(templatehelpers.compare(2, 'isNotEqual', 3), (2 != 3)); // Number
  test.equal(templatehelpers.compare(true, 'isNotEqual', false), (true != false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'isNotEqual', 'dsa'), ('asd' != 'dsa')); // String
});

Tinytest.add('compare - &&', test => {
  test.equal(templatehelpers.compare(2, '&&', 3), (2 && 3)); // Number
  test.equal(templatehelpers.compare(true, '&&', false), (true && false)); // Boolean
  test.equal(templatehelpers.compare('asd', '&&', 'dsa'), ('asd' && 'dsa')); // String
});

Tinytest.add('compare - and', test => {
  test.equal(templatehelpers.compare(2, 'and', 3), (2 && 3)); // Number
  test.equal(templatehelpers.compare(true, 'and', false), (true && false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'and', 'dsa'), ('asd' && 'dsa')); // String
});

Tinytest.add('compare - &!', test => {
  test.equal(templatehelpers.compare(2, '&!', 3), (2 && !3)); // (a && !b) // Number
  test.equal(templatehelpers.compare(true, '&!', false), (true && !false)); // (a && !b) // Boolean
  test.equal(templatehelpers.compare('asd', '&!', 'dsa'), ('asd' && !'dsa')); // (a && !b) // String
});

Tinytest.add('compare - !&', test => {
  test.equal(templatehelpers.compare(2, '!&', 3), (!2 && 3)); //(!a && b) // Number
  test.equal(templatehelpers.compare(true, '!&', false), (!true && false)); //(!a && b) // Boolean
  test.equal(templatehelpers.compare('asd', '!&', 'dsa'), (!'asd' && 'dsa')); //(!a && b) // String
});

Tinytest.add('compare - !&!', test => {
  test.equal(templatehelpers.compare(2, '!&!', 3), (!2 && !3)); //(!a && !b) // Number
  test.equal(templatehelpers.compare(true, '!&!', false), (!true && !false)); //(!a && !b) // Boolean
  test.equal(templatehelpers.compare('asd', '!&!', 'dsa'), (!'asd' && !'dsa')); //(!a && !b) // String
});

Tinytest.add('compare - !&&', test => {
  test.equal(templatehelpers.compare(2, '!&&', 3), !(2 && 3)); // !(a && b) // Number
  test.equal(templatehelpers.compare(true, '!&&', false), !(true && false)); // !(a && b) // Boolean
  test.equal(templatehelpers.compare('asd', '!&&', 'dsa'), !('asd' && 'dsa')); // !(a && b) // String
});

Tinytest.add('compare - nand', test => {
  test.equal(templatehelpers.compare(2, 'nand', 3), !(2 && 3)); // !(a && b) // Number
  test.equal(templatehelpers.compare(true, 'nand', false), !(true && false)); // !(a && b) // Boolean
  test.equal(templatehelpers.compare('asd', 'nand', 'dsa'), !('asd' && 'dsa')); // !(a && b) // String
});

Tinytest.add('compare - ||', test => {
  test.equal(templatehelpers.compare(2, '||', 3), (2 || 3)); // Number
  test.equal(templatehelpers.compare(true, '||', false), (true || false)); // Boolean
  test.equal(templatehelpers.compare('asd', '||', 'dsa'), ('asd' || 'dsa')); // String
});

Tinytest.add('compare - or', test => {
  test.equal(templatehelpers.compare(2, 'or', 3), (2 || 3)); // Number
  test.equal(templatehelpers.compare(true, 'or', false), (true || false)); // Boolean
  test.equal(templatehelpers.compare('asd', 'or', 'dsa'), ('asd' || 'dsa')); // String
});

Tinytest.add('compare - |!', test => {
  test.equal(templatehelpers.compare(2, '|!', 3), (2 || !3)); // (a || !b) // Number
  test.equal(templatehelpers.compare(true, '|!', false), (true || !false)); // (a || !b) // Boolean
  test.equal(templatehelpers.compare('asd', '|!', 'dsa'), ('asd' || !'dsa')); // (a || !b) // String
});

Tinytest.add('compare - !|', test => {
  test.equal(templatehelpers.compare(2, '!|', 3), (!2 || 3)); // (!a || b) // Number
  test.equal(templatehelpers.compare(true, '!|', false), (!true || false)); // (!a || b) // Boolean
  test.equal(templatehelpers.compare('asd', '!|', 'dsa'), (!'asd' || 'dsa')); // (!a || b) // String
});

Tinytest.add('compare - !|!', test => {
  test.equal(templatehelpers.compare(2, '!|!', 3), (!2 || !3)); // (!a || !b) // Number
  test.equal(templatehelpers.compare(true, '!|!', false), (!true || !false)); // (!a || !b) // Boolean
  test.equal(templatehelpers.compare('asd', '!|!', 'dsa'), (!'asd' || !'dsa')); // (!a || !b) // String
});

Tinytest.add('compare - !||', test => {
  test.equal(templatehelpers.compare(2, '!||', 3), !(2 || 3)); // !(a || b) // Number
  test.equal(templatehelpers.compare(true, '!||', false), !(true || false)); // !(a || b) // Boolean
  test.equal(templatehelpers.compare('asd', '!||', 'dsa'), !('asd' || 'dsa')); // !(a || b) // String
});

Tinytest.add('compare - nor', test => {
  test.equal(templatehelpers.compare(2, 'nor', 3), !(2 || 3)); // !(a || b) // Number
  test.equal(templatehelpers.compare(true, 'nor', false), !(true || false)); // !(a || b) // Boolean
  test.equal(templatehelpers.compare('asd', 'nor', 'dsa'), !('asd' || 'dsa')); // !(a || b) // String
});

Tinytest.add('compare - xor', test => {
  test.equal(templatehelpers.compare(2, 'xor', 3), ((2 && !3) || (!2 && 3))); // ((a && !b) || (!a && b)) // Number
  test.equal(templatehelpers.compare(true, 'xor', false), ((true && !false) || (!true && false))); // ((a && !b) || (!a && b)) // Boolean
  test.equal(templatehelpers.compare('asd', 'xor', 'dsa'), (('asd' && !'dsa') || (!'asd' && 'dsa'))); // ((a && !b) || (!a && b)) // String
});

Tinytest.add('compare - nxor', test => {
  test.equal(templatehelpers.compare(2, 'nxor', 3), !((2 && !3) || (!2 && 3))); // !((a && !b) || (!a && b)) // Number
  test.equal(templatehelpers.compare(true, 'nxor', false), !((true && !false) || (!true && false))); // !((a && !b) || (!a && b)) // Boolean
  test.equal(templatehelpers.compare('asd', 'nxor', 'dsa'), !(('asd' && !'dsa') || (!'asd' && 'dsa'))); // !((a && !b) || (!a && b)) // String
});

Tinytest.add('compare - many to many', test => {
  test.equal(templatehelpers.compare(1, '>', 2, '||', 5, '<', 8), (1 > 2 || 5 < 8), '1 > 2 || 5 < 8');
  test.equal(templatehelpers.compare(false, '||', 0, '||', 'string', '||', 1), (false || 0 || 'string' || 1), "false || 0 || 'string' || 1");
  test.equal(templatehelpers.compare(true, '||', false, '||', 'asd'), (true || false || 'asd'), "true || false || 'asd'");
  test.equal(templatehelpers.compare('asd', '&&', false, '&&', 3), ('asd' && false && 3), "'asd' && false && 3");
  test.equal(templatehelpers.compare('dsa', '&&', 2, '||', true), ('dsa' && 2 || true), "'dsa' && 2 || true");
  test.equal(templatehelpers.compare(1, '<', 0, '<', -1), (1 < 0 < -1), '1 < 0 < -1');
  test.equal(templatehelpers.compare(1, '>', 0, '>', -1), (1 > 0 > -1), '1 > 0 > -1');
  test.equal(templatehelpers.compare(1, '<', 0, '>', -1), (1 < 0 > -1), '1 < 0 > -1');
  test.equal(templatehelpers.compare(1, '>', 0, '<', -1), (1 > 0 < -1), '1 > 0 < -1');
  test.equal(templatehelpers.compare(4, 'gte', 1, '&&', 4, 'lte', 6), (4 >= 1 && 4 <= 6), '4 >= 1 && 4 <= 6');
  test.equal(templatehelpers.compare(4, 'gte', 7, '&&', 4, 'lte', 8), (4 >= 7 && 4 <= 8), '4 >= 7 && 4 <= 8');
  test.equal(templatehelpers.compare(4, 'gte', 9, '&&', 4, 'lte', 10), (4 >= 9 && 4 <= 10), '4 >= 9 && 4 <= 10');
  test.equal(templatehelpers.compare(4, 'gte', 9, '&&', 4, 'lte', 10, '&&', false), (4 >= 9 && 4 <= 10 && false), 4 >= 9 && 4 <= 10 && false);
  test.equal(templatehelpers.compare(4, 'gte', 9, '&&', 4, 'lte', 10, '&&', 40, '>', 30, '&&', true), (4 >= 9 && 4 <= 10 && 40 > 30 && true), '4 >= 9 && 4 <= 10 && 40 > 30 && true');
  test.equal(templatehelpers.compare(4, 'gte', 9, '&!', 4, 'lte', 10, '&&', 40, '>', 30, '&&', true), (4 >= 9 && !(4 <= 10) && 40 > 30 && true), '4 >= 9 &! 4 <= 10 && 40 > 30 && true');
});

Tinytest.add('compare - one to many', test => {
  test.isTrue(templatehelpers.compare(1, '>', '0|-1|-2'), "1, '>', '0|-1|-2'");
  test.isFalse(templatehelpers.compare(1, '>', '2|3|4'), "1, '>', '2|3|4'");

  test.isTrue(templatehelpers.compare(1, '>=', '2|3|1|0'), "1, '>=', '2|3|1|0'");
  test.isTrue(templatehelpers.compare(1, '<=', '2|3|1|0'), "1, '<=', '2|3|1|0'");
  test.isFalse(templatehelpers.compare(1, '===', '2|3|-1|0'), "1, '===', '2|3|-1|0'");
  test.isFalse(templatehelpers.compare(1, '===', '1|3|-1|0'), "1, '===', '1|3|-1|0'");
  test.isTrue(templatehelpers.compare(1, '==', '1|3|-1|0'), "1, '==', '1|3|-1|0'");

  test.isTrue(templatehelpers.compare('class', '==', 'one|two|class|three'), "'class', '==', 'one|two|class|three'");
  test.isFalse(templatehelpers.compare('class', '==', 'one|two|four|three'), "'class', '==', 'one|two|four|three'");

  test.equal(templatehelpers.compare('class', '||', 'one|two|four|three'), 'class', "'class', '||', 'one|two|four|three'");
  test.equal(templatehelpers.compare(null, '||', 'one|two|four|three'), 'three', "null, '||', 'one|two|four|three'");
});

Tinytest.add('underscore - Arrays', test => {
  test.equal(templatehelpers.underscore('first', ['a', 'b', 'c', 'd']), 'a', 'first');
  test.equal(templatehelpers.underscore('initial', ['a', 'b', 'c', 'd']), ['a', 'b', 'c'], 'initial');
  test.equal(templatehelpers.underscore('last', ['a', 'b', 'c', 'd']), 'd', 'last');
  test.equal(templatehelpers.underscore('without', ['a', 'b', 'c', 'd'], 'b', 'd'), ['a', 'c'], 'without');
  test.equal(templatehelpers.underscore('union', ['a', 'b'], ['c', 'd'], ['b', 'd'], ['e', 'g']), ['a', 'b', 'c', 'd', 'e', 'g'], 'union');
});

Tinytest.add('underscore - Collections', test => {
  test.equal(templatehelpers.underscore('max', [50, 20, 30, 600]), 600, 'max');
  test.equal(templatehelpers.underscore('min', [40, 60, 70, 600]), 40, 'min');
});

Tinytest.add('Session - Set Default', test => {
  test.equal(templatehelpers.session('defaultKey', {
    hash: {
      set: 'defaultVal',
      action: 'setDefault'
    }
  }), void 0);
});

Tinytest.add('Session - Set', test => {
  test.equal(templatehelpers.session('Keyrr', {
    hash: {
      set: 'Valuerr'
    }
  }), void 0);
});

Tinytest.add('Session - Get', test => {
  test.equal(templatehelpers.session('Keyrr'), 'Valuerr');
  test.equal(templatehelpers.session('defaultKey'), 'defaultVal');
});
