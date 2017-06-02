import { Meteor }   from 'meteor/meteor';
import { Template } from 'meteor/templating';

let Session = false;
try {
  Session = require('meteor/session').Session;
} catch (e) {
  // session package is not installed
}

let _ = false;
try {
  _ = require('meteor/underscore')._;
} catch (e) {
  // underscore package is not installed
}

class TemplateHelpers {
  constructor() {
    ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'].forEach((name) =>  {
      this['_is' + name] = (obj) => {
        return this._toString(obj) === `[object ${name}]`;
      };
    });
  }
  _toString(obj) {
    return Object.prototype.toString.call(obj);
  }
  _isObject(obj) {
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
  _isUndefined(obj) {
    return obj === void 0;
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
      if (adds.hash && adds.hash.set) {
        action = (adds.hash.action) ? adds.hash.action : 'set';
        set = adds.hash.set || undefined;
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
    console.log('arguments: ', args, 'this: ', this);
    const key = args.shift();
    try {
      return `${JSON.stringify(key, null, 2)} | ${JSON.stringify(args, null, 2)}`;
    } catch (e) {
      return `${key} | ${args}`;
    }
  }

  compare(...args) {
    if (args[args.length - 1] && this._isObject(args[args.length - 1]) && args[args.length - 1].hasOwnProperty('hash')) {
      args.pop();
    }

    const res = [];
    if (args.length > 3) {
      res.push(args[0]);
      for (let i = 0; i < args.length - 1; ) {
        res.push(templatehelpers.compare(res[res.length - 1], args[++i], args[++i]));
      }
      return res[res.length - 1];
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
        res.push(templatehelpers.compare(first, operator, inclusive[j]));
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
      if (this._isObject(args[args.length - 1]) && args[args.length - 1].hasOwnProperty('hash')) {
        args.pop();
      }
      const fn = args[0];
      args.shift();
      return _[fn].apply(_, args);
    }
    return void 0;
  }
}

const templatehelpers = new TemplateHelpers();

/*
 * @description Get or set session value from views via Session helper
 * @example
 * GET: {{Session 'key'}}
 * SET: {{Session 'key' set="new value"}}
 * SET Default: {{Session 'key' set="new value" action="setDefault"}}
 */
Template.registerHelper('Session', templatehelpers.session);

/*
 * @description Debug helper console log
 * and return passed objects as a string
 */
Template.registerHelper('log', templatehelpers.log);

/*
 * @description Compare two or more arguments in template
 */
Template.registerHelper('compare', templatehelpers.compare);

/*
 * @description Use underscore as a helper
 */
Template.registerHelper('_', templatehelpers.underscore);

export { templatehelpers };
