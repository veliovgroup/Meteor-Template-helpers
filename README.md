Meteor Template helpers 
========
Add functionality to:
 - get/set Session - `{{Session 'key' set='value'}}`, `{{#if Session 'key'}} ... {{/if}}`
 - compare values in conditions - `{{#if compare one '===' two}} ... {{/if}}`
 - use underscore's functions - `{{#if _ 'isString' 'one'}} ... {{/if}}`
 - debug/log passed objects as a string to template - `{{log this.someVal 'string' object="value"}}`

DEMO:
========
 - [Live](http://templatehelpers.meteor.com)
 - [Source](https://github.com/VeliovGroup/Meteor-Template-helpers/tree/master/demo)

Install:
========
```shell
meteor add ostrio:templatehelpers
```

#### `Session`
Get or set session value from views via Session helper
```html
<!-- To get value -->
{{Session 'key'}}

<!-- To set value -->
{{Session 'key' set="new value"}}

<!-- To set default value -->
{{Session 'key' set="new value" action="setDefault"}}
```

#### `log` aka debug
Log arguments into browser's console, and output into template
```html
{{log 'val' opt='val2' opt2=variable}}
```

#### Underscore (all functions)
Execute underscore functions in template
```html
{{#if _ 'isString' 'one'}}
  ...
{{/if}}
```

#### Compare functions
##### Compare two values in template
```html
{{compare 'one' '>' 'two'}}
{{compare 'one' 'gt' 'two'}}
{{compare 'one' 'greaterThan' 'two'}}

{{compare 'one' '>=' 'two'}}
{{compare 'one' 'gte' 'two'}}
{{compare 'one' 'greaterThanEqual' 'two'}}

{{compare 'one' '<' 'two'}}
{{compare 'one' 'lt' 'two'}}
{{compare 'one' 'lessThan' 'two'}}

{{compare 'one' '<=' 'two'}}
{{compare 'one' 'lte' 'two'}}
{{compare 'one' 'lessThanEqual' 'two'}}

{{compare 'one' '===' 'two'}}
{{compare 'one' 'is' 'two'}}

{{compare 'one' '!==' 'two'}}
{{compare 'one' 'isnt' 'two'}}

{{compare 'one' '==' 'two'}}
{{compare 'one' 'isEqual' 'two'}}

{{compare 'one' '!=' 'two'}}
{{compare 'one' 'isNotEqual' 'two'}}

{{compare 'one' '&&' 'two'}}
{{compare 'one' 'and' 'two'}}

{{compare 'one' '&!' 'two'}} <!-- (a && !b) -->
{{compare 'one' '!&' 'two'}} <!-- (!a && b) -->
{{compare 'one' '!&!' 'two'}} <!-- (!a && !b) -->
{{compare 'one' '!&&' 'two'}} <!-- !(a && b) -->
{{compare 'one' 'nand' 'two'}} <!-- !(a && b) -->

{{compare 'one' '||' 'two'}}
{{compare 'one' 'or' 'two'}}
<!-- Or statements returns real values -->
<!-- For example you have one falsy value and another not -->
<!-- Truthy value will be returned then (as in real JS-script) -->

{{compare 'one' '|!' 'two'}} <!-- (a || !b) -->
{{compare 'one' '!|' 'two'}} <!-- (!a || b) -->
{{compare 'one' '!|!' 'two'}} <!-- (!a || !b) -->
{{compare 'one' '!||' 'two'}} <!-- !(a || b) -->
{{compare 'one' 'nor' 'two'}} <!-- !(a || b) -->

{{compare 'one' 'xor' 'two'}} <!-- ((a && !b) || (!a && b)) -->
{{compare 'one' 'nxor' 'two'}} <!-- !((a && !b) || (!a && b)) -->
```
##### Compare many to many
```html
{{compare 1 '>' 2 '&&' 5 '<' 8}}
{{compare 1 '>' 2 '||' 5 '<' 8}}
{{compare first '||' second '||' third}}
{{compare first '&&' second '&&' third}}
{{compare first '&&' second '||' third}}
<!-- Any combinations will work, above just basic examples -->
```

##### Compare one value to many (any of.. match)
```html
{{compare 'one' '>' 'two|one|three|four|five'}}
{{compare 'one' '>=' 'two|one|three|four|five'}}
{{compare 'one' '<' 'two|one|three|four'}}
{{compare 'one' '<=' 'two|one|three'}}
{{compare 'one' '===' 'two|one'}}
{{compare 'one' '!==' 'two|one|three'}}
{{compare 'one' '==' 'two|one|three|four'}}
{{compare 'one' '!=' 'two|one|three|four'}}
{{compare 'one' '&&' 'two|one|three|four'}}
```