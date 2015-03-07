Meteor Template helpers 
========
Add functionality to:
 - get/set Session - `{{Session 'key'}}`
 - compare values in conditions - `{{#if this.one '===' this.two}}`
 - debug/log passed objects as a string to template - `{{log this.someVal 'string' object="value"}}`


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
Compare two values in template
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

{{compare 'one' '||' 'two'}}
{{compare 'one' 'or' 'two'}}

```