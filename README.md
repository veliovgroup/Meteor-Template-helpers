# Meteor Template helpers

__Features:__

  - 100% tests coverage
  - Lightweight - No external dependencies, all feature helpers has __only__ *weak* dependencies;
  - Compare values with conditions - `{{#if compare one '===' two}} ... {{/if}}`;
  - Get/set Session - `{{Session 'key' set='value'}}`, `{{#if Session 'key'}} ... {{/if}}`;
  - Use underscore's functions - `{{#if _ 'isString' 'one'}} ... {{/if}}`;
  - Debug/log passed objects as a string to template - `{{log this.someVal 'string' object="value"}}`.

## Install:

```shell
meteor add ostrio:templatehelpers
```

## Helpers

### `Session`

Get or set session value from views via Session helper

```handlebars
<!-- To get value -->
{{Session 'key'}}

<!-- To set value -->
{{Session 'key' set="new value"}}

<!-- To set default value -->
{{Session 'key' set="new value" action="setDefault"}}
```

### `log`

Template debugging - Log arguments into browser's console with output into template

```handlebars
{{log 'val' opt='val2' opt2=variable}}
```

### Underscore (all methods)

Execute underscore methods in template

```handlebars
{{#if _ 'isString' 'one'}}
  ...
{{/if}}
```

### Compare helpers

#### Compare two values in template

```handlebars
{{#if compare 'one' '>' 'two'}}
  <!-- ... -->
{{/if}}
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

#### Compare many to many

```handlebars
{{#if compare 1 '>' 2 '&&' 5 '<' 8}}
  <!-- ... -->
{{/if}}
{{compare 1 '>' 2 '||' 5 '<' 8}}
{{compare first '||' second '||' third}}
{{compare first '&&' second '&&' third}}
{{compare first '&&' second '||' third}}
<!-- Any combinations will work, above just basic examples -->
```

#### Compare one value to many (any of.. match)

```handlebars
{{#if compare 'one' '>' 'two|one|three|four|five'}}
  <!-- ... -->
{{/if}}
{{compare 'one' '>=' 'two|one|three|four|five'}}
{{compare 'one' '<' 'two|one|three|four'}}
{{compare 'one' '<=' 'two|one|three'}}
{{compare 'one' '===' 'two|one'}}
{{compare 'one' '!==' 'two|one|three'}}
{{compare 'one' '==' 'two|one|three|four'}}
{{compare 'one' '!=' 'two|one|three|four'}}
{{compare 'one' '&&' 'two|one|three|four'}}
```

### Support this project:

This project wouldn't be possible without [ostr.io](https://ostr.io).

Using [ostr.io](https://ostr.io) you are not only [protecting domain names](https://ostr.io/info/domain-names-protection), [monitoring websites and servers](https://ostr.io/info/monitoring), using [Prerendering for better SEO](https://ostr.io/info/prerendering) of your JavaScript website, but support our Open Source activity, and great packages like this one could be available for free.
