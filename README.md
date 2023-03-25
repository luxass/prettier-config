# @luxass/prettier-config

## Installation

```bash
pnpm add -D prettier @luxass/prettier-config
```

## Usage

```jsonc
// .prettierrc.json
"@luxass/prettier-config"
```

```jsonc
// package.json
{
  "prettier": "@luxass/prettier-config"
}
```

### Extend the config

```js
// .prettierrc.js
module.exports = {
  ...require('@luxass/prettier-config'),
  semi: false,
}
```

## License

Published under [MIT License](./LICENCE).
