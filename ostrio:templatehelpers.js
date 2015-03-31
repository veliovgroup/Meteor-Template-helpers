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

    if(_.isString(second) && second.indexOf('|') !== -1){
        var Things = second.split('|')
        var res = []
        for (var i = Things.length - 1; i >= 0; i--) {
            res.push(compare(operator, first, Things[i]));
        };

        return res.inArray(true);
    }else{
    
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

            case '||':
            case 'or':
                return (first || second);

            case 'nor':
                return !(first || second);

            case 'nand':
                return !(first && second);

            case 'xor':
                return ((first && !second) || (!first && second));

            case 'nxor':
                return !((first && !second) || (!first && second));
        }
    }
};

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