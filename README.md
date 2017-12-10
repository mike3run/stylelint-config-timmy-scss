# stylelint-config-timmy-scss

![Deps](https://david-dm.org/mike3run/stylelint-config-timmy-scss.svg)

Scss config recommendations from Timothy Burger

Your standard every day bro sass stylelint configuration:


## Instalation

```bash
npm install stylelint stylelint-config-timmy-scss --save-dev
```

## Usage

Just set your stylelint config to:

```json
{
  "extends": "stylelint-config-timmy-scss"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-recommended-scss",
  "rules": {
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```
