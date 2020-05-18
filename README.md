# Mulan Extension

## Tools

### install commition

```bash
# after install commitizen, we use `git cz` instead of `git commit`
# which can make commit in the same standard
$ npm install -g commitizen
```

## Install

```bash
# add node_modules
$ yarn install
```

## Development

- Run script

```bash
# build files to './dev'
# start webpack development server
$ yarn dev
```

### React/Redux hot reload

This project uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window & Inject page.

## Build

```bash
# build files to './build'
$ yarn build
```

## LICENSE

[MIT](LICENSE)
