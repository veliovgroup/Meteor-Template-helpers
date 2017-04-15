import { _ }         from 'meteor/underscore';
import { Meteor }    from 'meteor/meteor';
import { Template }  from 'meteor/templating';
import { Spacebars } from 'meteor/spacebars';

let Session = false;
try {
  Session = require('meteor/session');
} catch (e) {
  // session package is not installed
}

class TemplateHelpers {
  constructor() {}
  session(key, adds) {
    let set;
    let action;
    if (!Session) {
      throw new Meteor.Error(404, '"session" package is missing, install it first: "meteor add session"');
    }

    if(_.isUndefined(adds)){
      action = 'get';
    }

    if(_.isString(adds)){
      action = 'get';
    }

    if(_.isObject(adds)){
      action = 'get';
      if(_.has(adds.hash, 'set')){
        action = (_.has(adds.hash, 'action')) ? adds.hash.action : 'set';
        set = adds.hash.set || undefined;
      }
    }

    switch(action){
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
    if (args[args.length - 1] instanceof Spacebars.kw) {
      args.pop();
    }
    let res = [];
    let operator;
    if(args.length > 3){
      let andy = true;
      let currentState = args[0];
      for (let i = 0; i < args.length - 1; ) {
        operator = args[++i];
        if(!!~['or', '||', '!|', '|!', '!|!', 'nor', 'xor', 'nxor', '!||'].indexOf(operator)){
          andy = false;
        }

        if(!!~['and', '&&', '!&', '&!', '!&!', 'nand', '!&&'].indexOf(operator)){
          res = [!!~res.indexOf(true)];
          if(args.length > i + 2){
            currentState = args[++i];
            operator = args[++i];
          }
        }
        res.push(!!templatehelpers.compare(currentState, operator, args[++i]));
        currentState = args[i];
      }
      if(andy){
        return !~res.indexOf(false) && !~res.indexOf(undefined) && !~res.indexOf(null);
      }
      return !!~res.indexOf(true);
    }

    let first = args[0];
    let second = args[2];
    operator = args[1];
    if(_.isObject(first) && _.isObject(second)){
      first = JSON.stringify(first);
      second = JSON.stringify(second);
    }

    if(_.isString(second) && second.includes('|')){
      const inclusive = second.split('|');
      for (let j = inclusive.length - 1; j >= 0; j--) {
        res.push(templatehelpers.compare(first, operator, inclusive[j]));
      }

      return !!~res.indexOf(true);
    }

    switch (operator){
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
    if(args.length){
      if (args[args.length - 1] instanceof Spacebars.kw) {
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
export { templatehelpers };

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
