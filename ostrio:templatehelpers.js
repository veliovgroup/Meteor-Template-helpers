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
    console.log(arguments, this);
    return JSON.stringify(key, null, 2) + ' | ' + JSON.stringify(adds, null, 2);
});


/*
 *
 * @description Compare two values in template
 *
 */
Template.registerHelper('isEqual', function(key, adds, trueOutput) {
    trueOutput = (_.isString(trueOutput)) ? trueOutput : false;
    if(_.isObject(key) && _.isObject(adds)){
        if(JSON.stringify(key) === JSON.stringify(adds)){
            return (trueOutput) ? trueOutput : true;
        }
    }else{
        if(key === adds){
            return (trueOutput) ? trueOutput : true;
        }
    }

    return (trueOutput) ? null : false;
});


/*
 *
 * @description Compare two values in template
 *
 */
Template.registerHelper('isNotEqual', function(key, adds, falseOutput) {
    falseOutput = (_.isString(falseOutput)) ? falseOutput : false;
    if(_.isObject(key) && _.isObject(adds)){
        if(JSON.stringify(key) === JSON.stringify(adds)){
            return (falseOutput) ? falseOutput : false;
        }
    }else{
        if(key === adds){
            return (falseOutput) ? falseOutput : false;
        }
    }
    return (falseOutput) ? null : true;
});