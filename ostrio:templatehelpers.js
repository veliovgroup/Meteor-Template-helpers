/*jshint strict:false */
/*global Template:false */
/*global _:false */
/*global Session:false */
/*global console:false */

/*
 * @description Get or set session value from views via Session helper
 * @example
 * GET: {{Session 'key'}}
 * SET: {{Session 'key' set="new value"}}
 * SET Default: {{Session 'key' set="new value" action="setDefault"}}
 *
 */
Template.registerHelper('Session', function(key, adds) {
    var set, action;

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
            set = adds.hash.set || ' ';
        }
    }

    switch(action){
        case 'setDefault':
            Session.setDefault(key, set);
            return Session.get(key);

        case 'set':
            Session.set(key, set);
            return Session.get(key);

        case 'get':
        default:
            return Session.get(key);
    }
});


/*
 *
 * @description Debug helper console log
 * and return passed objects as a string
 *
 */
Template.registerHelper('log', function(key, adds) {
    console.log('arguments: ', arguments, 'this: ', this);
    return JSON.stringify(key, null, 2) + ' | ' + JSON.stringify(adds, null, 2);
});


/*
 *
 * @description Compare two values in template
 *
 */
var compare = function(operator, first, second){
    if(_.isObject(first) && _.isObject(second)){
        first = JSON.stringify(first);
        second = JSON.stringify(second);
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
    }
};

var compareOperators = [
    'gt', 'greaterThan',
    'gte', 'greaterThanEqual',
    'lt', 'lessThan',
    'lte', 'lessThanEqual',
    'is',
    'isnt',
    'isEqual',
    'isNotEqual'
];

var index, len;
for (index = 0, len = compareOperators.length; index < len; ++index) {
    Template.registerHelper(compareOperators[index], function() {
        return compare(compareOperators[index], arguments[0], arguments[1]);
    });
}

Template.registerHelper('compare', function() {
    return compare(arguments[1], arguments[0], arguments[2]);
});


/*
 *
 * @description Use underscore as a helper
 *
 */
Template.registerHelper('_', function() {
  var args, fn, self;
  args = _.toArray(arguments);
  self = this;
  fn = args[0];
  args.shift();
  args.pop();
  return _[fn].apply(self, args);
});