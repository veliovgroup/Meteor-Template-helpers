Meteor Template helpers 
========
Add functionality to:
 - get/set Session - `{{Session 'key'}}`
 - compare values in conditions - `{{#if isEqual this.one this.two}}`
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
{{gt 'one' 'two'}}
{{greaterThan 'one' 'two'}}

{{compare 'one' '>=' 'two'}}
{{gte 'one' 'two'}}
{{greaterThanEqual 'one' 'two'}}

{{compare 'one' '<' 'two'}}
{{lt 'one' 'two'}}
{{lessThan 'one' 'two'}}

{{compare 'one' '<=' 'two'}}
{{lte 'one' 'two'}}
{{lessThanEqual 'one' 'two'}}

{{compare 'one' '===' 'two'}}
{{is 'one' 'two'}}

{{compare 'one' '!==' 'two'}}
{{isnt 'one' 'two'}}

{{compare 'one' '==' 'two'}}
{{isEqual 'one' 'two'}}

{{compare 'one' '!=' 'two'}}
{{isNotEqual 'one' 'two'}}

```