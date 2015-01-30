Meteor Template helpers 
========
Add functionality to:
 - get/set Session - `{{Session 'key'}}`
 - compare values in conditions - `{{#if isEqual this.one this.two}}`
 - debug/log passed objects as a string to template - `{{log this.someVal 'string' object="value"}}`

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

#### `isEqual` & `isNotEqual`
Compare two values in template
```html
<!-- To compare if values is equal -->
{{isEqual 'one' 'one'}} <!-- true -->
{{isEqual 'one' 'two'}} <!-- false -->

<!-- To compare if values isn't equal -->
{{isNotEqual 'one' 'one'}} <!-- false -->
{{isNotEqual 'one' 'two'}} <!-- true -->
```