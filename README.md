[![support](https://img.shields.io/badge/support-GitHub-white)](https://github.com/sponsors/dr-dimitru)
[![support](https://img.shields.io/badge/support-PayPal-white)](https://paypal.me/veliovgroup)
<a href="https://ostr.io/info/built-by-developers-for-developers?ref=github-templatehelpers-repo-top"><img src="https://ostr.io/apple-touch-icon-60x60.png" alt="ostr.io free for open source maintainers" height="20"></a>
<a href="https://meteor-files.com/?ref=github-templatehelpers-repo-top"><img src="https://meteor-files.com/apple-touch-icon-60x60.png" alt="meteor-files.com" height="20"></a>

# Meteor Template helpers

__Features:__

- 👨‍🔬 __100% tests coverage__;
- 💡 Lightweight - No external dependencies, all feature helpers has __only__ *weak* dependencies;
- ⚖️ Compare values with conditions - `{{#if compare one '===' two}} ... {{/if}}`;
- 🐒 Get/set Session (*weak dependency*) - `{{Session 'key' set='value'}}`, `{{#if Session 'key'}} ... {{/if}}`;
- 🔨 Use underscore's functions (*weak dependency*) - `{{#if _ 'isString' 'one'}} ... {{/if}}`;
- 👨‍💻 Debug/log passed objects as a string to template - `{{log this.someVal 'string' object="value"}}`.

## Install:

```shell
meteor add ostrio:templatehelpers
```

## Helpers

Use comparison, conditional, and logical operations right in the Blaze templates. Get access to `Session` object ans stored values. Execute `underscore` package methods. And debug Blaze templating data using `log` helper.

### Comparison helpers

Compare template data. Create conditional `if` and `unless` blocks.

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

Compare complex template data.

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

Compare single value against many (*any of.. match*).

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

### `log`

Template debugging - Log arguments into browser's console with output into template

```handlebars
{{log 'val' opt='val2' opt2=variable}}
```

Add `console=true` as an argument to log values into JS-console

```handlebars
{{log 'val' opt='val2' opt2=variable console=true}}
```

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

### Underscore (all methods)

Execute underscore methods in template

```handlebars
{{#if _ 'isString' 'one'}}
  ...
{{/if}}
```

## Running Tests

1. Clone this package
2. In Terminal (*Console*) go to directory where package is cloned
3. Then run:

### Meteor/Tinytest

```shell
# Default
meteor test-packages ./

# With custom port
meteor test-packages ./ --port 8888
```

- Upload and share files using [☄️ meteor-files.com](https://meteor-files.com/?ref=github-templatehelpers-repo-footer) — Continue interrupted file uploads without losing any progress. There is nothing that will stop Meteor from delivering your file to the desired destination
- Use [▲ ostr.io](https://ostr.io?ref=github-templatehelpers-repo-footer) for [Server Monitoring](https://snmp-monitoring.com), [Web Analytics](https://ostr.io/info/web-analytics?ref=github-templatehelpers-repo-footer), [WebSec](https://domain-protection.info), [Web-CRON](https://web-cron.info), and [SEO Pre-rendering](https://prerendering.com) of a website
- Star on [GitHub](https://github.com/veliovgroup/Meteor-Template-helpers)
- Star on [Atmosphere](https://atmospherejs.com/ostrio/templatehelpers)
- [Sponsor via GitHub](https://github.com/sponsors/dr-dimitru)
- [Support via PayPal](https://paypal.me/veliovgroup)
