import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

const andOperators = ['&&', 'and', '&!', '!&', '!&!', '!&&', 'nand'];
const logicalOperators = andOperators.concat(['||', 'or', '!|', '|!', '!|!', '!||', 'nor', 'xor', 'nxor']);
let Session = false;
let _ = false;

try {
  Session = require('meteor/session').Session;
} catch (_e) {
  // session package is not installed
}

try {
  _ = require('meteor/underscore')._;
} catch (_e) {
  // underscore package is not installed
}

class TemplateHelpers {
  _toString(obj) {
    return Object.prototype.toString.call(obj);
  }

  _isString(obj) {
    return this._toString(obj) === '[object String]';
  }

  _isObject(obj) {
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

  _isUndefined(obj) {
    return obj === void 0;
  }

  _hasOwn(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  _hasHash(obj) {
    return this._isObject(obj) && this._hasOwn(obj, 'hash');
  }

  _isLogicalOperator(operator) {
    return !!~logicalOperators.indexOf(operator);
  }

  _isAndOperator(operator) {
    return !!~andOperators.indexOf(operator);
  }

  _stripHashArg(args) {
    if (args.length && this._hasHash(args[args.length - 1])) {
      args.pop();
    }
    return args;
  }

  _evaluateComparisonGroups(args) {
    const grouped = [];

    for (let i = 0; i < args.length; ) {
      let value = args[i];

      while (i + 2 < args.length && !this._isLogicalOperator(args[i + 1])) {
        value = this.compare(value, args[i + 1], args[i + 2]);
        i += 2;
      }

      grouped.push(value);

      if (i + 1 < args.length) {
        grouped.push(args[i + 1]);
      }

      i += 2;
    }

    return grouped;
  }

  _evaluateOperators(args, isOperator) {
    const res = [args[0]];

    for (let i = 1; i < args.length; i += 2) {
      const operator = args[i];
      const second = args[i + 1];

      if (isOperator.call(this, operator)) {
        res.push(this.compare(res.pop(), operator, second));
      } else {
        res.push(operator, second);
      }
    }

    return res;
  }

  session(key, adds) {
    let set;
    let action;
    if (!Session) {
      throw new Meteor.Error(404, '"session" package is missing, install it first: "meteor add session"');
    }

    if (this._isUndefined(adds)) {
      action = 'get';
    }

    if (this._isString(adds)) {
      action = 'get';
    }

    if (this._isObject(adds)) {
      action = 'get';
      if (adds.hash && this._hasOwn(adds.hash, 'set')) {
        action = (adds.hash.action) ? adds.hash.action : 'set';
        set = adds.hash.set;
      }
    }

    switch (action) {
    case 'setDefault':
      Session.setDefault(key, set);
      return void 0;

    case 'set':
      Session.set(key, set);
      return void 0;

    default:
      return Session.get(key);
    }
  }

  log(...args) {
    const key = args.shift();
    let outputArgs = args;

    if (this._hasHash(args[args.length - 1]) && args[args.length - 1].hash.console === true) {
      outputArgs = args.slice();
      outputArgs[outputArgs.length - 1] = {
        ...outputArgs[outputArgs.length - 1],
        hash: {
          ...outputArgs[outputArgs.length - 1].hash
        }
      };
      delete outputArgs[outputArgs.length - 1].hash.console;
      console.debug('[ostrio:templatehelpers] [LOG]', key, ...outputArgs);
    }

    try {
      return `${JSON.stringify(key, null, 2)} | ${JSON.stringify(outputArgs, null, 2)}`;
    } catch (_e) {
      return `${key} | ${outputArgs}`;
    }
  }

  compare(...args) {
    args = this._stripHashArg(args);
    const res = [];

    if (args.length > 3) {
      const grouped = this._evaluateComparisonGroups(args);
      const andEvaluated = this._evaluateOperators(grouped, this._isAndOperator);
      const evaluated = this._evaluateOperators(andEvaluated, operator => true);

      return evaluated[evaluated.length - 1];
    }

    let first = args[0];
    let second = args[2];
    const operator = args[1];
    if (this._isObject(first) && this._isObject(second)) {
      first = JSON.stringify(first);
      second = JSON.stringify(second);
    }

    if (this._isString(second) && !!~second.indexOf('|')) {
      const inclusive = second.split('|');
      for (let j = 0; j < inclusive.length; j++) {
        res.push(this.compare(first, operator, inclusive[j]));
        if (res[res.length - 1] === true) {
          return true;
        }
      }

      return res[res.length - 1];
    }

    switch (operator) {
    case '>':
    case 'gt':
    case 'greaterThan':
      return (first > second);

    case '>=':
    case 'gte':
    case 'greaterThanEqual':
      return (first >= second);

    case '<':
    case 'lt':
    case 'lessThan':
      return (first < second);

    case '<=':
    case 'lte':
    case 'lessThanEqual':
      return (first <= second);

    case '===':
    case 'is':
      return (first === second);

    case '!==':
    case 'isnt':
      return (first !== second);

    case 'isEqual':
    case '==':
      return (first == second);

    case 'isNotEqual':
    case '!=':
      return (first != second);

    case '&&':
    case 'and':
      return (first && second);

    case '&!':
      return (first && !second);

    case '!&':
      return (!first && second);

    case '!&!':
      return (!first && !second);

    case '||':
    case 'or':
      return (first || second);

    case '!|':
      return (!first || second);

    case '|!':
      return (first || !second);

    case '!|!':
      return (!first || !second);

    case '!||':
    case 'nor':
      return !(first || second);

    case '!&&':
    case 'nand':
      return !(first && second);

    case 'xor':
      return ((first && !second) || (!first && second));

    case 'nxor':
      return !((first && !second) || (!first && second));

    default:
      console.error(`[ostrio:templatehelpers] [comparison operator: "${operator}" is not supported!]`);
      return false;
    }
  }

  underscore(...args) {
    if (!_) {
      throw new Meteor.Error(404, '"underscore" package is missing, install it first: "meteor add underscore"');
    }

    if (args.length) {
      args = this._stripHashArg(args);
      const fn = args[0];
      args.shift();
      return _[fn].apply(_, args);
    }
    return void 0;
  }
}

const templatehelpers = new TemplateHelpers();

/**
 * @description Get or set session value from views via Session helper
 * @example
 * GET: {{Session 'key'}}
 * SET: {{Session 'key' set="new value"}}
 * SET Default: {{Session 'key' set="new value" action="setDefault"}}
 */
if (Session) {
  Template.registerHelper('Session', templatehelpers.session.bind(templatehelpers));
}

/**
 * @description Debug helper console log
 * and return passed objects as a string
 */
Template.registerHelper('log', templatehelpers.log.bind(templatehelpers));

/**
 * @description Compare two or more arguments in template
 */
Template.registerHelper('compare', templatehelpers.compare.bind(templatehelpers));

/**
 * @description Use underscore as a helper
 */
if (_) {
  Template.registerHelper('_', templatehelpers.underscore.bind(templatehelpers));
}

export { templatehelpers };
